![](public/assets/logo.svg)


<h2>:exclamation: Sobre:</h2>
O EColeta é uma aplicação web que busca ajudar quem procura por pontos de coleta de material reciclável ou resíduo orgânico.
Esse projeto foi proposto pela trilha Starter da Next Level Week, distribuída pela Rocketseat durante a semana do meio ambiente, em junho.

<h2>:computer: Tecnologias utilizadas:</h2>

<h3>Front-end:</h3>
  <ul>
    <li>HTML 5;</li>
    <li>CSS 3;</li>
    <li>JavaScript;</li>
    <li>Nunjucks.</li>
 </ul>
<h3>Back-end:</h3>
  <ul>
    <li>Node.js;</li>
    <li>Express;</li>
    <li>Nodemon;</li>
    <li>SQLite 3.</li>
  </ul>
<h3>API's:</h3>
  <ul>
    <li>IBGE localidades.</li>
  </ul>
  

## :mag_right:  Pré-visualização:
### Página inicial
![home](https://user-images.githubusercontent.com/62730150/92491177-516be480-f1c8-11ea-9939-4c67d1666a4e.PNG)
### Página de cadastro de ponto de coleta
![form](https://user-images.githubusercontent.com/62730150/92491975-3baaef00-f1c9-11ea-8c89-e72e7685b62a.PNG)
### Aba de pesquisa
![search](https://user-images.githubusercontent.com/62730150/92491517-b32c4e80-f1c8-11ea-81c9-2c21bce838a8.PNG)
### Página de resultados da pesquisa por cidade
![search-results](https://user-images.githubusercontent.com/62730150/92491542-bb848980-f1c8-11ea-9541-5ba08b17ab6e.PNG)

<h2>:question: Como executar:</h2>
  <h3>1. Pré-requisitos:</h3>
    <ul>
      <li>Instale o ambiente de execução <a href="https://nodejs.org/en/">Node.js</a>.</li>
      <li>Instale o gerenciador de pacotes <a href="https://www.npmjs.com/">NPM</a>.</li>
    </ul>

### 2. Faça um clone desse repositório:
```
  $ git clone https://github.com/SamaraGama/EColeta.git
```

### 3. Instale as dependências:
```
  $ npm install
```

### 4. Crie o banco de dados:
- Acesse o documento [src/database/db.js](src/database/db.js);
- Remova o delimitador de comentário ```/*``` da linha ```9```;
- Salve as alterações;
- Execute o script:
```
$ node src/database/db.js
```
- Re-insira o delimitador de comentário ```/*``` na linha ```9```;

### 5. Ligue o servidor:
```
$ npm start
```

:rocket: Aulas ministradas por: **[Mayk Brito](https://github.com/maykbrito)**, da **[Rocketseat](https://github.com/Rocketseat)**.


