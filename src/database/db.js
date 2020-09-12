//importa dependência sqlite3
const sqlite3 = require("sqlite3").verbose()

//cria objeto que opera o banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utiliza o objeto de banco de dados 
/* db.serialize(() => {
    //criar tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    */

    //inserir dados
    /*const query = `
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
    "Colectoria",
    "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Rua, Bairro",
    "Número",
    "Estado",
    "Cidade",
    "Itens de coleta"
]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
}
    //db.run(query, values, afterInsertData)
    
    

    //deletar dados
    db.run(`DELETE FROM places WHERE id = ?`, [], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })


    //consultar dados
    db.all(`SELECT * FROM places`,  function(err, rows) {
    if(err) {
    return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
    })
}) */