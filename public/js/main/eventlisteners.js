const bonusEL = document.querySelector('#bonus-text')
const activateReRollBtn = (arr) => {
    // console.log(arr)
    isRefreshActivated = true
    refreshbtn.addEventListener('click', wipeadnRoll = (e) => {
        toggleRefreshBtnContent(arr)
    })
    refreshbtn.children[0].classList.toggle('fill-zinc-300')
    if(document.querySelectorAll('.locked').length === 6){
        refreshbtn.children[0].classList.toggle('fill-yellow-200')
        bonusEL.classList.toggle('hidden')
        fade('in', bonusEL, 100)
    } else {
        refreshbtn.children[0].classList.toggle('fill-zinc-200')
    }

    refreshbtn.classList.toggle('opacity-10')
    refreshbtn.classList.toggle('animate-pulse')


}

function toggleRefreshBtnContent(arr) {
    isRefreshActivated = false

    if (refreshbtn.classList.contains('animate-pulse')) {
        refreshbtn.removeEventListener('click', wipeadnRoll)
        if(refreshbtn.children[0].classList.contains('fill-yellow-200')){
            refreshbtn.children[0].classList.toggle('fill-yellow-200')
            bonusEL.classList.toggle('hidden')
        } else {
            refreshbtn.children[0].classList.toggle('fill-zinc-200')
        }
        refreshbtn.children[0].classList.toggle('fill-zinc-300')
        refreshbtn.classList.toggle('animate-pulse')
        refreshbtn.classList.toggle('opacity-10')
    }
    // console.log(target)
    // console.log(arr)
    rerollThis(arr)


}

let currentlySaved = 0;
const saveBTN = () => {
    btnSave.removeEventListener('click', saveBTN)

    let savedScore = score + roundTotal + currentlySaved


    playerDataCopy.user.todayScore = savedScore
    let interval = currentlySaved
    pointAdder(saveEL, savedScore , interval, 1)
    currentlySaved = savedScore

    rotateSaveIcon()
    playerDataCopy.successfullRolls += 1
    playerDataCopy.totalSaved += (score + roundTotal)
    playerDataCopy.user.availableTurns -= 1 
    playerDataCopy.user.round.push(score + roundTotal)
    swapUpdateLocalStorage()
    toggleRefreshBtnContent()
    btnSave.classList.toggle('opacity-10')
    btnSave.classList.toggle('animate-pulse')
    updatePercentageEL(912)
    accumulatorUpdate(0, scoreEL)

    score = 0
    roundTotal = 0

    let roundEL = document.querySelector('#round-interval')
    roundNumber--
    roundEL.textContent = roundNumber
    if(roundNumber === 0){
        playerDataCopy.user.playCount += 1
        gameOver()
        
        roundEL.textContent = roundNumber
        pingElement(roundEL)
        return
    }
    pingElement(roundEL)

}




