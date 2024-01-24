import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            name='email'
            type='email'
            size='sm'
            placeholder='Email address'
          />
          <Button type='submit' size='sm'>
            Send
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default Contact;
