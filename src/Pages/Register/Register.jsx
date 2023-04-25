import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

function Register() {

    const [data, setData] = useState({email: "", password: "", confirmPw: ""})

    function inputHandler(e) {
        if( e.target.id === "email" ) {
            setData({...data, email: e.target.value})
        } 
        else if (e.target.id === "password") {
            setData({...data, password: e.target.value})
        } 
        else {
            setData({...data, confirmPw: e.target.value})
        }
    }

    async function submitHandler(e) {
        e.preventDefault()
        await registerUser()
    }

    async function registerUser() {
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = true
        try {
            
            const response = await axios.post(
                'http://localhost:5000/users/register',
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
            <h1>Registro</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingresa tu Correo" 
                        onChange={inputHandler}
                        value={data.email}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={inputHandler}
                        value={data.password}
                        required
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="confirmPw">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={inputHandler}
                        value={data.confirmPw}
                        required
                    />
                    {data.password !== data.confirmPw && 
                        <p className="text-danger">
                            Las contraseñas no coinciden
                        </p>
                    }
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    )
}

export default Register