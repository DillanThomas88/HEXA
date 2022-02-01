const getColor = (color) => {
    return color.split("-").splice(1, 1).join("")
}
const getScoreArray = (obj) => {
    // console.log(obj)
    let { one, five, standardCombo, specialCombo } = obj

    let obj2 = {
        arr: [specialCombo, standardCombo, one, five],
        total: 0
    }

    for (let i = 0; i < obj2.arr.length; i++) {
        const element = obj2.arr[i];
        if (typeof element == 'object') {
            if (element.value) {
                obj2.arr[i] = element.value
            } else { obj2.arr[i] = 0 }
        }
    }
    for (let j = 0; j < obj2.arr.length; j++) {
        const element = obj2.arr[j];
        obj2.total += element
    }
    let cleanArr = obj2.arr.filter(int => int != 0)

    obj2.arr = cleanArr
    return obj2
}

const getDiceParentElements = () => {
    return [
        document.querySelector('#die-1'),
        document.querySelector('#die-2'),
        document.querySelector('#die-3'),
        document.querySelector('#die-4'),
        document.querySelector('#die-5'),
        document.querySelector('#die-6'),
    ]
}

const calculatenNextChance = (obj, length) => {
    let { one, two, three, four, five, six } = obj
    let arr = [one, two, three, four, five, six]
    let numOfDifferentDice = 2
    let percentage
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element >= 3 && i + 1 != 1 && i + 1 != 5) {
            numOfDifferentDice++
        }
        if ((element === 3)) {
            for (let j = 0; j < arr.length; j++) {
                const el2 = arr[j];
                if (el2 === 3 && j != i) {
                    return percentage = 912
                }
            }
        } else if (element === 4) {
            for (let k = 0; k < arr.length; k++) {
                const el3 = arr[k];
                if (el3 === 2 && k != i) {
                    return percentage = 912
                }
            }
        }
    }


    let decimal = (6 - numOfDifferentDice) / 6
    let ratio = Math.pow(decimal, length)

    // console.log(decimal, ratio)
    percentage = ((1 - ratio) * 100).toFixed(1) * 10
    // console.log(percentage)
    if (percentage === 0) { return percentage = 912 }
    return percentage
}

const checkForSpecialCombo = (arr, diceObj) => {
    // console.log(arr)
    // console.log(diceObj)
    if (!arr.special) {
        return
    } else {
        if (arr.special.name === 'supaquad' && !arr.special.fiveOrOne) {

            let die = document.querySelectorAll(`[data-die='${diceObj.common[0]}']`)
            for (let i = 0; i < die.length; i++) {
                const element = die[i];
                element.classList.toggle('fill-zinc-700')
                element.classList.add('fill-yellow-400')
            }
        } else if (arr.special.name === 'twotriples') {
            let die = document.querySelectorAll(`[data-die='${diceObj.orange.value}']`)
            for (let i = 0; i < die.length; i++) {
                const element = die[i];
                element.classList.toggle('fill-orange-400')
                element.classList.add('fill-yellow-100')
            }
        }
    }

}

