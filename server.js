const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/', (req, res) => {
  const { weight, height } = req.body;
  const BMI = weight / ((height / 100) ** 2);
  res.write(`<h1>Your BMI is ${BMI.toFixed(1)}</h1>`);
  res.send();
});

app.listen(3001);
