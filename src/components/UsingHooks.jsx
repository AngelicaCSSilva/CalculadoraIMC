import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UsingHooks() {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <div className="hooks">
      <div className="exp">
        <p>This is an exemple of a BMI calculator using only React Hooks:</p>
        <p>Este é um exemplo de uma calculadora de IMC utilizando apenas React Hooks:</p>
      </div>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>Type your height / Digite sua altura (cm):</Form.Label>
          <Form.Control type="number" placeholder="Height / Altura..." onChange={(event) => setHeight(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type your weight / Digite seu peso (kg):</Form.Label>
          <Form.Control type="number" placeholder="Weight / Peso ..." onChange={(event) => setWeight(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => setCount(weight / ((height / 100) ** 2))}>
          Calculate BMI / Calcular IMC
        </Button>
      </Form>

      <p className="form">{`Your BMI is ${count.toFixed(1)}`}</p>
    </div>
  );
}

export default UsingHooks;
