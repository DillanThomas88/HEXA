const activateReRollBtn = (arr) => {
    // console.log(arr)
    isRefreshActivated = true
    refreshbtn.addEventListener('click', wipeadnRoll = (e) => {
        toggleRefreshBtnContent(arr)
    })
    refreshbtn.classList.toggle('opacity-10')
    refreshbtn.classList.toggle('animate-pulse')
    refreshbtn.children[0].classList.toggle('fill-zinc-300')
    refreshbtn.children[0].classList.add('fill-zinc-200')

}

function toggleRefreshBtnContent(arr) {
    isRefreshActivated = false

    if (refreshbtn.classList.contains('animate-pulse')) {
        refreshbtn.removeEventListener('click', wipeadnRoll)

        refreshbtn.children[0].classList.add('fill-zinc-300')
        refreshbtn.children[0].classList.toggle('fill-zinc-200')
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

        gameOver()
        
        roundEL.textContent = roundNumber
        pingElement(roundEL)
        return
    }
    pingElement(roundEL)

}


let checkForScore = setInterval(() => {

    if (roundTotal > 0 || score > 0) {
        // console.log(roundTotal)
        if (!isSaveActivated) {
            isSaveActivated = true
            btnSave.addEventListener('click', saveBTN)
            btnSave.classList.toggle('opacity-10')
            btnSave.classList.toggle('animate-pulse')
        }
    } else {
        btnSave.removeEventListener('click', saveBTN)
        if (!btnSave.classList.contains('opacity-10')) {

            btnSave.classList.toggle('opacity-10')
            btnSave.classList.toggle('animate-pulse')
        }
        isSaveActivated = false

    }
}, 100);