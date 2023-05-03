import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

function Login() {

    const [data, setData] = useState({})

    function inputHandler(e) {
        e.target.id === "email" ? 
            setData({...data, email: e.target.value}) :
            setData({...data, password: e.target.value})
    }

    async function submitHandler(e) {
        e.preventDefault()
        await loginUser()
        console.log(data)
    }

    async function loginUser() {
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = true
        try {
            const response = await axios.post(
                'http://localhost:5000/users/login',
                { 
                    correo: data.email, 
                    password: data.password 
                }, 
            )
            console.log(response)

        } catch (error) {
            console.log(error)
        }
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