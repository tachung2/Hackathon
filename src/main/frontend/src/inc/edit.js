import React, { Component } from 'react';
import './edit.css'

class edit extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src="img/gamelogo.png" alt="로고"/>
                        <p>RecoGame</p>
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

                                <div className="sorts">
                                    <div className="user">
                                        user_id
                                    </div>
                                    <div className="text">
                                        ● 내 게임
                                    </div>
                                    <div className="text">
                                        ● 계정 연동
                                    </div>
                                    <div className="text1">
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

                    <div className="edit">
                        <div className="right-div">
                            <div>
                                <h2>프로필 수정</h2>

                                <div>
                                    <div className="name">
                                        <p>성</p>
                                        <input className="input2" type="text" placeholder="성"/>
                                    </div>
                                    <div className="name">
                                        <p>이름</p>
                                        <input className="input2" type="text" placeholder="이름"/>
                                    </div>
                                </div>


                                <p>이메일</p>
                                <input type="email" placeholder="이메일"></input>
                            </div>

                            <div>
                                <div className="pw">
                                    <p>비밀번호</p>
                                    <input className="input2" type="password" placeholder="비밀번호"></input>
                                </div>
                                <div className="pw">
                                    <p>비밀번호 확인</p>
                                    <input className="input2" type="password" placeholder="비밀번호 확인"></input>
                                </div>
                            </div>

                            <div>
                                <button>수정</button>
                            </div>
                            <div>
                                <p className="register">회원탈퇴</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )}
}

export default edit;