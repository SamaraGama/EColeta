<h1><img src=”https://github.com/SamaraGama/EColeta/tree/master/public/assets/logo.svg”></h1>


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
 
<h2>:mag_right:  Pré-visualização:</h2>
<h3>Página inicial</h3>
<img src=”https://github.com/SamaraGama/EColeta/tree/master/docs/screenshots/home.png”, width="400">
<h3>Página de cadastro de ponto de coleta</h3>
<img src=”https://github.com/SamaraGama/EColeta/tree/master/docs/screenshots/form.png”>
<h3>Aba de pesquisa</h3>
<img src=”https://github.com/SamaraGama/EColeta/tree/master/docs/screenshots/search.png”>
<h3>Página de resultados da pesquisa por cidade</h3>
<img src=”https://github.com/SamaraGama/EColeta/tree/master/docs/screenshots/search-results.png”>

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


