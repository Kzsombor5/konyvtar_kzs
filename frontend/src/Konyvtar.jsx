import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import './Konyvtar.css';

const Konyvtar = () => {
    const [konyvek, setKonyvek] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/konyvek")
            .then(res => res.json())
            .then(data => setKonyvek(data))
            .catch(err => console.error("Hiba:", err));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Könyvtár oldal</h1>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {konyvek.map(k => (
                    <Col key={k.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Text>
                                    <strong>Cím: </strong> {k.cim}
                                </Card.Text>

                                <Card.Text>
                                    <strong>Szerző: </strong> {k.szerzo}
                                </Card.Text>
                                
                                <Card.Text>
                                    <strong>Műfaj:</strong> {k.mufaj}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Konyvtar;
