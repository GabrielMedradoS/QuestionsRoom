export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open(){
        /* funçao para atribuir a classe active na modal */
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        /* funçao para remover a classe active da modal */
        document.querySelector('.modal-wrapper').classList.remove("active")
    }

    return {
        open,
        close
    }
}