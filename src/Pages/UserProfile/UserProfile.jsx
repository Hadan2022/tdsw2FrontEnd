import React from 'react'
import { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

function UserProfile () {
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/users/${userId}`,
                    { 
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                )
                console.log(response)
                setProfileData(response.data)
            } catch (error) {
                console.log("Error fetching user profile: ", error)
            }
        }

        fetchUserProfile()
    }, [userId])

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
            <br />
            <p>Email: {profileData.email}</p>
            <p>Name: {profileData.name}</p>
        </div>
    )
}

export default UserProfile