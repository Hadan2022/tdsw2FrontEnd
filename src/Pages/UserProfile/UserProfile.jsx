import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserProfile () {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/logout')
    }
    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <button onClick={handleLogout}>Logout</button>
            <br />
            <button onClick={() => {navigate('/')}}>Feed</button>
        </div>
    )
}

export default UserProfile