import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
                    if (response.status === 200) {
                        const { token, userInfo } = response.data;
                        localStorage.setItem('token', token);
                        localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        setMessage('로그인 성공');
                        navigate('/', { state: { userInfo: userInfo } });
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // 유효하지 않은 이메일이나 비밀번호
                setMessage('이메일 또는 비밀번호가 잘못되었습니다');
            } else {
                // 다른 오류
                setMessage('로그인 실패');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {message && <div>{message}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
