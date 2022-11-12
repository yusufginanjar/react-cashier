import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import products from '../db/data.json';
import { Link } from 'react-router-dom';

export default function Cart() {
    const [lgShow, setLgShow] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    const addToCart = (product) => {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === product.id);
        if (item) {
            item.qty += 1;
        } else {
            newCart.push({ ...product, qty: 1 });
        }
        setCart(newCart);
        setTotalQty(totalQty + 1);
        setTotal(total + product.price);
        console.log(product.price);
    };

    const removeFromCart = (product) => {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === product.id);
        if (item.qty === 1) {
            const index = newCart.indexOf(item);
            newCart.splice(index, 1);
        } else {
            item.qty -= 1;
        }
        setCart(newCart);
        setTotalQty(totalQty - 1);
        setTotal(total - product.price);
    };

    const addQty = (product) => {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === product.id);
        item.qty += 1;
        setCart(newCart);
        setTotalQty(totalQty + 1);
        setTotal(total + product.price);
    };

    const minusQty = (product) => {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === product.id);
        if (item.qty === 1) {
            const index = newCart.indexOf(item);
            newCart.splice(index, 1);
        } else {
            item.qty -= 1;
        }
        setCart(newCart);
        setTotalQty(totalQty - 1);
        setTotal(total - product.price);
    };


    return (
        <section id="single" className=''>       
        <div className="container bg-light" style={{ padding: '40px', marginTop:'50px' }}>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mt-5 mb-3 fw-bold">Product Carts</h4>
                        </div>
                    <Button onClick={() => setLgShow(true)}>Add Cart</Button>
                    </div>
                    <hr/>
                    <div className="row pb-5">
                    <Table   hover size="sm">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Quantity / Weight</th>
                            <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-warning minus" onClick={() => minusQty(item)} >-</button>
                                        <input type="text" className="form-control text-center" style={{ maxWidth: '50px' }} id="amount" placeholder="1" value={item.qty}/>
                                        <button className="btn btn-danger plus" onClick={() => addQty(item)} >+</button>
                                    </div>
                                    </td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className="col-md-4 cart-totals ps-4" style={{ marginTop: '100px' }}>
                    <h5>Cart Totals</h5>
                    <div className="d-flex mt-4 mb-2">
                        <h5>Sub Total</h5>
                        <h5 className="ms-auto fw-bold">IDR {total}</h5>
                    </div>
                    <div className="d-flex">
                        <h5>Total</h5>
                        <h5 className="ms-auto fw-bold">IDR {total}</h5>
                    </div>
                        <form className="my-4 checkout">
                            <button type="submit" className="btn btn-success mb-4 add-cart">
                                <Link to="/checkout" className="text-white">Checkout</Link>
                            </button>
                      </form>
                </div>
            </div>
         </div>
         <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Search Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">search</button>
        </div>
        <Table   hover size="sm">
            <thead>
                <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Add to Cart</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><Button onClick={() => addToCart(item)}>Add to Cart</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </Modal.Body>
      </Modal>
    </section>

    
    )};