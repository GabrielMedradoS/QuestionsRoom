const express = require('express') /* importando o express */
const route = require('./route')
const path = require('path')

const server = express() /* estamos iniciando e guardando o express no server */

server.set('view engine', 'ejs') /* responsavel pela view engine vai ser o ejs */

server.use(express.static("public")) /* passando a pasta onde ficara guardado o conteudo */

server.set('views', path.join(__dirname, 'views'))/* caminho onde vou colocar a pasta views, (por padrao é colocada juntos com as pastas iniciais) */
/* __dirname é uma var global, no caso ele é o src */
/* .../NLW chega ate a pasta _dirname que é o src e junta com o views --- .../NLW/src/views */

// comando para pegar as info do formulario decodificar e enviar para o controller
server.use(express.urlencoded({extended: true})) // midway - intermedio entre o formulario e o controller

server.use(route) /* iniciando no node  */

server.listen(3000, () => console.log('Rodando')) /* node src/server.js */