let refreshbtn = document.querySelector('#btn-roll')
const scoreEL = document.querySelector('#score-element')
scoreEL.innerHTML = 0

let diceParents = []
let unlockedDice = []
let score = 0

const startNewRoll = (arr) => {
    let newarr = []
    if (arr) {
        diceParents = arr
        newarr = arr
        diceParents.forEach(element => {
            element.innerHTML = questionmarkEL
        });
        console.log('after first turn')
    } else {
        diceParents = getDiceParentElements()
        diceParents.forEach(element => {
            element.innerHTML = questionmarkEL
        });
        console.log('first turn')

        newarr = diceParents

    }
    // console.log(newarr)

    init(0, newarr)
}


const init = (firstIndex, xxarr) => {

    xxarr.forEach(element => {
        if (element.getAttribute('rolling') == 'false') {
            // let randomNUM = Math.floor(Math.random() * diceArr.length)
            element.innerHTML = questionmarkEL
            firstIndex = 0
        }
    });
    // diceParents = getDiceParentElements()
    // console.log(diceParents)

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
    console.log('rotating', index)
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
                let number = Math.floor(Math.random() * 5 + 1)  //--------------------------------------------------------------change
                e.target.innerHTML = diceArr[number - 1];
                e.target.setAttribute('rolling', 'false');
                e.target.classList.add('dice-activated')
                e.target.children[0].classList.toggle('fill-zinc-100')
                if (number === 1 || number === 5) { e.target.children[0].classList.add('fill-zinc-300') }
                else { e.target.children[0].classList.add('fill-zinc-700') }
                let dupedDice = 0

                diceParents.forEach(element => {

                    if (parseInt(element.children[0].getAttribute('data-die')) == number) { dupedDice++ }

                });
                // console.log(dupedDice)
                let old_element = e.target
                let new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);


                switch (dupedDice) {
                    case 3:
                        setDataColorAttribute(number, colorObj.orange);
                        break;
                    case 4:
                        setDataColorAttribute(number, colorObj.green);
                        break;
                    case 5:
                        setDataColorAttribute(number, colorObj.darkblue);
                        break;
                    case 6:
                        setDataColorAttribute(number, colorObj.darkpurple);
                        break;

                    default:
                        break;
                }

                // if (refreshEnabled === true) {

                //     let rollBtnEL = document.querySelector('#btn-roll')
                //     let stayBtnEL = document.querySelector('#btn-stay')
                //     // rollBtnEL.style.opacity = .8
                //     // stayBtnEL.style.opacity = .8

                //     rollBtnEL.addEventListener('click', startRoll)
                // }
            }


            let diceStatsObj = createPlayerStatsObject()
            // console.log(diceStatsObj)
            ifAllDiceRolledReadyNextRoll(diceStatsObj)

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
    // console.log(number)

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
    playerPackage = {}
    const scoreEL = document.querySelector('#score-element')
    const diceArray = document.querySelectorAll('.dice')
    diceArray.forEach(element => {
        let die = element.children[0]
        let numberInt
        if (die.getAttribute('data-die')) {
            numberInt = parseInt(die.getAttribute('data-die'))
        }
        if (die.getAttribute('data-color')) {
            let color = die.getAttribute('data-color')
            if (playerPackage[color]) { playerPackage[color].total++ }
            else {
                playerPackage[color] = {
                    total: 1,
                    value: parseInt(die.getAttribute('data-die'))
                }
            }
        } else {
            if (numberInt == 1) {
                die.setAttribute('data-type', 'one')
                let color = die.getAttribute('data-type')
                if (playerPackage[color]) { playerPackage[color]++ }
                else { playerPackage[color] = 1 }

            } else if (numberInt == 5) {
                die.setAttribute('data-type', 'five')
                let color = die.getAttribute('data-type')
                if (playerPackage[color]) { playerPackage[color]++ }
                else { playerPackage[color] = 1 }
            } else if (die.getAttribute('data-die')) {
                if (die.getAttribute('data-type')) {
                } else { die.setAttribute('data-type', 'common') }
                let common = die.getAttribute('data-type')
                if (playerPackage[common]) { playerPackage[common].push(numberInt) }
                else { playerPackage[common] = [numberInt] }
            }
        }
    });
    // console.log(playerPackage)
    return playerPackage
}

