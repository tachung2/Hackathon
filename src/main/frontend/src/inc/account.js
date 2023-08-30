import React, { Component } from 'react';
import './account.css'

class account extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src="gamelogo.png" alt="로고"/>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">홈</a></li>
                            <li><a href="#">장르</a></li>
                            <li><a href="#">인기게임</a></li>
                            <li><a href="#">마이페이지</a></li>
                        </ul>
                    </nav>

                </header>
                <div>
                    <div className="left-div">
                        <div className="profile">
                            <div className="image-container">
                                <img src="img/icon.png"></img>

                                <div>
                                    <div className="user">
                                        user_id
                                    </div>
                                    <div className="text">
                                        ● 내 게임
                                    </div>
                                    <div className="text1">
                                        ● 계정 연동
                                    </div>
                                    <div className="text">
                                        ● 프로필 수정
                                    </div>
                                    <hr/>
                                    <div className="text">
                                        ● 로그아웃
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                        <div className="right-div">
                            <div className="account">
                                <div className="box1"><img className="steam" src="img/steam.png"/><span>Steam</span>
                                <button className="connect1">연동완료</button></div>
                                <div className="box2"><img className="steam" src="img/riot.png"/><span>Riot Games</span><button className="connect">연동하기</button></div>
                                <div className="box3"><img className="steam" src="img/epic.png"/><span>Epic Games</span><button className="connect">연동하기</button></div>
                                <div className="box4"><img className="steam" src="img/play.png"/><span>PlayStation</span><button className="connect">연동하기</button></div>
                            </div>
                        </div>
                </div>
            </div>





        )}
}

export default account;