import Table from 'react-bootstrap/Table';
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import _products from '../db/data.json';

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(_products);
    }, []);


    const handleSearch = (e) => {
        const search = e.target.value;
        const filteredProducts = _products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });
        setProducts(filteredProducts);
    };
    
    const handleAlert = (e) => {
        e.preventDefault();
        alert('Product Quantity Changed');
    };
    
    return (
        <section id="single" className=''>       
        <div className="container bg-light" style={{ padding: '40px', marginTop:'50px' }}>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mt-5 mb-3 fw-bold">Edit Stock of Products</h4>
                        </div>
                        <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Search" onChange={handleSearch} name="search" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </div>
                    <hr/>
                    <div className="row pb-5">
                    <Table   hover size="sm">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Save</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <input type="number" className="form-control text-center" style={{ maxWidth: '150px' }} id="amount" placeholder={item.quantity} name="quantity"/>
                                    </div>
                                    </td>
                                    <td>
                                        <Button onClick={handleAlert}>Save</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
         </div>
    </section>

    
    )};