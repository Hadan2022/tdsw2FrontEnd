import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

function UploadAudioFile () {

    const [fileData, setFileData] = useState({titulo: ""})
    const [file, setFile] = useState(null)

    function inputHandler(e) {
        const { id, value } = e.target
        setFileData(prevData => ({ ...prevData, [id]: value}))
    }

    function fileHandler(e) {
        setFile(e.target.files[0])
    }

    async function submitHandler(e) {
        e.preventDefault()
        await uploadFile()
    }

    async function uploadFile() {
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = true
        try {
            const response = await axios.post(
                'http://localhost:5000/api/upload',
                { 
                    titulo: fileData.titulo,
                    file: file 
                }, 
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }   


    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Pista</Form.Label>
                    <Form.Control 
                        type="file" 
                        onChange={fileHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Titulo de la pista</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange={inputHandler}
                        value={fileData.titulo}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Subir</Button>
            </Form>
            
        </div>
    )   
}

export default UploadAudioFile