const waitFor = (miliseconds, func, param) => {
    let timer = setInterval(() => {
        clearInterval(timer)
        // document.querySelector('#btn-roll').classList.toggle('animate-pulse')
        func(param)
    }, miliseconds);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const giveDiceAttributes = (obj) => {
    let { one, five, specialCombo, standardCombo } = obj
    if (specialCombo.name) {
        setDataTypeAttribute(specialCombo.diceNumber1)
        setDataTypeAttribute(specialCombo.diceNumber2)
        // console.log(standardCombo.diceNumber1)
        // console.log(standardCombo.diceNumber2)
        return
    }

    if (standardCombo.name) {
        setDataTypeAttribute(standardCombo.diceNumber)
        // console.log(standardCombo.diceNumber)
    }
    if (one !== 0) {
        setDataTypeAttribute(1)
        // console.log('one')
    }
    if (five !== 0) {
        setDataTypeAttribute(5)
        // console.log('five')
    }

    let parents = getDiceParentElements()
    for (let j = 0; j < parents.length; j++) {
        const element = parents[j];
        if (!element.hasAttribute('data-type')) {
            element.setAttribute('data-type', 'common')
        }
    }

    function setDataTypeAttribute(int) {
        let x = document.querySelectorAll(`[data-die='${int}']`)
        for (let i = 0; i < x.length; i++) {
            const y = x[i]

            y.parentElement.setAttribute('data-type', 'score')
        }
    }
}


const cleanUpScorChildren = () => {
    let deleteChildren = document.querySelectorAll('li')
    for (let i = 0; i < deleteChildren.length; i++) {
        const element = deleteChildren[i];
        if (element.classList.contains('delete')) {
            element.remove()
        }

    }
}

function updateColorTo(color) {
    document.querySelectorAll('.percentage-value').forEach(element => {
        element.style.color = color

    })
}

const gameOver = () => {
    let blurEL = document.querySelector('#blur-container')
    blurEL.classList.toggle('pointer-events-none')
    let amount = 0
    let timer = setInterval(() => {
        amount++
        if (amount > 10) {
            clearInterval(timer)
            resultsSetUp()
            return
        }
        blurEL.style.filter = `blur(${amount}px)`
    }, 50);

    let timer2 = setInterval(() => {
        pointUpdater(document.querySelector('#your-score'), 'upto', playerDataCopy.user.todayScore, 0, 1)
        clearInterval(timer2)
    }, 1000);

    playerDataCopy.user.hasFinished = true
    if(playerDataCopy.user.todayScore > playerDataCopy.user.highestDailyScore){playerDataCopy.user.highestDailyScore = playerDataCopy.user.todayScore}
    
    

    checkHighestScoreAchievement()
    swapUpdateLocalStorage()
    const shareData = {
        title: 'HEXA',
        text: `${playerDataCopy.user.userName}'s Hexa Stats\n\nScored: ${playerDataCopy.user.todayScore.toLocaleString()}p\nRounds: ${playerDataCopy.user.round[0].toLocaleString()} - ${playerDataCopy.user.round[1].toLocaleString()} - ${playerDataCopy.user.round[2].toLocaleString()}\nDate: ${playerDataCopy.user.date}\nPlay Count: ${playerDataCopy.user.playCount.toLocaleString()}`,
        url: 'https://dillanthomas88.github.io/hexa'
    }

    shareBtnListener(shareData)

}

function shareBtnListener(data) {
    document.querySelector('#share-btn').addEventListener('click', async () => {
        try {
            await navigator.share(data)
            document.querySelector('#share-btn').children[0].children[1].textContent = 'Sent!'
        } catch (err) {
            document.querySelector('#share-btn').children[0].children[1].textContent = 'error'
        }
    })
}

const returnCurrentDay = () => {
    let formal = new Date()
    let month = formal.getMonth() + 1
    let day = formal.getDate()
    let year = formal.getFullYear()
    return `${month}/${day}/${year}`
}

const updateUserInfoDaily = (obj) => {
    if (obj.user.date === returnCurrentDay()) {
        return
    } else {
        // let { date, availableTurns, hasFinished, todayScore, round, } = obj.user
        obj.user.date = returnCurrentDay()
        obj.user.availableTurns = turnCount
        obj.user.hasFinished = false
        obj.user.todayScore = 0
        obj.user.round = []
    }
}



const pointUpdater = (element, direction, goal, interval, speed) => {
    if(direction === 'upto'){

        element.classList.toggle('text-yellow-100')
        let timer = setInterval(() => {
            let difference = goal - interval
            if(difference > 100){interval += 10}
            else { interval++ }
            if (interval >= goal) {
                clearInterval(timer)
                element.innerHTML = goal.toLocaleString()
                if (element.classList.contains('scale-110')) {
                    element.classList.toggle('scale-110')
                    // console.log( goal, score)
                    // --------------------------------------------------- goal score
                }
                if (element.classList.contains('text-yellow-100')) {
                    element.classList.toggle('text-yellow-100')
                }
                return
            }
    
            if (interval % 5) {
                element.classList.toggle('scale-110')
                element.classList.add('opacity-80')
            }
            element.innerHTML = interval.toLocaleString()
        }, speed);


    } else if( direction === 'downto'){
        element.classList.toggle('text-red-100')
        let timer = setInterval(() => {
            if(interval > 100){interval -= 10}
            else { interval-- }
    
            if (interval <= 0) {
                interval = 0
                clearInterval(timer)
                element.innerHTML = interval.toLocaleString()
                if (element.classList.contains('scale-110')) {
                    element.classList.toggle('scale-110')
                    // console.log( goal, score)
                    // --------------------------------------------------- goal score
                }
                if (element.classList.contains('text-red-100')) {
                    element.classList.toggle('text-red-100')
                }
                return
            }
    
            if (interval % 5) {
                element.classList.toggle('scale-110')
                element.classList.add('opacity-80')
            }
            element.innerHTML = interval.toLocaleString()
        }, speed);
    } else {console.log('points error');}
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

const fade = (instruction, element, speed) => {

    let incriment
    let goal
    
    if(instruction === 'in'){
        incriment = 0
        goal = speed
    } else if (instruction === 'out'){
        incriment = speed
        goal = 0
    } else {
        console.log('fade error');
        return
    }

    let timer = setInterval(() => {
        if(instruction === 'in'){
            incriment++
        } else {
            incriment--
        }
        if(incriment < 0 || incriment > speed){
            element.style.opacity = goal / speed
            clearInterval(timer)
            return
        }

        element.style.opacity = incriment / speed
    }, 1);
}

const checkHighestScoreAchievement = () => {
    highscore = playerDataCopy.user.highestDailyScore
    for (let i = 0; i < playerDataCopy.game.length; i++) {
        const element = playerDataCopy.game[i];
        
        if(highscore >= element.amount){
            element.status = 'unlocked'
        }
    }
}
