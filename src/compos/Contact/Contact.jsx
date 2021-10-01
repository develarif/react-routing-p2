import React from 'react';
import './Contact.css';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id='contact-page'>
            <ContactHero />
            <ContactForm />
        </div>
    );
};

const ContactHero = () => {
    return (
        <section className='hero'>
            <Container>
                <h1>Contact Us</h1>
            </Container>
        </section>
    );
};

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <Container>
                <Form>
                    <FloatingLabel label='Email address' className='mb-3'>
                        <Form.Control
                            type='email'
                            placeholder='name@example.com'
                        />
                    </FloatingLabel>
                    <FloatingLabel label='Comments' className='mb-3'>
                        <Form.Control
                            as='textarea'
                            placeholder='Leave a comment here'
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button type='submit' variant='primary'>
                        Send Now
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
