
# **[Treino] Calculadora IMC**

Breve exercício demonstrando a mesma funcionalidade utilizando React Hooks e backend (Node, Express e Body-Parser).

---

## **Explicação**

### **React Hooks**

Primeiramente, como não era o foco desse exercício, não foi feita qualquer validação dos dados nos inputs ou exibicóes avançadas. Tão pouco foi utilizado ejs.  [:smile]

Conforme demonstrado abaixo, a primeira divisão é destinada à calculadora de IMC utilizando React Hooks. A altura e peso são armazenados em um estado e, quando o usuário clica em 'Calcular', o resultado do IMC é armazenado em outro estado e exibido na tela.

![Imagem mostrando a primeira calculadora utilizando React Hooks](/images/01.PNG "Primeira calculadora utilizando React Hooks")

Os estados são criados em um componente a parte (UsingHooks.jsx), com valor default de '0':

``` js
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
```
Os estados são definidos conforme o input sofre alteração com `onChange`. Ao clicar em calcular, é definido o estado `count` com o valor total do IMC. 

A exibição do dado é limitada para apenas a primeira casa decimal.

---
### **Backend (Node, Express, Body-Parser)**

A segunda divisão é destinada ao cálculo pelo backend. Foi utilizado Node, Express e Body-parse para todo o processamentos, sendo devolvido o resultado após o envio do formulário por método POST.

![Imagem mostando a segunda calculadora utilizando Node, Express e Body-Parser](/images/02.PNG "Segunda calculadora utilizando backend")

O resultado final é exibido em uma nova página, conforme imagem abaixo:

![Imagem mostrando o resultado do cálculo do IMC em uma nova página em branco](/images/03.PNG "Imagem mostrando o resultado do cálculo do IMC em uma nova página em branco")

O formulário recebe `action="/" method="post"`, já o arquivo de configuração do Express (server.js) possui as seguintes peculariedades:

* É utilizado o Body-Parser para acessar o body da requisição e capturar os dados passados (nweight e height). No caso, foi utilizado `urlencoded` que é uma função de middleware integrada no Express para analisar as solicitações/requisições recebidas e codificadas em URL.
```js
  const bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
```

* `static` foi utilizado para entregar arquivos estáticos como os arquivos CSS e JavaScript.
```js
  app.use(express.static('public'));
```

* Quando ocorre uma requisição POST, é calculado o IMC do usuário e retornado como resposta uma título de nível 1 com `Your BMI is ...`, mostrando o resultado para o usuário em uma nova página.
```js
  app.post('/', (req, res) => {
    const { weight, height } = req.body;
    const BMI = weight / ((height / 100) ** 2);
    res.write(`<h1>Your BMI is ${BMI.toFixed(1)}</h1>`);
    res.send();
  });
```

---
## **Installation**

Deve-se instalar o projeto com NPM:

```bash
    cd CalculadoraIMC
    npm install
```
Para iniciar o servidor com nodemon:

```bash
    npm run server
```

A porta padrão é `3001`, sendo possível o acesso por `localhost:3001`