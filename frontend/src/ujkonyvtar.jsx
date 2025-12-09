import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import './UjKonyv.css';

const UjKonyv = () => {
    const [cim, setCim] = useState("");
    const [szerzo, setSzerzo] = useState("");
    const [mufaj, setMufaj] = useState("");
    const [uzenet, setUzenet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/ujkonyv", {   
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ szerzo, cim, mufaj }),  
        })
            .then(res => res.json())
            .then(data => {
                setUzenet(`A könyv sikeresen hozzáadva! (ID: ${data.id})`);
                setCim("");
                setSzerzo("");
                setMufaj("");
            })
            .catch(err => {
                console.error(err);
                setUzenet("Hiba történt a mentés során!");
            });
    };

    return (
        <Container className="ujkonyv-container mt-4">
    <Form className="ujkonyv-form" onSubmit={handleSubmit}>
        <h1>Új könyv hozzáadása</h1>

        {uzenet && <Alert variant="info">{uzenet}</Alert>}

        <Form.Group className="mb-3">
            <Form.Label>Cím </Form.Label>
            <Form.Control
                type="text"
                value={cim}
                onChange={(e) => setCim(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Szerző </Form.Label>
            <Form.Control
                type="text"
                value={szerzo}
                onChange={(e) => setSzerzo(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Műfaj </Form.Label>
            <Form.Control
                type="text"
                value={mufaj}
                onChange={(e) => setMufaj(e.target.value)}
                required
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Könyv hozzáadása
        </Button>
    </Form>
</Container>

    );
};

export default UjKonyv;
