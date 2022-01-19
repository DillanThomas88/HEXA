const scoreEL = document.querySelector('#score-element')
scoreEL.innerHTML = 0
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
    darkpurple: 'fill-purple-500'
}

const diceArr = [
    `<svg data-die="1"  class=" pointer-events-none fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g>
     <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
     <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
    </g>
   </svg>`,
    `<svg data-die="2" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
   <g>
    <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
    <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
    <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   </g>
  </svg>`,
    `<svg data-die="3" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <g>
   <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
   <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
   <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
  </g>
 </svg>`,
    `<svg data-die="4" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
 <g>
  <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
  <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
  <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
  <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
  <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 </g>
</svg>`,
    `<svg data-die="5" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
 <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
 <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
 <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
 <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
</g>
</svg>`,
    `<svg data-die="6" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
 <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
 <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
 <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
 <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 <path d="m47.543 64c0 4.543-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6875-8.2266-8.2305s3.6836-8.2305 8.2266-8.2305c4.5469 0 8.2305 3.6875 8.2305 8.2305"/>
 <path d="m96.914 64c0 4.543-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6875-8.2305-8.2305s3.6836-8.2305 8.2305-8.2305c4.543 0 8.2266 3.6875 8.2266 8.2305"/>
</g>
</svg>`
]

const xArray = [
    document.querySelector('#die-1'),
    document.querySelector('#die-2'),
    document.querySelector('#die-3'),
    document.querySelector('#die-4'),
    document.querySelector('#die-5'),
    document.querySelector('#die-6'),
]
const questionmarkEL = `                    <div class="z-0 pointer-events-none border opacity-0 border-zinc-100 border-4 w-14 h-14 rounded-xl"></div>
<svg class="opacity-5 pointer-events-none absolute h-12 w-auto pt-2 fill-zinc-100" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g>
     <path d="m94.719 41.215c-0.64062-16.258-13.312-29.441-29.441-30.719-9.0898-0.76953-18.047 2.3047-24.574 8.4492-6.3984 6.0156-9.9844 14.207-9.9844 23.039 0 4.2227 3.457 7.6797 7.6797 7.6797 4.2227 0 7.6797-3.457 7.6797-7.6797 0-4.4805 1.793-8.7031 5.1211-11.777 3.457-3.1992 8.0625-4.7344 12.93-4.3516 8.3203 0.64062 14.977 7.6797 15.23 16 0.25781 6.2734-2.9453 11.777-8.4492 14.719-9.7266 5.25-15.871 15.617-15.871 27.012 0 4.2227 3.457 7.6797 7.6797 7.6797s7.6797-3.457 7.6797-7.6797c0-5.7617 2.9453-11.008 7.8086-13.566 10.625-5.7617 16.898-16.773 16.512-28.805z"/>
     <path d="m74.238 106.88c0 5.6562-4.582 10.242-10.238 10.242s-10.238-4.5859-10.238-10.242 4.582-10.238 10.238-10.238 10.238 4.582 10.238 10.238"/>
    </g>
   </svg>`


xArray.forEach(element => {
    let randomNUM = Math.floor(Math.random() * diceArr.length)
    element.innerHTML = questionmarkEL
});

const startRoll = (firstIndex) => {
    let x = Array.from(document.querySelectorAll('.dice'))
    let xArray = x.filter(die => !die.classList.contains('locked'))
    // console.log(xArray)
    xArray.forEach(element => {
        if (element.getAttribute('rolling') == 'false') {
            let randomNUM = Math.floor(Math.random() * diceArr.length)
            element.innerHTML = questionmarkEL
            firstIndex = 0
        }
    });
    // document.querySelector('#btn-roll').removeEventListener('click', startRoll)
    let timer = setInterval(() => {
        // console.log(diceELs[firstIndex].children[0])
        let opacityLVL = ((xArray[firstIndex].children[0].style.opacity * 50) + 1) / 50
        if (opacityLVL >= .7) {
            if (xArray[firstIndex].getAttribute('rolling') == 'false') { clearInterval(timer) }
            xArray[firstIndex].children[0].style.opacity = .7;
            xArray[firstIndex].children[1].classList.add('fill-yellow-200', 'opacity-100')
            startRotation(firstIndex); clearInterval(timer)
        }
        xArray[firstIndex].children[0].style.opacity = opacityLVL
    }, 10);
    let wait = setInterval(() => {
        let nextIndex = firstIndex + 1
        if (nextIndex > xArray.length - 1) { return }
        startRoll(nextIndex)
        clearInterval(wait)

    }, 100);
}

const startRotation = (index) => {
    if (index >= xArray.length - 1) { activateDICE() }
    let deg = 0
    let timer = setInterval(() => {
        deg += 10
        if (xArray[index].getAttribute('rolling') == 'false') {
            clearInterval(timer)
            return
            // console.log(diceELs[index].children[0].style.transform)
            // diceELs[index].children[0].style.transform = `rotate(0deg)`
        }
        if (deg >= 360) { deg = 1 }
        xArray[index].children[0].style.transform = `rotate(${deg}deg)`

    }, 1);
}

