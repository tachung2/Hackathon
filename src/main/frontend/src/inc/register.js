import React, { Component } from 'react';
import './register.css'

class register extends Component {
    render() {
        return (
            <div>
                <div class="left-div">
                    <div class="image-container">
                        <img src="img/icon.png"></img>
                    </div>
                    <div class="text">
                        Welcome RecoGame
                    </div>
                </div>

                <div>
                    <div class="right-div">
                        <div>
                            <h2>회원가입</h2>

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
                            <button>회원가입</button>
                        </div>
                        <div>
                            <p>RecoGame 계정이 있으신가요?</p>
                            <p class="register">로그인</p>
                        </div>
                    </div>
                </div>

            </div>
        )}
}

export default register;
