import React from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Feed () {
    const navigate = useNavigate()

    async function navigateToProfile() {
        try {
            const response = await axios.get(
                `http://localhost:5000/users/`,
                { 
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            console.log(response)
        } catch (error) {
            console.log("Error fetching user profile: ", error)
        }    
    }
    return (
        <>
            <h1>Hola</h1>
            <Button onClick={ () => navigate("/login") }>Ir a Login</Button>
            <br />
            <Button onClick={ () => navigate("/register") }>Ir a Registro</Button>
            <br />
            <Button onClick={ () => navigate("/password-recovery") }>Ir a Recuperación de Contraseña</Button>
            <br />
            {localStorage.getItem('token') && <Button onClick={navigateToProfile}>Ir a perfil</Button>}
        </>
    )
}

export default Feed