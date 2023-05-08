import React from 'react'
import { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

function UserProfile () {
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState({})
    const { username } = useParams()
    const [responseStatus, setResponseStatus] = useState(0)

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const response = await axios.post(
                    `http://localhost:5000/users/getUserData`,
                    { 
                        username: username
                    }
                )
                console.log(response)
                setProfileData(response.data)                
                setResponseStatus(response.status)
            } catch (error) {
                console.log("Error fetching user profile: ", error)
                setResponseStatus(404)
            }
        }
        fetchUserProfile()
    }, [username])

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/logout')
    }
    return (        
        <>
            {
                responseStatus === 0 ? 
                    <h4>Cargando...</h4> :
                responseStatus === 200 ? 
                    <div>
                        <h1>Perfil de Usuario</h1>
                        <button onClick={handleLogout}>Logout</button>
                        <br />
                        <button onClick={() => {navigate('/')}}>Feed</button>
                        <br />
                        <button onClick={() => {navigate('/edit-profile')}}>Editar Perfil</button>
                        <br />
                        <br />
                        <p>Email: {profileData.email}</p>
                        <p>Username: {profileData.username}</p>
                    </div>
                :
                    <h1>NOT FOUND</h1>
                
            }
        </>
        )
}

export default UserProfile