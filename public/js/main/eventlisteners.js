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

    refreshbtn.removeEventListener('click', wipeadnRoll)
    if (refreshbtn.classList.contains('animate-pulse')) {

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
    saveEL.classList.toggle('text-yellow-200')
    let interval = currentlySaved
    let timer = setInterval(() => {

        interval++
        if (interval < 0) {
            interval = 0
            saveEL.innerHTML = interval.toLocaleString()
        }

        if (interval >= savedScore) {
            clearInterval(timer)
            saveEL.innerHTML = savedScore.toLocaleString()
            if (saveEL.classList.contains('scale-110')) {
                saveEL.classList.toggle('scale-110')
                // console.log( goal, score)
                // --------------------------------------------------- goal score
            }
            saveEL.classList.toggle('text-yellow-200')
            currentlySaved = savedScore
            return
        }

        if (interval % 2) {
            saveEL.classList.toggle('scale-110')
            saveEL.classList.add('opacity-80')
        }
        saveEL.innerHTML = interval.toLocaleString()
    }, 1);

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