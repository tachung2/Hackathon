package com.tachung.server.controller;

import com.tachung.server.DTO.AuthenticationResponse;
import com.tachung.server.DTO.GameInfo;
import com.tachung.server.DTO.UserInfo;
import com.tachung.server.domain.user.User;
import com.tachung.server.domain.user.UserRepository;
import com.tachung.server.service.GameInfoService;
import com.tachung.server.service.TwitchService;
import com.tachung.server.service.UserService;
import com.tachung.server.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    private final TwitchService twitchService;
    private final GameInfoService gameInfoService;
    private final UserService userService;

    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    public MainController(TwitchService twitchService, UserService userService, UserRepository userRepository, JwtUtil jwtUtil, GameInfoService gameInfoService) {
        this.twitchService = twitchService;
        this.userService = userService;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.gameInfoService = gameInfoService;
    }

    @GetMapping("/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/twitch")
    public ResponseEntity<String> getTopGamesExcludingJustChatting() {
        String accessToken = twitchService.getAccessToken();
        if (accessToken != null) {
            // Get Twitch Top Games excluding 'Just Chatting'
            String topGames = twitchService.getTopGamesExcludingJustChatting(accessToken);
            return ResponseEntity.ok(topGames);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error getting access token");
        }
    }
    @GetMapping("/topgames")
    public List<GameInfo> getTopGames() {
        String accessToken = gameInfoService.getAccessToken();
        if (accessToken != null) {
            // Get Twitch Top Games excluding 'Just Chatting'
            return gameInfoService.getTopGames(accessToken);
        } else {
            return null;
        }
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        try {
            userService.signup(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (IllegalStateException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            // 이메일과 비밀번호가 일치하는 경우
            String token = jwtUtil.generateToken(user.getEmail());
            UserInfo userInfo = new UserInfo(existingUser.get().getName(), existingUser.get().getEmail());
            return ResponseEntity.ok(new AuthenticationResponse(token, userInfo));  // 200 상태 코드 반환
        }
        // 이메일이 없거나 비밀번호가 일치하지 않는 경우
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();  // 401 상태 코드 반환
    }



}
