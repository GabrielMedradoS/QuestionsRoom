const sqlite3 = require("sqlite3");
const { open } = require("sqlite") // dessa forma o js vai no sqlite e procura e busca apenas o open e fica salvo na variavel open

/* banco de dados esta pronto para ser usado */
module.exports = () => {
    return open({
        filename: "./src/db/rocketq.sqlite", /* este sera o nome do nosso banco de dados */ /* sqlite é um versao leve do SQL */
        driver: sqlite3.Database, /* quem comando o banco de dados */
    })
}