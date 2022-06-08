import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UsingBackend() {
  return (
    <div className="hooks">
      <div className="exp">
        <p>This is an exemple of a BMI calculator using Node, Express and Body-parser:</p>
        <p>Este é um exemplo de uma calculadora de IMC utilizando Node, Express and Body-parser:</p>
      </div>
      <Form className="form" action="/" method="post">
        <Form.Group className="mb-3">
          <Form.Label>Type your height / Digite sua altura (cm):</Form.Label>
          <Form.Control type="number" placeholder="Height / Altura..." name="height" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type your weight / Digite seu peso (kg):</Form.Label>
          <Form.Control type="number" placeholder="Weight / Peso ..." name="weight" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calculate BMI / Calcular IMC
        </Button>
      </Form>
    </div>
  );
}

export default UsingBackend;
