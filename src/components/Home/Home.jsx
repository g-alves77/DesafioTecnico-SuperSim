import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

import "./global.css"

const Home = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const name = document.getElementById("name").value
        localStorage.setItem("name", name)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
  
      setValidated(true);

    };

    return(
        <div className="home">
            <h1>Bem vindos! Preencha os dados abaixo e veja nossos pokémons</h1>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" id="name" required/>
                </Form.Group>

                <Button variant="primary" type="submit" formAction="/lista">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}  

export default Home;