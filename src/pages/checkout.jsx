import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

export default function Checkout() {
    const [change, setChange] = useState(0);
    const [cash, setCash] = useState(0);
    const [total, setTotal] = useState(62000);
    
    // if cash-amout change, then cash-cange will be cash-price - cash-amount
    useEffect(() => {
        setChange(cash - total);
    }, [cash]);

    const handleCash = (e) => {
        setCash(e.target.value);
    };

    return (
        <div className="container bg-light" style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-md-8" style={{ padding: '50px' }}>
                        <h1 className="mb-3">Payment Method</h1>
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Cash</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="cash-price" disabled value={total} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="number" name="cash-amount" onChange={handleCash} on placeholder="Enter Amount" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Change</Form.Label>
                                    <Form.Control type="text" name='cash-change' disabled value={change} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-4'>Submit</Button>
                            </Form>

                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <Accordion.Header>QRIS</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Input the proof of payment</Form.Label>
                            <Form.Control type="file" />
                            <Button variant="primary" type="submit" className='mt-4'>Submit</Button>
                        </Form.Group>
                        </Form>
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header>Debit/Credit Card</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Customer Name' />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Card Number" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-4'>Submit</Button>
                            </Form>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}