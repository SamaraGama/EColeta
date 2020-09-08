const express  = require("express")
const server = express()

// requisita o banco de dados
const db = require("./database/db.js")

// configurar pasta pública
server.use(express.static("public"))

//habilitar o uso do req.body (corpo do formulário)
server.use(express.urlencoded({ extended: true }))

// template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// caminhos da aplicação
// página inicial
server.get("/", (req, res) => {
    return res.render("index.html")

})

server.get("/create-point", (req, res) => {

    //.query: Query Strings da URL
    //console.log(req.query)
    return res.render("create-point.html")
} )

server.post("/savepoint", (req, res) => {
    //req.body: corpo do formulário "invisível"

    //inserir dados
    const query = `
    INSERT INTO places (
        name,
        image,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
const values = [
    req.body.name,
    req.body.image,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})
}

db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {
    const search = req.query.search
    //pesquisa vazia
    if(search == "") {
        return res.render("search-results.html", {total: 0} )
    }
    // obtenção de dados (strings semelhantes à pesquisa) do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,  function(err, rows) {
        if(err) {
        return console.log(err)
        }
       const total = rows.length
       console.log(rows)

        // exibe página html com dados obtidos
        return res.render("search-results.html", { places: rows, total: total })
    }) 
})

// Ligar o servidor
server.listen(3000)
