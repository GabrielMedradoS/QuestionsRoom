const express = require('express')
const QuestionController = require('./Controllers/QuestionController')
const roomController = require('./Controllers/roomController')

const route = express.Router() /* guarda todas as funcionalidade de rotas */ 

/* navegador apenas pega as rotas e mostras, no caso get */
route.get('/', (req, res) => res.render("home", {page: 'enter-room'}))  /* resquest and response, onde liga a rota ao arquivo inicial/principal */
/*  No caso, toda vez que requisitar a reposta sera o render (renderizar) */
route.get('/create-pass', (req, res) => res.render("home", {page:'create-pass'})) // este é esta passando uma variavel

route.post('/enterroom', (req, res) => roomController.enter(req, res)) //entrar na sala 


route.post('/create-room', (req, res) => roomController.create(req, res)) //funçao criar a sala
route.get('/room/:room', (req, res) => roomController.open(req, res))

route.post("/question/create/:room", (req, res) => QuestionController.create(req, res)) 

/* enviar dados para rota é post / .Estamos passando o QuestionControllerpara a nossa rota, implicitamente ele esta recebendo o (req, res) */
route.post('/question/:room/:question/:action',(req , res) => QuestionController.index(req, res)) // esse : estamos falando para o express que nao sabemos o conteudo que virá, como ser o : fosse uma declaraçao de variavel
// formato que o formulario de dentro da modal tem que passa a informaçao
// route.post('/room/:room/:question/:action')

module.exports = route /* importando a route dentro do server */ 