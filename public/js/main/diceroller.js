

let refreshbtn = document.querySelector('#btn-roll')
const scoreEL = document.querySelector('#score-element')
const saveEL = document.querySelector('#save-element')
const btnSave = document.querySelector('#btn-save')
const containerEL = document.querySelector('#add-container')

scoreEL.innerHTML = 0
let diceParents = []
let unlockedDice = []
let score = 0
let roundTotal = 0
let isSaveActivated = false
let isRefreshActivated = false
let roundNumber = 3
let failcheck = 0



const startNewRoll = (arr) => {
    cleanUpScorChildren()
    let newarr = []
    if (arr) {
        diceParents = arr
        newarr = arr
        for (let i = 0; i < diceParents.length; i++) {
            const element = diceParents[i];
            element.innerHTML = questionmarkEL
        }
    } else {
        diceParents = getDiceParentElements()
        for (let i = 0; i < diceParents.length; i++) {
            const element = diceParents[i];
            element.innerHTML = questionmarkEL
        }
        // console.log('first turn')
        newarr = diceParents
    }

    init(0, newarr)
}


const init = (firstIndex, xxarr) => {

    let timer = setInterval(() => {
        // console.log(diceELs[firstIndex].children[0])
        let opacityLVL = ((xxarr[firstIndex].children[0].style.opacity * 50) + 1) / 50
        if (opacityLVL >= .7) {
            if (xxarr[firstIndex].getAttribute('rolling') == 'false') { clearInterval(timer) }
            xxarr[firstIndex].children[0].style.opacity = .7;
            xxarr[firstIndex].children[0].classList.toggle('border-zinc-100')
            xxarr[firstIndex].children[1].classList.toggle('fill-zinc-100')
            xxarr[firstIndex].children[1].classList.toggle('opacity-5')
            xxarr[firstIndex].children[1].classList.add('fill-zinc-200', 'opacity-100')
            diceRotatingAnimation(firstIndex); clearInterval(timer)
        }
        xxarr[firstIndex].children[0].style.opacity = opacityLVL
    }, 10);
    let wait = setInterval(() => {
        let nextIndex = firstIndex + 1
        if (nextIndex > xxarr.length - 1) { return }
        init(nextIndex, xxarr)
        clearInterval(wait)

    }, 100);
}



const diceReady = () => {
    diceParents.forEach(element => {
        element.addEventListener('click', freezeDieEL = (e) => {

            if (e.target.classList.contains('dice')) {
                e.target.classList.toggle('animate-ping')
                let number = Math.floor(Math.random() * getDiceParentElements().length + 1)  //--------------------------------------------------------------change
                e.target.innerHTML = diceArr[number - 1];
                e.target.setAttribute('rolling', 'false');
                e.target.classList.add('dice-activated')
                e.target.children[0].classList.toggle('fill-zinc-100')
                if (number === 1 || number === 5) { e.target.children[0].classList.add('fill-zinc-300') }
                else { e.target.children[0].classList.add('fill-zinc-700') }


                // console.log(dupedDice)
                let old_element = e.target
                let new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);
                let timer = setInterval(() => {
                    new_element.classList.toggle('animate-ping')
                    clearInterval(timer)
                }, 50);

            }




            playerPackage = createPlayerStatsObject()
            let colordata = beginPlayerScoreCalculation(playerPackage)
            // console.log(colordata);

            colorDice(colordata)


            ifAllDiceRolledReadyNextRoll(playerPackage)

        })
    });
    let timer = setInterval(() => {
        diceParents.forEach(element => {
            element.children[0].classList.add('border-zinc-200')
        });
        clearInterval(timer)
    }, 10);
}

function setDataColorAttribute(number, color) {
    let newArr = document.querySelectorAll('.dice')
    // console.log(newArr)

    newArr.forEach(element => {
        if (parseInt(element.children[0].getAttribute('data-die')) == number) {
            let targetEL = element
            targetEL.innerHTML = diceArr[number - 1]
            targetEL.children[0].classList.toggle('fill-zinc-100') // <------------------------ important 
            targetEL.children[0].classList.add(color);
            targetEL.children[0].setAttribute('data-color', color.split("-").splice(1, 1).join(""))
            // console.log(targetEL)
            // console.log(color.split("-").splice(1,1).join(""))s

        }
    });
}