const activateDICE = () => {
    xArray.forEach(element => {

        element.addEventListener('click', freezeDieEL = (e) => {

            if (e.target.classList.contains('dice')) {
                let refreshEnabled = true
                let number = Math.floor(Math.random() * 3 + 1)  //--------------------------------------------------------------change
                e.target.innerHTML = diceArr[number - 1];
                e.target.setAttribute('rolling', 'false');
                e.target.classList.add('dice-activated')
                if (number === 1 || number === 5) { e.target.children[0].classList.add('fill-zinc-300') }
                else { e.target.children[0].classList.add('fill-zinc-700') }
                let dupedDice = 0

                xArray.forEach(element => {
                    if (element.getAttribute('rolling') == "true") { refreshEnabled = false }
                    if (parseInt(element.children[0].getAttribute('data-die')) == number) { dupedDice++ }

                });
                // console.log(dupedDice)
                let old_element = e.target
                let new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);


                switch (dupedDice) {
                    case 3:
                        updateDiceColorsAndData(number, colorObj.orange);
                        break;
                    case 4:
                        updateDiceColorsAndData(number, colorObj.green);
                        break;
                    case 5:
                        updateDiceColorsAndData(number, colorObj.darkblue);
                        break;
                    case 6:
                        updateDiceColorsAndData(number, colorObj.darkpurple);
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


            let diceStatsObj = getDiceStatistics()
            ifAllDiceRolledReadyNextRoll(diceStatsObj)

        })
    });
    let timer = setInterval(() => {
        xArray.forEach(element => {
            element.children[0].classList.add('border-yellow-200')
        });
        clearInterval(timer)
    }, 10);
}

function updateDiceColorsAndData(number, color) {
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

const getDiceStatistics = () => {
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

const calculatePlayerScore = (diceObject) => {
    const properties = Object.keys(diceObject)
    let prevTotal = parseInt(scoreEL.innerHTML)
    let totalObject = { common: 0, standard: 0, special: 0, pair: 0, bonus: 0 }
    properties.forEach(element => {
        // console.log(diceObject)
        let colorString
        let bonus
        switch (element) {
            case getColor(colorObj.orange):

                colorString = String(getColor(colorObj.orange))
                if (diceObject[colorString].total == 6) { totalObject.special = 250 }
                else if (diceObject[colorString].value == 1) { totalObject.standard += 30 }
                else { totalObject.standard += diceObject[colorString].value * 10 }
                break;

            case getColor(colorObj.green):

                colorString = getColor(colorObj.green)
                let pair = 0
                if (diceObject.common) {
                    if (diceObject.common.length === 2) {
                        if (diceObject.common[0] === diceObject.common[1]) { totalObject.pair = 25 }
                    }
                }
                if (diceObject.one === 2 || diceObject.five === 2) { totalObject.pair = 25 }
                totalObject.bonus = 100
                totalObject.standard += (diceObject[colorString].value * 10)
                break;

            case getColor(colorObj.blue):

                colorString = getColor(colorObj.blue)
                totalObject.bonus = 200
                totalObject.standard += (diceObject[colorString].value * 10)
                break;

            case getColor(colorObj.purple):

                colorString = getColor(colorObj.purple)
                totalObject.bonus = 300
                totalObject.standard += (diceObject[colorString].value * 10)
                break;
            case 'one':

                colorString = 'one'
                totalObject.common += (diceObject[colorString] * 10)
                break;

            case 'five':

                colorString = 'five'
                totalObject.common += (diceObject[colorString] * 5)
                break;

            default:
                break;
        }

    });
    animateScore(totalObject)
    // console.log(totalObject)

    let div
}

const getColor = (color) => {
    return color.split("-").splice(1, 1).join("")
}

const animateScore = (scoreObj) => {
    // let incriment = oldScore
    // let difference = scoreObj - oldScore
    // if (oldScore === scoreObj) { return }
    const addEL = document.querySelector('#add-element')

    let scoreArr = getScoreArray(scoreObj)
    let scoretotal = 0
    for (let i = 0; i < scoreArr.length; i++) {
        const element = scoreArr[i];
        scoretotal += element
    }
    // ---------------------------------------------------------------filll in
    appendScoreChildren(scoreArr, 0)
    let incriment = 0
    let timer = setInterval(() => {
        if (incriment === scoretotal) {
            clearInterval(timer);
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
    let appendtimer = 375
    let fadeDuration = 500
    const containerEL = document.querySelector('#add-container')
    if (arr[index]) {
        let liEL = document.createElement('li')
        let apanEL0 = document.createElement('span')
        let apanEL1 = document.createElement('span')
        let divEL = document.createElement('div')
        liEL.classList.add('absolute','inset-0','-ml-4' ,'text-zinc-600')

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
            liEL.style.top = `${incriment/5}px`
            liEL.style.opacity = `${opacity / fadeDuration}`

        }, 1);

        let appendDuration = setInterval(() => {
            clearInterval(appendDuration)
            appendScoreChildren(arr, index + 1)
        }, appendtimer);
    }
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

const ifAllDiceRolledReadyNextRoll = (obj) => {
    let x = Array.from(document.querySelectorAll('.dice-activated'))
    if (x.length === 6) {
        // console.log(obj)
        calculatePlayerScore(obj)
        // const propertyNames = Object.keys(x)
        let newX = x.filter(die => die.children[0].getAttribute('data-type') != 'common')
        newX.forEach(element => {
            element.classList.add('locked')

        });
    }
}

startRoll(0)