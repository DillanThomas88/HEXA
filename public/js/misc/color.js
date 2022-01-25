const colorObj = {
    red: 'fill-red-400',
    orange: 'fill-orange-400',
    yellow: 'fill-yellow-400',
    green: 'fill-green-400',
    blue: 'fill-blue-400',
    purple: 'fill-purple-400',
    darkred: 'fill-red-500',
    darkorange: 'fill-orange-500',
    darkyellow: 'fill-yellow-500',
    darkgreen: 'fill-green-500',
    darkblue: 'fill-blue-500',
    darkpurple: 'fill-purple-500',
    lightorange: 'fill-orange-100',
    lightgreen: 'fill-green-100',
    lightblue: 'fill-blue-100'
}

const colorDice = (obj) => {
    const special = obj.specialCombo
    const standard = obj.standardCombo
    if(special.name){
        if(special.name === 'supaquad'){
            setDataColorAttribute(special.diceNumber1, colorObj.darkblue)
            setDataColorAttribute(special.diceNumber2, colorObj.lightblue)
            return
        } else if (special.name === 'straight'){
            setDataColorAttribute(1, colorObj.yellow)
            setDataColorAttribute(2, colorObj.yellow)
            setDataColorAttribute(3, colorObj.yellow)
            setDataColorAttribute(4, colorObj.yellow)
            setDataColorAttribute(5, colorObj.yellow)
            setDataColorAttribute(6, colorObj.yellow)
        } else if (special.name === 'triplepair') {
            setDataColorAttribute(special.diceNumber1, colorObj.green)
            setDataColorAttribute(special.diceNumber2, colorObj.lightgreen)
        } else { console.log('special combo error');}
    } else if (standard.name){
        if(standard.name === 'triple'){
            setDataColorAttribute(standard.diceNumber, colorObj.green)
        } else if (standard.name === 'quad'){
            setDataColorAttribute(standard.diceNumber, colorObj.darkblue)
        } else if (standard.name === 'penta'){
            setDataColorAttribute(standard.diceNumber, colorObj.purple)
        } else if (standard.name === 'hexa'){
            setDataColorAttribute(standard.diceNumber, colorObj.orange)
        } else { console.log('standard combo error')}
    }
    
}

function updatePercentageEL(percentage) {
    // console.log(percentage)
    let eL = document.querySelector('#percentage-element')
    const currentPercentage = parseInt(eL.innerHTML.split("").filter(data => data != '.').join(""))
    let interval = currentPercentage
    let isDescending;
    let timer = setInterval(() => {
        // console.log(percentage)
        // console.log(currentPercentage,percentage)
        if (currentPercentage == percentage) { clearInterval(timer); eL.innerHTML = percentage / 10; return }
        else if (currentPercentage < percentage) { isDescending = false; interval += 3 }
        else { isDescending = true; interval -= 3 }
        if (isDescending) {
            if (interval <= percentage) {
                clearInterval(timer)
                eL.innerHTML = percentage / 10
                return
            }
        } else {
            if (interval >= percentage) {
                clearInterval(timer)
                eL.innerHTML = percentage / 10
                return
            }
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

