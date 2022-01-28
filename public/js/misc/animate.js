const diceRotatingAnimation = (index) => {
    // console.log('rotating', index)
    if (index >= diceParents.length - 1) { diceReady() }
    let deg = 0
    let timer = setInterval(() => {
        deg += 5
        if (diceParents[index].getAttribute('rolling') == 'false') {
            clearInterval(timer)
            return
            // console.log(diceELs[index].children[0].style.transform)
            // diceELs[index].children[0].style.transform = `rotate(0deg)`
        }
        if (deg >= 360) { deg = 0 }
        diceParents[index].children[0].style.transform = `rotate(${deg}deg)`

    }, 1);
}

const rotateSaveIcon = () => {
    const saveIconEL = document.querySelector('#btn-save').children[0]

    let deg = 0
    let timer = setInterval(() => {
        deg+=2
        saveIconEL.style.transform = `rotate(${deg}deg)`
        if(deg >= 90){
            clearInterval(timer)
            saveIconEL.style.transform = `rotate(0deg)`
        }

    }, 1);
}

const pingElement = (element) => {
    element.classList.toggle('animate-ping')
    element.classList.toggle('text-yellow-200')
    let timer = setInterval(() => {
        element.classList.toggle('animate-ping')
        element.classList.toggle('text-yellow-200')

        clearInterval(timer)
    }, 100);
}

const allScoringDice = () => {
    
    let arr = Array.from(document.querySelectorAll('.locked')).map(data => data = data.children[0])
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.classList.toggle('animate-ping')
        console.log(element);
        element.classList.toggle('animate-pulse')
        let t = setInterval(() => {
            element.classList.toggle('animate-ping')
            clearInterval(t)
        }, 10);

    }
}
