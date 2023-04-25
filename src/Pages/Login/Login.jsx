import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {

    const [data, setData] = useState({})

    function inputHandler(e) {
        e.target.id === "email" ? 
            setData({...data, email: e.target.value}) :
            setData({...data, password: e.target.value})
    }

    function submitHandler(e) {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingresa tu Correo" 
                        onChange={inputHandler}
                        value={data.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={inputHandler}
                        value={data.pw}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </div>
    )
}

export default Login