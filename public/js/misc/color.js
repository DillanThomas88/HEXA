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
    lightgreen: 'fill-green-100'
}

const colorDice = (obj) => {
    const special = obj.specialCombo
    const standard = obj.standardCombo
    if(special.name){
        if(special.name === 'supaquad'){
            setDataColorAttribute(special.diceNumber1, colorObj.green)
            setDataColorAttribute(special.diceNumber2, colorObj.lightgreen)
            return
        } else if (special.name === 'straight'){
            setDataColorAttribute(1, colorObj.orange)
            setDataColorAttribute(2, colorObj.yellow)
            setDataColorAttribute(3, colorObj.green)
            setDataColorAttribute(4, colorObj.blue)
            setDataColorAttribute(5, colorObj.purple)
            setDataColorAttribute(6, colorObj.red)
        } else if (special.name === 'triplepair') {
            setDataColorAttribute(special.diceNumber1, colorObj.orange)
            setDataColorAttribute(special.diceNumber2, colorObj.lightorange)
        } else { console.log('special combo error');}
    } else if (standard.name){
        if(standard.name === 'triple'){
            setDataColorAttribute(standard.diceNumber, colorObj.orange)
        } else if (standard.name === 'quad'){
            setDataColorAttribute(standard.diceNumber, colorObj.green)
        } else if (standard.name === 'penta'){
            setDataColorAttribute(standard.diceNumber, colorObj.blue)
        } else if (standard.name === 'hexa'){
            setDataColorAttribute(standard.diceNumber, colorObj.purple)
        } else { console.log('standard combo error')}
    }
    
}