let refreshbtn = document.querySelector('#btn-roll')
const scoreEL = document.querySelector('#score-element')
scoreEL.innerHTML = 0
let diceParents = []
let unlockedDice = []
let score = 0
let roundTotal = 0
const startNewRoll = (arr) => {
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

const diceRotatingAnimation = (index) => {
    // console.log('rotating', index)
    if (index >= diceParents.length - 1) { diceReady() }
    let deg = 0
    let timer = setInterval(() => {
        deg += 10
        if (diceParents[index].getAttribute('rolling') == 'false') {
            clearInterval(timer)
            return
            // console.log(diceELs[index].children[0].style.transform)
            // diceELs[index].children[0].style.transform = `rotate(0deg)`
        }
        if (deg >= 360) { deg = 1 }
        diceParents[index].children[0].style.transform = `rotate(${deg}deg)`

    }, 1);
}

const diceReady = () => {
    diceParents.forEach(element => {

        element.addEventListener('click', freezeDieEL = (e) => {

            if (e.target.classList.contains('dice')) {
                let number = Math.floor(Math.random() * 2 + 1)  //--------------------------------------------------------------change
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
        one: properties[0]*10,
        five: properties[4]*5,
    }

    
    if(properties === [1,1,1,1,1,1]){
        scoreObj.specialCombo.name = 'straight' 
        scoreObj.specialCombo.value = 150 
        scoreObj.one = 0
        scoreObj.five = 0


        return scoreObj
    }
    
    for (let i = 0; i < properties.length; i++) {
        const element = properties[i];
        if(element === 6){
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
        } else if ( element === 5){

            standardComboFunc('penta', 200, i)
            softUpdate(
                playerData.standard.penta, 
                playerDataCopy.standard.penta, 
                scoreObj.standardCombo.diceNumber
                )
            // console.log(scoreObj);
        } else if(element === 4){
            for (let j = 0; j < properties.length; j++) {
                const element2 = properties[j];
                if(element2 === 2){
                    let add = 0
                    if(j + 1 === 1){ add = 20} else if ( j + 1 === 5){add = 10}
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
        } else if (element === 3){
            for (let j = 0; j < properties.length; j++) {
                const element2 = properties[j];
                if(j != i){
                    if(element2 === 3){
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
            if(i + 1 === 1){
                standardComboFunc('triple',20, i)
                softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.standardCombo.diceNumber)
            } else{ 
                standardComboFunc('triple',0, i)

                softUpdate(playerData.standard.triple, playerDataCopy.standard.triple, scoreObj.standardCombo.diceNumber)
                
            }

        } else {
            // console.log('error?')
        }

    }
    // console.log(scoreObj)
    
    return scoreObj


    function softUpdate(original, copy, compair, ) {
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
        if(i + 1 == 1){scoreObj.one = 0}
        if(i + 1 == 5){scoreObj.five = 0}
        scoreObj.standardCombo.name = n
        scoreObj.standardCombo.diceNumber = i + 1
        scoreObj.standardCombo.value = num + ((i + 1) * 10)
        
    }
    // animateScoreAccumulator(totalObject, diceObject)
    // console.log(totalObject)

}

const animateScoreAccumulator = (scoreObj, diceObj) => {
    // let incriment = oldScore
    // let difference = scoreObj - oldScore
    // if (oldScore === scoreObj) { return }
    const addEL = document.querySelector('#add-element')

    let totalAndArray = getScoreArray(scoreObj)

    // checkForSpecialCombo(scoreObj, diceObj)

    // console.log(diceObj)
    // console.log(scoreArr)


    if (totalAndArray.total > roundTotal) {
        // if you win -------------------------------------------------------------
        accumulatorUpdate(totalAndArray.total )
        appendScoreChildren(totalAndArray.arr, 0)
    } else {
        // if you lose --------------------------------------------------------------
        accumulatorUpdate(0)


    }
    // console.log(scoreArr)


}

const appendScoreChildren = (arr, index) => {
    let appendtimer = 375
    let fadeDuration = 500
    const containerEL = document.querySelector('#add-container')


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

         animateScoreAccumulator(scoreObj, obj)
        // const propertyNames = Object.keys(x)
        // console.log(scoreObj)
        let newX = x.filter(die => die.getAttribute('data-type') != 'common')
        // console.log(newX);
        newX.forEach(element => {
            element.classList.add('locked')
            // console.log(element)

        });
        // console.log(obj)
        nextRoundStart(obj)

    }
}

function accumulatorUpdate(goal) {
    let starterNumber = score + roundTotal
    let willcontinue = true
    if (goal === 0) {
        score = 0
        willcontinue = false
    }
    let timer = setInterval(() => {

        if (!willcontinue) { starterNumber -= 5 }
        else { starterNumber++ }

        if(starterNumber < 0){ 
            starterNumber = 0
            scoreEL.innerHTML = starterNumber
        }

        if (starterNumber === goal + score) {
            clearInterval(timer)
            scoreEL.innerHTML = goal + score
            if (scoreEL.classList.contains('scale-110')) {
                scoreEL.classList.toggle('scale-110')
                // console.log( goal, score)
                // --------------------------------------------------- goal score
            }
            return
        }

        if (starterNumber % 2) {
            scoreEL.classList.toggle('scale-110')
            scoreEL.classList.add('opacity-80')
        }
        scoreEL.innerHTML = starterNumber
    }, 5)
    roundTotal = goal
    // console.log( starterNumber , goal  , roundTotal, score)
}

function nextRoundStart(obj) {
    let y = getDiceParentElements()
    let xArr = y.filter(die => !die.classList.contains('locked'))

    let percentage = calculatenNextChance(playerPackage, xArr.length)
    waitFor(500, updatePercentageEL, percentage)
    waitFor(500, activateReRollBtn, xArr)
}

function rerollThis(arr) {
    if (arr.length === 0) {
        // succesfull round
        arr = getDiceParentElements()
        for (let k = 0; k < arr.length; k++) {
            const element = arr[k];
            element.toggleAttribute('data-type')
        }
        // ------------------------------------ win
        score += roundTotal
        roundTotal = 0
        swapUpdateLocalStorage()


    }
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

function updatePercentageEL(percentage) {
    let eL = document.querySelector('#percentage-element')
    const currentPercentage = parseInt(eL.innerHTML.split("").filter(data => data != '.').join(""))
    let interval = currentPercentage
    let timer = setInterval(() => {
        // console.log(percentage)
        // console.log(currentPercentage,percentage)
        if (currentPercentage == percentage) { clearInterval(timer); return }
        else if (currentPercentage < percentage) { interval += 2 }
        else { interval-- }
        if (interval === percentage) {
            clearInterval(timer)
            eL.innerHTML = percentage / 10
        }
        switch (true) {
            case (interval >= 900):
                updateColorTo('#3b82f6')
                break;
            case (interval >= 800 && interval < 900):
                updateColorTo('#06b6d4')
                break;
            case (interval >= 700 && interval < 800):
                updateColorTo('#10b981')
                break;
            case (interval >= 600 && interval < 700):
                updateColorTo('#84cc16')
                break;
            case (interval >= 500 && interval < 600):
                updateColorTo('#f59e0b')
                break;
            case (interval >= 400 && interval < 500):
                updateColorTo('#f97316')
                break;
            case (interval >= 300 && interval < 400):
                updateColorTo('#ef4444')
                break;


            default:
                break;
        }
        if (interval > 912) { clearInterval(timer); interval = 912 }
        if (interval < 333) { clearInterval(timer); interval = 333 }
        eL.innerHTML = interval / 10
    }, 1)
}

function updateColorTo(color) {
    document.querySelectorAll('.percentage-value').forEach(element => {
        element.style.color = color

    })
}



// debugger
startNewRoll()