var openmodal = document.querySelectorAll('.modal-open')
// --------------
let tem = document.querySelector('.modal')
tem.style.opacity = 0
// --------------
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
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
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
  modal.classList.toggle('active')
  modalAnimate()
// modal.classList.toggle('opacity-0')
}


function modalAnimate () {
  const modal = document.querySelector('.modal')
  let duration = 15
  let incriment = 0
  if(modal.classList.contains('active')){
    incriment = duration
    let timer = setInterval(() => {  
      incriment-- 
      if(incriment < 0){clearInterval(timer); return}
      modal.style.opacity = `${incriment/duration}`
      console.log(incriment/duration)
    }, 1);


  } else {

    let timer = setInterval(() => {
      incriment++
      if(incriment > duration){clearInterval(timer); return}
      modal.style.opacity = `${incriment/duration}`
      console.log(incriment/duration)
    }, 1);
  }
}

 