const tutContainer = document.querySelector('#tutorial-container')
const titleEL = document.querySelector('#tut-title')
const formEL = document.querySelector('#tut-form')
const btnName = document.querySelector('#tut-btn-name')
const welcomeEL = document.querySelector('#tut-welcome')
const tutgreeting = document.querySelector('#tut-facts')

titleEL.style.opacity = 0
formEL.style.opacity = 0
welcomeEL.style.opacity = 0
// btnName.style.opacity = 0
// welcomeEL.style.opacity = 0

btnName.addEventListener('click', (e) => {
    e.preventDefault()
    let username = document.querySelector('#tut-content-name').value.trim()
    if(username != undefined){
        
        waitForThis(100, fade, 'out', formEL, 10)
        let arr = username.toLowerCase().split("")
        arr[0] = arr[0].toUpperCase()
        playerDataCopy.user.userName = arr.join("")
        if(arr.join("") === 'Admin'){
            tutgreeting.textContent = 'giving you unlimited rolls...'
        } else {
            tutgreeting.textContent = 'Cleansing your bad Ju Ju...'
        }
        playerDataCopy.user.finishedTutorial = true
        swapUpdateLocalStorage()
        formEL.classList.toggle('hidden')
        document.querySelector('#welcome-user').textContent = playerDataCopy.user.userName
        waitForThis(200, fade, 'in', welcomeEL, 300)
        loadingBar()
    }
})


const runTutorial = () => {
    waitForThis(200, fade, 'in', titleEL, 100)
    waitForThis(200, fade, 'in', formEL, 100)
}

const loadingBar = () => {
    let loader = document.querySelector('#loading-bar')

    let interval = 0
    let length = 1000
    let timer = setInterval(() => {
            interval++
            if(interval >= length){
                clearInterval(timer)
                waitForThis(0,fade, 'out', tutContainer, 300)
                let t = setInterval(() => {
                    clearInterval(t)
                    location.reload()
                }, 1500);
            }
            let percentage = Math.floor((interval/length) * 100)
            loader.style.width = `${percentage}%`
    }, 1);
}

const waitForThis = (miliseconds, func, param1,param2,param3) => {
    let timer = setInterval(() => {
        clearInterval(timer)
        // document.querySelector('#btn-roll').classList.toggle('animate-pulse')
        func(param1,param2,param3)
    }, miliseconds);
}

