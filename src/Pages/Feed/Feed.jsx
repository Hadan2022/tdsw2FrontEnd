import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Feed () {
    const navigate = useNavigate()

    return (
        <>
            <h1>Hola</h1>
            <Button onClick={ () => navigate("/login") }>Ir a Login</Button>
            <br />
            <Button onClick={ () => navigate("/register") }>Ir a Registro</Button>
            <br />
            <Button onClick={ () => navigate("/password-recovery") }>Ir a Recuperación de Contraseña</Button>
        </>
    )
}

export default Feed