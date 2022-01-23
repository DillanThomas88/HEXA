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
        if(typeof element == 'object'){
            if(element.value){
                obj2.arr[i] =  element.value
            }  else { obj2.arr[i] =  0 }
        } 
    }
    for (let j = 0; j < obj2.arr.length; j++) {
        const element = obj2.arr[j];
        obj2.total+= element
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
    let {one, two, three, four, five , six} = obj
    let arr = [one,two,three,four,five,six]
    let numOfDifferentDice = 2
    let percentage
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element >= 3 && i + 1 != 1 && i + 1 != 5){
            numOfDifferentDice++
        }
        if ((element === 3)){
            for (let j = 0; j < arr.length; j++) {
                const el2 = arr[j];
                if(el2 === 3 && j != i){
                    return percentage = 912
                }
            }
        } else if (element === 4){
            for (let k = 0; k < arr.length; k++) {
                const el3 = arr[k];
                if(el3 === 2 && k != i){
                    return percentage = 912
                }
            }
        }
    }


    let decimal = (6 - numOfDifferentDice)/6
    let ratio = Math.pow(decimal, length)

    // console.log(decimal, ratio)
    percentage = ((1 - ratio) * 100).toFixed(1)* 10
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
    let {one, five, specialCombo, standardCombo} = obj
    if(specialCombo.name){
        setDataTypeAttribute(specialCombo.diceNumber1)
        setDataTypeAttribute(specialCombo.diceNumber2)
        // console.log(standardCombo.diceNumber1)
        // console.log(standardCombo.diceNumber2)
        return
    }

    if(standardCombo.name){
        setDataTypeAttribute(standardCombo.diceNumber)
        // console.log(standardCombo.diceNumber)
    }
    if(one !== 0){
        setDataTypeAttribute(1)
        // console.log('one')
    }
    if(five !== 0){
        setDataTypeAttribute(5)
        // console.log('five')
    }
    
    let parents = getDiceParentElements()
    for (let j = 0; j < parents.length; j++) {
        const element = parents[j];
        if(!element.hasAttribute('data-type')){
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