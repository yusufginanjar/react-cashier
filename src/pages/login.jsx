
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(e.target.role.value);
        if(e.target.role.value === 'cashier'){
            window.location.href = '/cart';
        } else if (e.target.role.value === 'product-manager'){
            window.location.href = '/dashboard';
        }

    };
    return (
        <div className="container bg-light" style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-md-6" style={{ padding: '50px' }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="username" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" name="role">
                                <option value="cashier">Cashier</option>
                                <option value="product-manager">Product Manager</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-4'>
                            Login
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6 right-side" style={{ paddingTop: '120px' }}>
                <div className="for-large d-flex align-items-center">
                        <div className="wrapper">
                            <h6>WELCOME TO</h6>
                            <h2>CASHIER APP</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
