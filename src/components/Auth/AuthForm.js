import { useState, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const AuthForm = (props) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInput.current.value;

        props.onEnterLogin(enteredEmail, enteredPassword);
    }

    return (
        <section id="authForm">
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="authEmail">
                    <FloatingLabel controlId="floatingAuthEmail" label="Email">
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter Email"
                            ref={emailInputRef}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="authPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter Password"
                            ref={passwordInputRef}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </section>
    )
}

export default AuthForm;