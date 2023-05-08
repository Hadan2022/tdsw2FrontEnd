import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function EditUserProfile () {

    const [updatedData, setUpdatedData] = useState({username: "", bio: "", ciudad: "", password: ""})

    function inputHandler(e) {
        const { id, value } = e.target
        setUpdatedData(prevData => ({ ...prevData, [id]: value}))
    }

    async function submitHandler(e) {
        e.preventDefault()
    }


    return (
        <div>
            <h1>Editar Perfil</h1>

            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>Nombre de Usuario</Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control 
                                type="username" 
                                placeholder="" 
                                onChange={inputHandler}
                                value={updatedData.username}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
        
                
                    
                
                <Form.Group className="mb-3" controlId="city">
                    <Row>
                        <Col>
                            <Form.Label>Ciudad</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="" 
                                onChange={inputHandler}
                                value={updatedData.username}
                                required
                            />
                        </Col>
                    </Row>                            
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Acerca de Mi</Form.Label>
                    <Form.Control 
                        as="textarea"
                        placeholder="" 
                        rows={3}
                        onChange={inputHandler}
                        value={updatedData.username}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={inputHandler}
                        value={updatedData.password}
                        required
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="confirmPw">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={inputHandler}
                        value={updatedData.confirmPw}
                        required
                    />
                    {updatedData.password !== updatedData.confirmPw && 
                        <p className="text-danger">
                            Las contraseñas no coinciden
                        </p>
                    }
                </Form.Group>

                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
        </div>
    )
}

export default EditUserProfile