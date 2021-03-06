const turnCount = 3

function newUserSetUp() {

    const achievementList = {
        user: {
            userName: 'default',
            finishedTutorial: false,
            date: returnCurrentDay(),
            todayScore: 0,
            hasFinished: false,
            availableTurns: turnCount,
            round: [],
            playCount: 0,
            highestDailyScore: 0,
        },
        successfullRolls: 0,
        totalSaved: 0,
        totalLost: 0,
        totalRolls: 0,
        unlocked: 0,
        achievements: 0,
        game: [
            novice = {
                title: 'NOVICE',
                desc: "Save a total of 2,500 in a day!",
                image: '',
                status: 'locked',
                amount: 2500
            },
            beginner = {
                title: 'BEGINNER',
                desc: "Save a total of 5,000 in a day!",
                image: '',
                status: 'locked',
                amount: 5000
            },
            adept = {
                title: 'ADEPT',
                desc: "Save a total of 7,500 in a day!",
                image: '',
                status: 'locked',
                amount: 7500
            },
            expert = {
                title: 'EXPERT',
                desc: "Save a total of 10,000 in a day!",
                image: '',
                status: 'locked',
                amount: 10000
            },
            master = {
                title: 'MASTER',
                desc: "Save a total of 12,500 in a day!",
                image: '',
                status: 'locked',
                amount: 12500
            },
            grandmaster = {
                title: 'GRAND MASTER',
                desc: "Save a total of 15,000 in a day!",
                image: '',
                status: 'locked',
                amount: 15000
            },
            legend = {
                title: 'LEGEND',
                desc: "Save a total of 17,500 in a day!",
                image: '',
                status: 'locked',
                amount: 17500
            },
            god = {
                title: 'GOD',
                desc: "Save a total of 20,000 in a day!",
                image: '',
                status: 'locked',
                amount: 20000
            },
            unreal = {
                title: 'UNREAL',
                desc: "Save a total of 22,500 in a day!",
                image: '',
                status: 'locked',
                amount: 22500
            },
        ],
        standard: {
            hexa: [
                {
                    title: 'HEXA 1',
                    desc: "Successfully rolled six one's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 2',
                    desc: "Successfully rolled six two's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 3',
                    desc: "Successfully rolled six three's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 4',
                    desc: "Successfully rolled six four's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 5',
                    desc: "Successfully rolled six five's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 6',
                    desc: "Successfully rolled six six's",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            penta: [
                {
                    title: 'PENTA 1',
                    desc: "Successfully rolled five one's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 2',
                    desc: "Successfully rolled five two's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 3',
                    desc: "Successfully rolled five three's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 4',
                    desc: "Successfully rolled five four's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 5',
                    desc: "Successfully rolled five five's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 6',
                    desc: "Successfully rolled five six's",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            quad: [
                {
                    title: 'QUAD 1',
                    desc: "Successfully rolled four one's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 2',
                    desc: "Successfully rolled four two's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 3',
                    desc: "Successfully rolled four three's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 4',
                    desc: "Successfully rolled four four's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 5',
                    desc: "Successfully rolled four five's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 6',
                    desc: "Successfully rolled four six's",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            triple: [
                {
                    title: 'TRIPLE 1',
                    desc: "Successfully rolled three one's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 2',
                    desc: "Successfully rolled three twos's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 3',
                    desc: "Successfully rolled three three's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 4',
                    desc: "Successfully rolled three four's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 5',
                    desc: "Successfully rolled three five's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 6',
                    desc: "Successfully rolled three one's",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ]
        },
        special: [
            triplepair = {
                title: 'TRIPLE PAIRS',
                desc: "Successfully rolled three pairs",
                fact: '3.86% (1 in 26)',
                image: '',
                status: 'locked',
                total: 0,
            },
            straight = {
                title: 'STRAIGHT',
                desc: "Successfully rolled one of every kind",
                fact: '1.54% (1 in 65)',
                image: '',
                status: 'locked',
                total: 0,
            },
            doubletriple = {
                title: 'DOUBLE TRIPLE',
                desc: "Successfully rolled two triples",
                fact: '0.64% (1 in 155)',
                image: '',
                status: 'locked',
                total: 0,
            },
            supaquad = {
                title: 'SUPER QUAD',
                desc: "Successfully rolled four of a kind with a pair",
                fact: 'Unknown',
                image: '',
                status: 'locked',
                total: 0,
            },
        ],
    };

    let standard = achievementList.standard;

    addIndex(achievementList.game);
    addIndex(standard.hexa);
    addIndex(standard.penta);
    addIndex(standard.quad);
    addIndex(standard.triple);
    addIndex(achievementList.special);
    return achievementList;
}


function addIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.index = i
    }
}


const createLockedAchievement = (title) => {
    // console.log(title)
    let statsContainer = document.querySelector('#stats-container')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let p = document.createElement('p')
    let span1 = document.createElement('span')

    statsContainer.append(div1)
    div1.append(div2)
    div2.append(div3)
    div3.append(p, div4)
    div4.append(span1)

    div1.classList.add('pt-4', 'bottom-16', 'w-full')
    div2.classList.add('border-l-4', 'border-zinc-700', 'normal-case', 'py-2', 'px-3', 'flex', 'flex-col', 'justify-between', 'align-center')
    div3.classList.add('-mt-1', 'flex', 'items-center')
    div4.classList.add('text-zinc-600', 'font-thin', 'text-xs', 'ipadair:text-4xl')

    p.classList.add('text-2xl', 'text-zinc-800', 'flex', 'items-center', 'uppercase')
    p.innerHTML = locked
    span1.classList.add('text-zinc-400')
    span1.textContent = title



}

const showAchievementGame = (obj, color) => {
    let applyColor = ''
    switch (color) {
        case 'white':
            applyColor = 'border-zinc-100'
            break;
        default:
            break;
    }
    let statsContainer = document.querySelector('#stats-container')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let span1 = document.createElement('span')
    let span4 = document.createElement('span')


    statsContainer.append(div1)
    div1.append(div2)
    div2.append(div3)
    div3.append(div4, div5)
    div4.append(span1)
    div5.append(span4)
    div1.classList.add('pt-4', 'bottom-16', 'w-full')
    div2.classList.add('border-l-8', applyColor, 'normal-case', 'py-2', 'px-3', 'flex', 'flex-col', 'justify-between', 'align-center')
    div3.classList.add('-mt-1')
    div4.classList.add('text-xs', 'ipadair:text-4xl', 'text-zinc-100', 'flex', 'justify-between', 'items-center')
    div5.classList.add('text-zinc-100', 'font-bold', 'text-xs', 'ipadair:text-2xl', 'flex')

    span1.classList.add('w-5/6', 'text-2xl', 'ipadair:text-5xl', 'justify-start')
    span4.classList.add('w-5/6', 'text-zinc-400', 'font-normal')


    span1.textContent = obj.title
    span4.textContent = obj.desc

}

const showAchievementSpecAndStand = (obj, color) => {
    let applyColor = ''
    switch (color) {
        case 'orange':
            applyColor = 'border-orange-500'
            break;
        case 'green':
            applyColor = 'border-green-500'
            break;
        case 'blue':
            applyColor = 'border-blue-500'
            break;
        case 'purple':
            applyColor = 'border-purple-500'
            break;

        default:
            break;
    }
    let statsContainer = document.querySelector('#stats-container')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    let span4 = document.createElement('span')
    let span5 = document.createElement('span')
    let span6 = document.createElement('span')

    statsContainer.append(div1)
    div1.append(div2)
    div2.append(div3)
    div3.append(div4, div5)
    div4.append(span1, span3)
    div5.append(span4, span6)
    div1.classList.add('pt-4', 'bottom-16', 'w-full')
    div2.classList.add('border-l-8', applyColor, 'normal-case', 'py-2', 'px-3', 'flex', 'flex-col', 'justify-between', 'align-center')
    div3.classList.add('-mt-1')
    div4.classList.add('text-xs', 'ipadair:text-4xl', 'text-zinc-100', 'flex', 'justify-between', 'items-center')
    div5.classList.add('text-zinc-100', 'font-bold', 'text-xs', 'ipadair:text-2xl', 'flex')

    span1.classList.add('w-5/6', 'text-2xl', 'ipadair:text-5xl', 'justify-start')
    // span2.classList.add('w-2/6', 'flex', 'justify-start', 'text-zinc-700')
    span3.classList.add('w-1/6', 'flex', 'justify-end')
    span4.classList.add('w-5/6', 'text-zinc-400', 'font-normal')
    // span5.classList.add('w-2/6', 'flex', 'justify-start', 'text-zinc-700')
    span6.classList.add('w-1/6', 'flex', 'justify-end')

    span1.textContent = obj.title
    span2.textContent = 'Times Rolled'
    span3.textContent = obj.total
    span4.textContent = obj.desc
    span5.textContent = 'Chance'

    const getPercentage = (int) => {
        let percentage = (int / playerDataCopy.totalRolls) * 100
        if (String(percentage).split("").length != 2) {
            return percentage.toFixed(2)
        } else {
            return percentage
        }
    }

    span6.textContent = `${getPercentage(obj.total)}%`

}


function appendAchievementsGame(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.status === 'locked') {
            createLockedAchievement(element.title);
        } else {
            // console.log(element)
            switch (element.title.toLowerCase()) {
                case 'novice':
                    showAchievementGame(element, 'white')
                    break;
                case 'beginner':
                    showAchievementGame(element, 'white')
                    break;
                case 'adept':
                    showAchievementGame(element, 'white')
                    break;
                case 'expert':
                    showAchievementGame(element, 'white')
                    break;
                case 'master':
                    showAchievementGame(element, 'white')
                    break;
                case 'grand master':
                    showAchievementGame(element, 'white')
                    break;
                case 'legend':
                    showAchievementGame(element, 'white')
                    break;
                case 'god':
                    showAchievementGame(element, 'white')
                    break;
                case 'unreal':
                    showAchievementGame(element, 'white')
                    break;
                default:
                    // showAchievement(element, 'yellow')
                    break;
            }

        }
    }



}

function appendAchievementsSpecAndStand(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.status === 'locked') {
            createLockedAchievement(element.title);
        } else {
            // console.log(element)
            switch (element.title.split(" ")[0].toLowerCase()) {
                case 'triple':
                    showAchievementSpecAndStand(element, 'green')
                    break;
                case 'quad':
                    showAchievementSpecAndStand(element, 'blue')
                    break;
                case 'penta':
                    showAchievementSpecAndStand(element, 'purple')
                    break;
                case 'hexa':
                    showAchievementSpecAndStand(element, 'orange')
                    break;
                case 'double':
                    showAchievementSpecAndStand(element, 'green')
                    break;
                case 'straight':
                    showAchievementSpecAndStand(element, 'rose')
                    break;
                default:
                    // showAchievement(element, 'yellow')
                    break;
            }

        }
    }



}



function appendAll() {
    checkHighestScoreAchievement()
    document.querySelector('#achievement-header').textContent = `${playerDataCopy.user.userName}'s Statistics`
    document.querySelector('#version-number').textContent = `version ${playerDataCopy.version}`
    const statsCont = document.querySelector('#stats-container')
    while (statsCont.firstChild) {
        statsCont.removeChild(statsCont.lastChild);
    }

    cleanUserData()

    //   console.log(playerDataCopy)
    let { game, standard, special } = playerDataCopy;
    let { hexa, penta, quad, triple } = standard;
    let { straight, doubletriple, triplepair, supaquad } = special
    let arr = [game, special, triple, quad, penta, hexa]
    let arr2 = ['Regular', 'Special', 'Standard']
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (arr2[i]) {
            let hr = document.createElement('hr')
            hr.classList.add('mt-4', 'bg-zinc-800', 'border-none', 'my-1')
            hr.style.height = '1px'
            let div = document.createElement('div')
            div.textContent = arr2[i]
            div.classList.add('text-zinc-500', 'text-2xl', 'font-thin')
            statsCont.append(hr, div)

        }
        if(element === arr[0]){
            appendAchievementsGame(element)
        } else {
            appendAchievementsSpecAndStand(element)
        }
        // console.log(element)

    }
    // document.querySelector('#achievement-out-of').textContent = `(${playerDataCopy.unlocked} out of ${playerDataCopy.achievements}) Unlocked`
    document.querySelector('#saved-amount').textContent = parseInt(playerDataCopy.totalSaved).toLocaleString()
    document.querySelector('#saved-times').textContent = parseInt(playerDataCopy.successfullRolls).toLocaleString()
    document.querySelector('#lost-amount').textContent = parseInt(playerDataCopy.totalLost).toLocaleString()
    document.querySelector('#lost-times').textContent = parseInt(playerDataCopy.totalRolls).toLocaleString()
    document.querySelector('#highest-daily-amount').textContent = parseInt(playerDataCopy.user.highestDailyScore).toLocaleString()

    // let div = document.createElement('div')
    // statsHeader.append(div)
    // div.classList.add( '-bottom-5', 'right-0', 'text-zinc-300', 'text-sm')
    // div.textContent = playerDataCopy.successfulRolls
}

// updateUserData()
const cleanUserData = () => {
    playerDataCopy.achievements = 0
    playerDataCopy.unlocked = 0
    let { game, standard, special } = playerDataCopy;
    let { hexa, penta, quad, triple } = standard;
    let arr = [game, special, triple, quad, penta, hexa]

    for (let i = 0; i < arr.length; i++) {
        const parents = arr[i];
        for (let j = 0; j < parents.length; j++) {
            const element = parents[j];
            if (element.status === 'unlocked') {

                playerDataCopy.unlocked++
            }
            playerDataCopy.achievements++
        }

    }
}