const createPlayerStatsObject = () => {
    let playerPackage = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }

    const diceArray = document.querySelectorAll('.dice')
    diceArray.forEach(element => {
        let die = element.children[0]
        let numberInt
        if (die.getAttribute('data-die')) {
            numberInt = parseInt(die.getAttribute('data-die'))
        }
        switch (numberInt) {
            case 1:
                playerPackage.one++
                break;
            case 2:
                playerPackage.two++
                break;
            case 3:
                playerPackage.three++
                break;
            case 4:
                playerPackage.four++
                break;
            case 5:
                playerPackage.five++
                break;
            case 6:
                playerPackage.six++
                break;

            default:
                break;
        }

    });
    // console.log(playerPackage)
    return playerPackage
}

const beginPlayerScoreCalculation = (diceObject) => {


    const properties = Object.values(diceObject)
    let scoreObj = {
        specialCombo: {},
        standardCombo: {},
        one: properties[0] * 10,
        five: properties[4] * 5,
    }


    if (properties === [1, 1, 1, 1, 1, 1]) {
        scoreObj.specialCombo.name = 'straight'
        scoreObj.specialCombo.value = 150
        scoreObj.one = 0
        scoreObj.five = 0


        return scoreObj
    }

    for (let i = 0; i < properties.length; i++) {
        const element = properties[i];
        if (element === 6) {
            standardComboFunc('hexa', 300, i)
            scoreObj.one = 0
            scoreObj.five = 0
            // console.log(scoreObj);
            softUpdate(
                playerData.standard.hexa,
                playerDataCopy.standard.hexa,
                scoreObj.standardCombo.diceNumber
            )

            return scoreObj
        } else if (element === 5) {

            standardComboFunc('penta', 200, i)
            softUpdate(
                playerData.standard.penta,
                playerDataCopy.standard.penta,
                scoreObj.standardCombo.diceNumber
            )
            // console.log(scoreObj);
        } else if (element === 4) {
            for (let j = 0; j < properties.length; j++) {
                const element2 = properties[j];
                if (element2 === 2) {
                    let add = 0
                    if (j + 1 === 1) { add = 20 } else if (j + 1 === 5) { add = 10 }
                    scoreObj.specialCombo.name = 'supaquad'
                    scoreObj.specialCombo.diceNumber1 = i + 1
                    scoreObj.specialCombo.diceNumber2 = j + 1
                    scoreObj.specialCombo.value = 125 + add
                    scoreObj.one = 0
                    scoreObj.five = 0
                    // console.log(scoreObj);
                    softUpdate(
                        playerData.standard.quad,
                        playerDataCopy.standard.quad,
                        scoreObj.specialCombo.diceNumber1
                    )
                    return scoreObj
                }
            }
            standardComboFunc('quad', 100, i)
            softUpdate(playerData.standard.quad, playerDataCopy.standard.quad, scoreObj.standardCombo.diceNumber)
            // console.log(scoreObj);        
        } else if (element === 3) {
            for (let j = 0; j < properties.length; j++) {
                const element2 = properties[j];
                if (j != i) {
                    if (element2 === 3) {
                        scoreObj.specialCombo.name = 'triplepair'
                        scoreObj.specialCombo.diceNumber1 = i + 1
                        scoreObj.specialCombo.diceNumber2 = j + 1
                        scoreObj.specialCombo.value = 250
                        scoreObj.one = 0
                        scoreObj.five = 0
                        // console.log(scoreObj);
                        softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.specialCombo.diceNumber1)
                        softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.specialCombo.diceNumber2)
                        return scoreObj
                    }
                }
            }
            if (i + 1 === 1) {
                standardComboFunc('triple', 20, i)
                softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.standardCombo.diceNumber)
            } else {
                standardComboFunc('triple', 0, i)

                softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.standardCombo.diceNumber)

            }

        } else {
            // console.log('error?')
        }

    }
    // console.log(scoreObj)

    return scoreObj


    function softUpdate(original, copy, compair,) {
        // console.log(compair)
        for (let i = 0; i < copy.length; i++) {
            const element = copy[i]

            if (element.index === compair - 1) {
                element.status = 'unlocked'
                if (element.total === original[i].total) {
                    // console.log(element.total)
                    element.total += 1
                    // console.log(element.total)
                }
            }
        }
    }

    function standardComboFunc(n, num, i) {
        if (i + 1 == 1) { scoreObj.one = 0 }
        if (i + 1 == 5) { scoreObj.five = 0 }
        scoreObj.standardCombo.name = n
        scoreObj.standardCombo.diceNumber = i + 1
        scoreObj.standardCombo.value = num + ((i + 1) * 10)

    }
    // console.log(totalObject)

}

