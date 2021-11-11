import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Cycles = () => {
    const [allProducts, setAllProducts] = useState({});
    const history = useHistory();
    useEffect(() => {
        axios.get('https://obscure-depths-70319.herokuapp.com/products')
            .then(res => setAllProducts(res.data))
    }, [])
    const handleProductBuy = id => {
        history.push(`/productBuy/${id}`)
    }
    return (
        <div>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col>
                        <h4 className="fs-3">  <span className="text-warning">FEATURED</span>  PRODUCTS</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</p>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4">

                    {allProducts.length ? allProducts.map(product => <Col
                        key={product._id}>
                        <Card className="bg-light product-background">
                            <Card.Img variant="top" src={product.img} className="px-5 pt-3" style={{ height: "200px" }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <p className="fs-5 mb-0">Price :  <span className="text-warning fw-bold">{product.price} Tk</span> </p>
                                <Card.Text className="text-start">
                                    {product.description.slice(0, 122)}.

                                </Card.Text>
                                <Button variant="dark" onClick={() => handleProductBuy(product._id)}>Buy Now</Button>
                            </Card.Body>

                        </Card>
                    </Col>) : <div>  <Spinner animation="border" variant="dark" /></div>

                    }

                </Row>
            </Container>

            <Footer />

        </div>
    );
};

export default Cycles;