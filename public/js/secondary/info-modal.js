var openmodal = document.querySelectorAll('.info-modal-open')
const modal = document.querySelector('.info-modal')
// --------------
let ya = document.querySelector('.info-modal')
let distance = 30
ya.style.opacity = 0
ya.style.top = `${distance}px`

// --------------
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal(modal)
  })
}
const infoToggle = () => {
  toggleModal(modal)
}

const overlay = document.querySelector('.info-modal-overlay')
// overlay.addEventListener('click', infoToggle)

var closemodal = document.querySelectorAll('.info-modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', infoToggle)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('info-modal-active')) {
    toggleModal(modal)
  }
};


const body = document.querySelector('body')

function toggleModal (element) {
  element.classList.toggle('pointer-events-none')
  body.classList.toggle('info-modal-active')
  element.classList.toggle('info-active')
  modalFade(element)
  modalMove(element)
}


function modalFade (element) {

  let duration = 40
  let incriment = 0

  if(element.classList.contains('info-active')){
    
    incriment = duration
    let timer = setInterval(() => {  
      incriment-- 
      if(incriment <= 0){clearInterval(timer); element.style.opacity = 0; return}
      element.style.opacity = `${incriment/duration}`
      // console.log(incriment/duration)
    }, 1);
    
  } else {
    
    let timer = setInterval(() => {
      incriment++
      if(incriment > duration){clearInterval(timer);element.style.opacity = duration; return}
      element.style.opacity = `${incriment/duration}`
      // console.log(incriment/duration)
    }, 1);
  }
}

function modalMove (element) {
  
  if(element.classList.contains('info-active')){
    let incriment = 0
    let timer = setInterval(() => {
      // console.log(incriment)
      incriment++
      if(incriment >= distance){clearInterval(timer); element.style.top = `${distance}px`; return}
      element.style.top = `${incriment}px`
    }, 1);
    
    
    
  } else {
    
    incriment = distance
    
    let timer = setInterval(() => {  
      incriment-- 
      if(incriment < 0){clearInterval(timer); modal.style.top = 0; return}
      modal.style.top = `${incriment}px`
      // console.log(incriment)
    }, 1);
  }
}
 