const animateScoreAccumulator = (scoreObj) => {
    // let incriment = oldScore
    // let difference = scoreObj - oldScore
    // if (oldScore === scoreObj) { return }
    const addEL = document.querySelector('#add-element')

    let totalAndArray = getScoreArray(scoreObj)
    console.log('total:',totalAndArray.total);
    // checkForSpecialCombo(scoreObj, diceObj)

    // console.log(diceObj)
    // console.log(scoreArr)

    
    if (totalAndArray.total > failcheck) {
        // if you win -------------------------------------------------------------
        failcheck = totalAndArray.total
        let interval = score + roundTotal
        let goal = totalAndArray.total + score
        pointUpdater(scoreEL, 'upto', goal, interval, 1)
        roundTotal = goal
        // accumulatorUpdate(totalAndArray.total, scoreEL)
        appendScoreChildren(totalAndArray.arr, 0)
        return false
    } else {
        // if you lose --------------------------------------------------------------
        failcheck = 0
        playerDataCopy.totalLost += score + roundTotal
        
        pointUpdater(scoreEL, 'downto', 0, score, 1)
        // accumulatorUpdate(0, scoreEL)
        return true
    }
    console.log(scoreArr)
    
    
}

const appendScoreChildren = (arr, index) => {
    let appendtimer = 375
    let fadeDuration = 500



    cleanArray = arr.filter(data => typeof data === 'number').filter(data => data != 0)
    if (index >= cleanArray.length) { return }
    if (!cleanArray) {
        return console.log('error')
    } else {
        // console.log(cleanArray)

        let liEL = document.createElement('li')
        let apanEL0 = document.createElement('span')
        let apanEL1 = document.createElement('span')
        let divEL = document.createElement('div')
        liEL.classList.add('absolute', 'inset-0', '-ml-4', 'text-zinc-600')

        apanEL0.classList.add('opacity-80', '-ml-2')
        apanEL0.innerHTML = '+'

        apanEL1.setAttribute('id', `li-${i}`)
        apanEL1.innerHTML = cleanArray[index]
        divEL.append(apanEL0, apanEL1)
        liEL.append(divEL)
        containerEL.append(liEL)
        let incriment = 0
        let opacity = fadeDuration
        let fadeOut = setInterval(() => {
            incriment++
            opacity--
            if (opacity <= 0) {
                clearInterval(fadeOut)
                liEL.classList.add('delete')
                liEL.style.opacity = 0
            }
            liEL.style.top = `${incriment / 5}px`
            liEL.style.opacity = `${opacity / fadeDuration}`

        }, 1);

        let appendDuration = setInterval(() => {
            clearInterval(appendDuration)
            appendScoreChildren(cleanArray, index + 1)
        }, appendtimer);
    }
}

