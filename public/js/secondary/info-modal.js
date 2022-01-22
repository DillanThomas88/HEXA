var openmodal = document.querySelectorAll('.info-modal-open')
// --------------
let ya = document.querySelector('.info-modal')
let distance = 30
ya.style.opacity = 0
ya.style.top = `${distance}px`

// --------------
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector('.info-modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.info-modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
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
    toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.info-modal')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('info-modal-active')
  modal.classList.toggle('info-active')
  modal.classList.toggle('opacity-0')
  modalFade()
  modalMove()
}


function modalFade () {
  const modal = document.querySelector('.info-modal')
  let duration = 40
  let incriment = 0

  if(modal.classList.contains('info-active')){

    incriment = duration
    let timer = setInterval(() => {  
      incriment-- 
      if(incriment <= 0){clearInterval(timer); modal.style.opacity = 0; return}
      modal.style.opacity = `${incriment/duration}`
      // console.log(incriment/duration)
    }, 1);

  } else {

    let timer = setInterval(() => {
      incriment++
      if(incriment > duration){clearInterval(timer);modal.style.opacity = duration; return}
      modal.style.opacity = `${incriment/duration}`
      // console.log(incriment/duration)
    }, 1);
  }
}

function modalMove () {
  const modal = document.querySelector('.info-modal')
  if(modal.classList.contains('info-active')){
    let incriment = 0
    let timer = setInterval(() => {
      incriment++
      if(incriment >= distance){clearInterval(timer); modal.style.top = `${distance}px`; return}
      modal.style.top = `${incriment}px`
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
 