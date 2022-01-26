const resultsPageEL = document.querySelector('#result-screen')
const shareBTN = document.querySelector('#share-btn')
const yourScoreEL = document.querySelector('#your-score')
const timerEL = document.querySelector('#timer')



const getCurrentTime = () => {

    function correntValue(int) {
        let arr = String(int).split("")

        if (arr.length === 1) {
            return `0${int}`
        } else {
            return int
        }
    }

    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    return `${correntValue(23 - hour)} : ${correntValue(59 - minute)} : ${correntValue(59 - second)}`


}



const resultsSetUp = () => {
    let opacity = 0
    resultsPageEL.style.opacity = opacity
    resultsPageEL.classList.toggle('hidden')

    timerEL.innerHTML = getCurrentTime()
    setInterval(() => {
        timerEL.innerHTML = getCurrentTime()
    }, 1000);


    let timer = setInterval(() => {
        opacity++
        if(opacity >= 100){
            clearInterval(timer)
            resultsPageEL.style.opacity = 1
        }
        resultsPageEL.style.opacity = opacity * .01
    }, 1);
}