const ifAllDiceRolledReadyNextRoll = (obj) => {
    let x = Array.from(document.querySelectorAll('.dice-activated'))
    // console.log(x.length)
    if (x.length === 6) {
        // console.log(obj)
        scoreObj = beginPlayerScoreCalculation(obj)
        // console.log(scoreObj)

        giveDiceAttributes(scoreObj)

        let hasFailed = animateScoreAccumulator(scoreObj, obj)
        // const propertyNames = Object.keys(x)
        // console.log(scoreObj)
        let newX = x.filter(die => die.getAttribute('data-type') != 'common')
        // console.log(newX);
        newX.forEach(element => {
            element.classList.add('locked')
            // console.log(element)

        });
        // console.log(obj)
        if (hasFailed) {

            roundNumber--
            playerDataCopy.user.availableTurns -= 1 
            playerDataCopy.user.round.push(0)
            if(roundNumber === 0){
                let roundEL = document.querySelector('#round-interval')
                playerDataCopy.user.playCount += 1
                gameOver()
                document.querySelector('body').style.backdropFilter = 'blur(5px)'
                roundEL.textContent = roundNumber
                pingElement(roundEL)
                // console.log('gameover')
                return
            }
            const counterEL = document.querySelector('#counter-element')
            const nextRoundContainer = document.querySelector('#next-round')
            nextRoundContainer.classList.toggle('hidden')
            let countdown = 3
            counterEL.textContent = countdown
            counterEL.classList.toggle('animate-ping')
            let timer1 = setInterval(() => {
                if(!counterEL.classList.contains('animate-ping')){
                    counterEL.classList.toggle('animate-ping')
                }
                countdown--
                if(countdown === 0){
                    nextRoundContainer.classList.toggle('hidden')
                    clearInterval(timer1)
                    counterEL.classList.toggle('animate-ping')
                }
                
                counterEL.textContent = countdown
                
            }, 1000);

            let timer = setInterval(() => {
                
                btnSave.removeEventListener('click', saveBTN)
                swapUpdateLocalStorage()
                toggleRefreshBtnContent()
                score = 0
                roundTotal = 0
                // btnSave.classList.toggle('opacity-10')
                // btnSave.classList.toggle('animate-pulse')
                updatePercentageEL(912)
                // accumulatorUpdate(0, scoreEL)
                clearInterval(timer)

                let roundEL = document.querySelector('#round-interval')

                roundEL.textContent = roundNumber
                pingElement(roundEL)

            }, 3000);
        } else {
            nextRoundStart(obj)
        }

    }
}

function accumulatorUpdate(goal, domEL) {
    let starterNumber = score + roundTotal
    let difference = goal - starterNumber
    let willcontinue = true
    if (goal === 0) {
        score = 0
        willcontinue = false
        
    }
    let timer = setInterval(() => {
        // console.log(goal)
        if (!willcontinue) { 
            if(!domEL.classList.contains('text-red-200')){
                domEL.classList.toggle('text-red-200') 
            }
            starterNumber -= 2; 
        }
        else { 
            if(difference > 100){starterNumber += 10}
            else { starterNumber++ }
            // starterNumber++
        }

        if (starterNumber < 0) {
            if(!willcontinue){
                if(domEL.classList.contains('text-red-200')){
                    domEL.classList.toggle('text-red-200')
                }
            }
            starterNumber = 0
            domEL.innerHTML = starterNumber.toLocaleString()
        }

        if (starterNumber === goal + score) {
            if(!willcontinue){
                if(domEL.classList.contains('text-red-200')){
                    domEL.classList.toggle('text-red-200')}
                }
            clearInterval(timer)
            domEL.innerHTML = (goal + score).toLocaleString()
            if (domEL.classList.contains('scale-110')) {
                domEL.classList.toggle('scale-110')
                // console.log( goal, score)
                // --------------------------------------------------- goal score
            }
            return
        }

        if (starterNumber % 2) {
            domEL.classList.toggle('scale-110')
        }
        domEL.classList.add('opacity-80')
        domEL.innerHTML = starterNumber.toLocaleString()
    }, 5)
    roundTotal = goal
    // console.log( starterNumber , goal  , roundTotal, score)
}

function nextRoundStart(obj) {
    let y = getDiceParentElements()
    let xArr = y.filter(die => !die.classList.contains('locked'))

    let percentage = calculatenNextChance(playerPackage, xArr.length)
    waitFor(500, updatePercentageEL, percentage)
    waitFor(100, activateReRollBtn, xArr)
}

function rerollThis(arr) {
    if (!arr || arr.length === 0) {
        // succesfull round
        arr = getDiceParentElements()
        for (let k = 0; k < arr.length; k++) {
            const element = arr[k];
            element.toggleAttribute('data-type')
        }
        updatePercentageEL(912)
        // ------------------------------------ win

        score += roundTotal
        roundTotal = 0
        failcheck = 0
    }
    playerDataCopy.totalRolls++
    swapUpdateLocalStorage()
    // console.log(arr)
    // --------------------------------------- else
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        element.removeEventListener('click', freezeDieEL)
        // debugger
        removeAllChildNodes(element)
        element.classList.toggle('dice-activated')
        if (element.classList.contains('locked')) {
            element.classList.toggle('locked')
        }
        element.toggleAttribute('rolling')
    }
    // console.log(arr)
    startNewRoll(arr)
}





// debugger
startNewRoll()