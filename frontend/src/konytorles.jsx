import React, { useEffect, useState } from "react";
import { Container, ListGroup, Button, Alert } from "react-bootstrap";
import "./konyvtorol.css";

const Konyvtorles = () => {
    const [konyvek, setKonyvek] = useState([]);
    const [uzenet, setUzenet] = useState("");


    const fetchKonyvek = () => {
        fetch("http://localhost:3000/konyvek")
            .then(res => res.json())
            .then(data => setKonyvek(data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchKonyvek();
    }, []);

 
    const handleTorles = (id) => {
        if (!window.confirm("Biztosan törölni szeretnéd a könyvet?")) return;

        fetch(`http://localhost:3000/konyvtorles/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status !== 204) throw new Error("Hiba a törlés során");
                setUzenet("A könyv sikeresen törölve!");
                fetchKonyvek(); 
            })
            .catch(err => {
                console.error(err);
                setUzenet("Hiba történt a törlés során!");
            });
    };

    return (
        <Container fluid className="konyvtorles-container mt-4">
    <h1 className="mb-4">Könyv törlése</h1>

    {uzenet && <Alert variant="info">{uzenet}</Alert>}

    <ListGroup>
        {konyvek.map(k => (
            <ListGroup.Item
                key={k.id}
            >
                <div>
                    <strong>{k.cim}</strong> – {k.szerzo}
                </div>
                <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleTorles(k.konyv_id)}
                >
                    Törlés
                </Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
</Container>

    );
};

export default Konyvtorles;
