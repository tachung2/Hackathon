import React, { Component } from 'react';
import './login.css';


class login extends Component {
    render() {
    return (
        <div>
                <div class="left-div">
                     <div class="image-container">
                         <img src='img/icon.png'></img>
                         <p>RecoGame</p>
                     </div>
                     <div class="text">
                         Welcome RecoGame
                     </div>
                </div>

            <div>
                <div class="right-div">
                    <div>
                        <h2>로그인</h2>
                        <p>이메일</p>
                        <input type="email" placeholder="이메일"></input>
                    </div>
                    <div>
                        <p>비밀번호</p>
                        <input type="password" placeholder="비밀번호"></input>
                    </div>
                    <div>
                        <button>로그인</button>
                    </div>
                    <div>
                        <p>RecoGame 계정이 아직 없으신가요?</p>
                        <p class="register">회원가입</p>
                    </div>
                </div>
            </div>

            </div>
    )}
}

export default login;