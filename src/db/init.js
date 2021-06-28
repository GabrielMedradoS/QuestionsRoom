const Database = require("./config") // importando oque foi criado no config

const initDb = {
    async init(){ // para usar o await devo usar o async junto 
        const db = await Database() // espera pegar todos os dados e infos para rodar o proximo cod

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();

// comando SQL sempre em maiusculo, oque nao for comando SQL - minusculo

/* CREATE TABLE comando SQL rooms titulo 
 CREATE TABLE rooms (
    id INTEGER PRIMARY KEY, garante ids unicos
    pass TEXT
) */