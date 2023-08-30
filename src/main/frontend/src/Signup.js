import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', { email, password, name });
            if (response.status === 201) {
                // Successfully created a new user
                setMessage('회원가입 성공');
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // Email already exists
                setMessage('중복된 이메일 입니다.');
            } else {
                // Other error
                setMessage('회원가입 실패');
            }
        }
    };

    return (
        <div>
            <h2>Signup</h2>
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
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;