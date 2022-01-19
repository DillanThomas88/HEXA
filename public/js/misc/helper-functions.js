const getColor = (color) => {
    return color.split("-").splice(1, 1).join("")
}
const getScoreArray = (obj) => {
    let { common, standard, special, pair, bonus } = obj
    let arr = [special, bonus, pair, standard, common]
    const containerEL = document.querySelector('#add-container')
    if (pair) {
        arr[0] = bonus + pair
        arr[1] = 0
        arr[2] = 0
    }
    return arr.filter(int => int != 0)
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
    let numOfDifferentDice = 2
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element[1].value !== 1 && element[1].value !== 5){
            numOfDifferentDice++

        }
    }
    let decimal = (6 - numOfDifferentDice)/6
    let ratio = Math.pow(decimal, length)

    return percentage = ((1 - ratio) * 100).toFixed(1)* 10
}