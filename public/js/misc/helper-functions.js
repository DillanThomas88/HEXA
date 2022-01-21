const getColor = (color) => {
    return color.split("-").splice(1, 1).join("")
}
const getScoreArray = (obj) => {
    let { common, standard, special, pair, bonus , total } = obj
    let arr = [special, bonus, pair, standard, common, total]
    const containerEL = document.querySelector('#add-container')
    if (pair === 25) {
        arr[0] = bonus + pair
        arr[1] = 0
        arr[2] = 0
        arr.special = {name:'supaquad', fiveOrOne: true}
        if(common === 0){arr.special.fiveOrOne = false}
    }
    if (special === 250){
        arr.special = {name:'twotriples'}
    }
    if (total === 6) {
        arr[5] = 0
        arr.total = {total: total } 
    } else { arr[5] = 0; arr.total = {total: total}}
            
    
    arr.filter(int => int != 0)
    return arr
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

const calculatenNextChance = (arr, length) => {
    if(!arr.common){  }
    // console.log(arr)
    let numOfDifferentDice = 2
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element[1].value !== 1 && element[1].value !== 5){
            numOfDifferentDice++

        }
    }
    let decimal = (6 - numOfDifferentDice)/6
    let ratio = Math.pow(decimal, length)

    // console.log(decimal, ratio)
    let percentage = ((1 - ratio) * 100).toFixed(1)* 10
    // console.log(percentage)
    if(percentage === 0){return percentage = 912}
    return percentage
}

const checkForSpecialCombo = (arr, diceObj) => {
    // console.log(arr)
    // console.log(diceObj)
    if (!arr.special) { return
    } else { 
        if(arr.special.name === 'supaquad' && !arr.special.fiveOrOne){

            let die = document.querySelectorAll(`[data-die='${diceObj.common[0]}']`)
            for (let i = 0; i < die.length; i++) {
                const element = die[i];
                element.classList.toggle('fill-zinc-700')
                element.classList.add('fill-yellow-400')
            }
        } else if (arr.special.name === 'twotriples'){
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
        func(param)
    }, miliseconds);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}