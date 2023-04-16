import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validate, setValidate] = useState({ isShown: true, msg: '', variant: '' });

    const validateData = (e) => {

        e.preventDefault();

        if (email === '' || password === '') {
            setValidate({ isShown: true, msg: 'Todos los campos son obligatorios', variant: 'warning' });
            return;
        } else if (email.trim() === 'login@desafio18.com' && password.trim() === 'proyectoreact2') {
            setValidate({ isShown: true, msg: 'Usuario y contraseña correctos.', variant: 'success' });
            return;
        } else {
            setValidate({ isShown: true, msg: 'Usuario y/o contraseña incorrectos', variant: 'danger' });
            return;
        }
    };

    return (

        <div className="container">

            <h3 className="title">Bienvenido</h3>

            <Form className="form" onSubmit={validateData}>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Usuario</Form.Label>

                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu Email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Label>Contraseña</Form.Label>

                    <Form.Control
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                </Form.Group>
                
                <Button className="button" type="submit" size="lg" disabled={!email || !password}>
                    Ingresa
                </Button>
              


                {validate.isShown ? <Alert className="alert" key={validate.variant} variant={validate.variant}>{validate.msg}</Alert> : null}

            </Form>


        </div>

    );
}

export default Login;