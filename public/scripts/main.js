import  Modal  from './modal.js' /* comando para importar da modal, pode-se ver com chaves no typescript { Modal } */

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/* ***OUTRA FORMA DE CONCLUIR*** */

//Pegar todos os botões que existe com a classe check
/* const checkButtons = document.querySelectorAll(".actions a.check") // deixar especifico para o javascript tag <a> classe check 
checkButtons.forEach(button => {
    // para cada botao clicado o evento ira 'escutar' o click 
    button.addEventListener("click", event => {
        // codigo para o titulo da modal 
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar esta pergunta como lida?"
        modalButton.innerHTML = "Sim, marcar como lido"
        modalButton.classList.add("red")

        // Abre a funçao quando o marcar como lido for clicado
        // Abrir Modal 
        modal.open()
    })
})

const deleteButtons = document.querySelectorAll(".actions a.delete") // deixar especifico para o javascript tag <a> classe delete 
deleteButtons.forEach(button => {
    // para cada botao clicado o evento ira 'escutar' o click 
    button.addEventListener("click", event => {
        // codigo para o titulo da modal 
        modalTitle.innerHTML = "Excluir pergunta"
        modalDescription.innerHTML = "Tem certeza que deseja excluir esta pergunta?"
        modalButton.innerHTML = "Sim, excluir"
        modalButton.classList.remove("red")

        // Abre a funçao quando o marcar como lido for clicado
        // Abrir Modal 
        modal.open()
    })
}) */


const checkButtons = document.querySelectorAll(".actions a.check") // deixar especifico para o javascript tag <a> classe check 
checkButtons.forEach(button => {
    // para cada botao clicado o evento ira 'escutar' o click 
    button.addEventListener("click", handleClick)
})

const deleteButtons = document.querySelectorAll(".actions a.delete") // deixar especifico para o javascript tag <a> classe delete 
deleteButtons.forEach(button => {
    // para cada botao clicado o evento ira 'escutar' o click 
    button.addEventListener("click", (event) => handleClick(event, false)) 
})

    function handleClick(event, check = true) {
        event.preventDefault() // Para mostrar que a tag<a> nao se comporta como um link e prevenir o # na url
       
        // enviar os dados pelas rotas da modal
        const slug = check ? "check" : "delete" 
        const roomId = document.querySelector('#room-id').dataset.id
        const questionId = event.target.dataset.id

        //Montar a URL para mostrar aonde o formulario vai 
        const form = document.querySelector('.modal form')
        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`) // setAttribute define atributos; // route.post('/room/:room/:question/:action')

        // Mundança do texto na modal
        const text = check ? "Marcar como lida" : "Excluir"
        
        modalTitle.innerHTML= `${text} esta pergunta`
        modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
        modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
        
        check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

        //abrir modal
        modal.open()
}