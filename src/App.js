import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import UserList from './UserList'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/vehicles" element={<UserList />} />
            </Routes>
        </div>
    )
}

export default App