const beginPlayerScoreCalculation = (diceObject) => {
    const properties = Object.keys(diceObject)
    let prevTotal = parseInt(scoreEL.innerHTML)
    let totalObject = { common: 0, standard: 0, special: 0, pair: 0, bonus: 0, total: 0 }
    // console.log(diceObject)
    properties.forEach(element => {
        // console.log(totalObject.total)
        let colorString
        let bonus
        switch (element) {
            case getColor(colorObj.orange):

                colorString = String(getColor(colorObj.orange))
                if (diceObject[colorString].total == 6) { 
                    totalObject.special = 250 
                    totalObject.total = 6
                    return
                    // console.log(diceObject)
                }
                else if (diceObject[colorString].value == 1) { totalObject.standard += 30 }
                else { totalObject.standard += diceObject[colorString].value * 10 }
                break;

            case getColor(colorObj.green):

                colorString = getColor(colorObj.green)
                let pair = 0
                if (diceObject.common) {
                    if (diceObject.common.length === 2) {
                        if (diceObject.common[0] === diceObject.common[1]) { 
                            totalObject.pair = 25
                            totalObject.bonus = 100
                            totalObject.total = 6
                            return 
                        }
                    }
                }
                if (diceObject.one === 2 || diceObject.five === 2) { 
                    totalObject.pair = 25
                    totalObject.bonus = 100
                    totalObject.total = 6
                    return  
                }
                // totalObject.bonus = 100
                // totalObject.standard += (diceObject[colorString].value * 10)
                // totalObject.total += 4
                break;

            case getColor(colorObj.blue):

                colorString = getColor(colorObj.blue)
                totalObject.bonus = 200
                totalObject.standard += (diceObject[colorString].value * 10)
                totalObject.total += 5
                break;

            case getColor(colorObj.purple):

                colorString = getColor(colorObj.purple)
                totalObject.bonus = 300
                totalObject.standard += (diceObject[colorString].value * 10)
                totalObject.total = 6
                break;
            case 'one':

                colorString = 'one'
                totalObject.common += (diceObject[colorString] * 10)
                totalObject.total += 1
                break;

            case 'five':

                colorString = 'five'
                totalObject.common += (diceObject[colorString] * 5)
                totalObject.total += 1
                break;

            default:
                break;
        }
        // console.log(totalObject)
    });
    animateScoreAccumulator(totalObject, diceObject)
    // console.log(totalObject)

    let div
}

const animateScoreAccumulator = (scoreObj, diceObj) => {
    // let incriment = oldScore
    // let difference = scoreObj - oldScore
    // if (oldScore === scoreObj) { return }
    const addEL = document.querySelector('#add-element')

    let scoreArr = getScoreArray(scoreObj)

    checkForSpecialCombo(scoreArr, diceObj)

    // console.log(diceObj)
    // console.log(scoreArr)

    let scoretotal = 0
    for (let i = 0; i < scoreArr.length; i++) {
        const element = scoreArr[i];
        scoretotal += element
    }
    
    if(scoretotal === score){ console.log('you lost')}

    appendScoreChildren(scoreArr, 0)

    let incriment = score
    let timer = setInterval(() => {
        if (incriment === scoretotal) {
            clearInterval(timer);
            if (scoreEL.classList.contains('scale-110')) {
                scoreEL.classList.toggle('scale-110')
            }
            score = scoretotal
            return
        }
        incriment++
        if (incriment % 2) {
            scoreEL.classList.toggle('scale-110')
            scoreEL.classList.add('opacity-80')
        }
        scoreEL.innerHTML = incriment

    }, 20);
}

const appendScoreChildren = (arr, index) => {
    // console.log(arr)
    let appendtimer = 375
    let fadeDuration = 500
    const containerEL = document.querySelector('#add-container')
    if (arr[index]) {
        let liEL = document.createElement('li')
        let apanEL0 = document.createElement('span')
        let apanEL1 = document.createElement('span')
        let divEL = document.createElement('div')
        liEL.classList.add('absolute', 'inset-0', '-ml-4', 'text-zinc-600')

        apanEL0.classList.add('opacity-80', '-ml-2')
        apanEL0.innerHTML = '+'

        apanEL1.setAttribute('id', `li-${i}`)
        apanEL1.innerHTML = arr[index]
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
            appendScoreChildren(arr, index + 1)
        }, appendtimer);
    }
}

const ifAllDiceRolledReadyNextRoll = (obj) => {
    let x = Array.from(document.querySelectorAll('.dice-activated')) 
    // console.log(x.length)
    if (x.length === 6) {
        // console.log(obj)
        beginPlayerScoreCalculation(obj)
        // const propertyNames = Object.keys(x)
        // console.log(x)
        let newX = x.filter(die => die.children[0].getAttribute('data-type') != 'common')
        // console.log(newX);
        newX.forEach(element => {
            element.classList.add('locked')
            // console.log(element)

        });

        unlockedDice = newX
        let y = Array.from(document.querySelectorAll('.dice'))
        let xArr = y.filter(die => !die.classList.contains('locked'))
        let statsArr = Object.entries(obj).filter(data => data[0] != 'common').filter(data => data[0] != 'one').filter(data => data[0] != 'five')
        // console.log(xArr)

        let percentage = calculatenNextChance(statsArr, xArr.length)
        // console.log(percentage)
        waitFor(500, updatePercentageEL, percentage)
        waitFor(1000, activateReRollBtn, xArr)
        
    }
}

function updatePercentageEL(percentage) {
    // console.log(percentage)
    let eL = document.querySelector('#percentage-element')
    const currentPercentage = parseInt(eL.innerHTML.split("").filter(data => data != '.').join(""))
    let interval = currentPercentage
    let timer = setInterval(() => {
        // console.log(percentage)
        // console.log(currentPercentage,percentage)
        if (currentPercentage == percentage) { clearInterval(timer); return }
        else if (currentPercentage < percentage) { interval++ }
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
        eL.innerHTML = interval / 10
    }, 2)
}
function updateColorTo(color) {
    document.querySelectorAll('.percentage-value').forEach(element => {
        element.style.color = color

    })
}



// debugger
startNewRoll()