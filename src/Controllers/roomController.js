const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        
        let roomId 
        let isRoom = true

        while (isRoom) {
        /* Gera o numero da sala */
            for(var i=0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
                roomId += Math.floor(Math.random() * 10).toString()
            }
            
        /* Verifica se esse numero ja existe */
        /* Verificar se o numero ja existe no banco de dados */
        /* `SELECT * FROM rooms` Seleciono todos
        `SELECT id FROM rooms`  Seleciono apenas o escolhido
        `SELECT id, pass FROM rooms` possso escolher mais de um */
            const roomExistIds = await db.all(`SELECT id FROM rooms`) //vou buscar tudo no banco de dados
            isRoom = roomExistIds.some(roomExistIds => roomExistIds === roomId)
            if(! isRoom) {
                /* Inseri a sala no banco */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }

        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    // params separado /:room , no query é separado por ?id=
    async open(req, res) {
        const db = await Database()
        const  roomId = req.params.room
        // WHERE room = ${roomId} esta trazendo de uma sala especifica
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`) // perguntas nao lidas 0
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`) // perguntas lidas 1
      
        let isNoQuestions  // Tela para saber se tem perguntas na sala 
        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions }) // passando apra o EJS
    },

    enter(req, res) {
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }

}