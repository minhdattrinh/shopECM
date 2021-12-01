const clickBtn = document.querySelector('.js-click-login ')
const modal = document.querySelector('.js-auth-form')
const modalContainer = document.querySelector('.js-modal-container')
const modal_1_Container = document.querySelector('.js-modal-1-container')
const clickIconAvt = document.querySelector('.js-avt-sub')
const modal_1 = document.querySelector ('.js-modal_1')


// xử lý sự kiện click login
function showBuyTicket() {
    modal.classList.add('open')
}

function hideBuyTickets () {
    modal.classList.remove('open')
}

clickBtn.addEventListener('click', showBuyTicket)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

// xử lý sự kiện click avtsub

function showAvtContent() {
    modal_1.classList.add('modal-1-open')
}

function hideAvtContent () {
    modal_1.classList.remove('modal-1-open')
}

clickIconAvt.addEventListener('click', showAvtContent)

modal_1.addEventListener('click', hideAvtContent)

modal_1_Container.addEventListener('click', function(event){
    event.stopPropagation()
})

// xử lý sự kiện click trên safari
document.addEventListener("touchstart", function() {},false);

