import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'

const Login = () => {
    const [ username, setUsername ] = useState('jeewan.thapa9@gmail.com')
    const [ password, setPassword ] = useState('tracknerd@123')
    const navigate = useNavigate()
    const handleUserLogin = async () => {
        axios({
            method: 'post',
            url: `https://staging-api.tracknerd.io/v1/auth/login`,
            data: {
                username: username,
                password: password
            }
        })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/vehicles')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div
            style={{
                width: '70%',
                margin: '8rem auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{ color: '#780206' }}>Login</h1>
            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '50%', margin: '1rem auto', padding: '0.5rem 0.5rem' }}
            />
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '50%', margin: '1rem auto', padding: '0.5rem 0.5rem' }}
            />
            <Button
                onClick={handleUserLogin}
                style={{
                    color: '#061161',
                    width: '10%',
                    margin: '1rem auto',
                    padding: '0.5rem 0.5rem',
                    textAlign: 'center',
                    font: '600 1rem "SemiBold"'
                }}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
