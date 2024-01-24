import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function Welcome() {
  return (
    <>
      <div className='welcome_box'>
        <span className='skip_button'>Skip for now &gt;</span>
        <h3>Hello new visitor, what's your name?</h3>
        <Form>
          <Form.Row>
            <Col xs='auto' sm={5}>
              <Form.Control size='sm' type='text' name='name' />
            </Col>
            <Col>
              <Button type='submit' size='sm'>
                Continue
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <span>If you already have an account, login</span>
      </div>
    </>
  );
}

export default Welcome;
