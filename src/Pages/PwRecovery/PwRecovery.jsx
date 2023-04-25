import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

function PwRecovery () {

    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    function inputHandler(e) {
        setEmail(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div>
            <h1>Restablecer Contraseña</h1>
            <p>Ingresa tu correo electrónico para recibir una nueva contraseña</p>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingresa tu Correo" 
                        onChange={inputHandler}
                        value={email}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Recuperar Contraseña
                </Button>

                {isSubmitted && <Alert variant="info" className="mt-3">
                    Una nueva contraseña fue enviada a tu correo!
                </Alert>}
            </Form>
        </div>
    )
}

export default PwRecovery
