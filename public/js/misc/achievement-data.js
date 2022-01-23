let playerData = ''
let allTotals = 0
function newUserSetUp() {
    const achievementList = {
        saved: [
            novice = {
                title: 'NOVICE',
                desc: "Earn a score of 300 and save it!",
                image: '',
                status: 'locked',
            },
            beginner = {
                title: 'BEGINNER',
                desc: "Earn a score of 500 and save it!",
                image: '',
                status: 'locked',
            },
            adept = {
                title: 'ADEPT',
                desc: "Earn a score of 1000 and save it!",
                image: '',
                status: 'locked',
            },
            expert = {
                title: 'EXPERT',
                desc: "Earn a score of 1500 and save it!",
                image: '',
                status: 'locked',
            },
            master = {
                title: 'MASTER',
                desc: "Earn a score of 2000 and save it!",
                image: '',
                status: 'locked',
            },
            grandmaster = {
                title: 'GRAND MASTER',
                desc: "Earn a score of 2500 and save it!",
                image: '',
                status: 'locked',
            },
            legend = {
                title: 'LEGEND',
                desc: "Earn a score of 3000 and save it!",
                image: '',
                status: 'locked',
            },
            god = {
                title: 'GOD',
                desc: "Earn a score of 3500 and save it!",
                image: '',
                status: 'locked',
            },
            unreal = {
                title: 'UNREAL',
                desc: "Earn a score of 4000 and save it!",
                image: '',
                status: 'locked',
            },
        ],
        standard: {
            hexa: [
                {
                    title: 'HEXA 1',
                    desc: "Six Ones",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 2',
                    desc: "Six Twos",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 3',
                    desc: "Six Threes",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 4',
                    desc: "Six Fours",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 5',
                    desc: "Six Fives",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'HEXA 6',
                    desc: "Six Sixes",
                    fact: '0.012%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            penta: [
                {
                    title: 'PENTA 1',
                    desc: "Five Ones",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 2',
                    desc: "Five Twos",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 3',
                    desc: "Five Threes",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 4',
                    desc: "Five Fours",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 5',
                    desc: "Five Fives",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'PENTA 6',
                    desc: "Five Sixes",
                    fact: '0.386%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            quad: [
                {
                    title: 'QUAD 1',
                    desc: "Four Ones",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 2',
                    desc: "Four Twos",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 3',
                    desc: "Four Threes",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 4',
                    desc: "Four Fours",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 5',
                    desc: "Four Fives",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'QUAD 6',
                    desc: "Four Sixes",
                    fact: '4.82%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
            ],
            triple: [
                {
                    title: 'TRIPLE 1',
                    desc: "Three Ones",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 2',
                    desc: "Three Twos",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 3',
                    desc: "Three Threes",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 4',
                    desc: "Three Fours",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 5',
                    desc: "Three Fives",
                    fact: '30.86%',
                    image: '',
                    status: 'locked',
                    total: 0,
                },
                {
                    title: 'TRIPLE 6',
                    desc: "Three Sixes",
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
                desc: "Three Pairs Of Two",
                fact: '3.86% (1 in 26)',
                image: '',
                status: 'locked',
                total: 0,
            },
            straight = {
                title: 'STRAIGHT',
                desc: "One Of Every Kind",
                fact: '1.54% (1 in 65)',
                image: '',
                status: 'locked',
                total: 0,
            },
            doubletriple =  {
                title: 'DOUBLE TRIPLE',
                desc: "Two Pairs Of Three",
                fact: '0.64% (1 in 155)',
                image: '',
                status: 'locked',
                total: 0,
            },
            supaquad = {
                title: 'SUPER QUAD',
                desc: "Four Of A Kind With A Pair",
                fact: 'Unknown',
                image: '',
                status: 'locked',
                total: 0,
            },
        ],
    };
    let standard = achievementList.standard;

    addIndex(achievementList.saved);
    addIndex(standard.hexa);
    addIndex(standard.penta);
    addIndex(standard.quad);
    addIndex(standard.triple);
    addIndex(achievementList.special);
    return achievementList;
}
let totalAchievs = 0
let unlocked = 0

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
    div4.classList.add('text-zinc-600', 'font-bold', 'text-xs',)

    p.classList.add('text-2xl', 'text-zinc-800', 'flex', 'items-center', 'uppercase')
    p.innerHTML = locked
    span1.classList.add('text-zinc-400')
    span1.textContent = title



}

const showAchievement = (obj, color) => {
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
    div4.append(span1, span2, span3)
    div5.append(span4, span5, span6)
    div1.classList.add('pt-4', 'bottom-16', 'w-full')
    div2.classList.add('border-l-4', applyColor, 'normal-case', 'py-2', 'px-3', 'flex', 'flex-col', 'justify-between', 'align-center')
    div3.classList.add('-mt-1')
    div4.classList.add('text-xs', 'text-zinc-100', 'flex', 'justify-between', 'items-center')
    div5.classList.add('text-zinc-100', 'font-bold', 'text-xs', 'flex')

    span1.classList.add('w-3/5', 'text-2xl', 'justify-start')
    span2.classList.add('w-2/6', 'flex', 'justify-start', 'text-zinc-700')
    span3.classList.add('w-1/6', 'flex', 'justify-end')
    span4.classList.add('w-3/5')
    span5.classList.add('w-2/6', 'flex', 'justify-start', 'text-zinc-700')
    span6.classList.add('w-1/6', 'flex', 'justify-end')

    span1.textContent = obj.title
    span2.textContent = 'Times Rolled'
    span3.textContent = obj.total
    span4.textContent = obj.desc
    span5.textContent = 'Chance'
    span6.textContent = obj.fact
    allTotals += obj.total
}



function appendAll() {
    allTotals = 0
    const statsHeader = document.querySelector('#stats-header')
    const statsCont = document.querySelector('#stats-container')

    //   console.log(statsCont)
    let { saved, standard, special } = playerData;
    let { hexa, penta, quad, triple } = standard;
    let { straight, doubletriple, triplepair, supaquad} = special
    let arr = [saved, special, triple, quad, penta, hexa]
    let arr2 = ['Regular', 'Special', 'Standard']
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (arr2[i]) {
            let hr = document.createElement('hr')
            hr.classList.add('mt-4', 'bg-zinc-800', 'border-none', 'my-1')
            hr.style.height = '1px'
            let div = document.createElement('div')
            div.textContent = arr2[i]
            div.classList.add('text-zinc-800', 'text-lg')
            statsCont.append(hr, div)

        }
        appendAchievements(element)

    }
    statsHeader.textContent = `(${unlocked} out of ${totalAchievs}) Unlocked`
    let div = document.createElement('div')
    statsHeader.append(div)
    div.classList.add('absolute', '-bottom-5', 'right-0', 'text-zinc-300', 'text-sm')
    div.textContent = allTotals
}

function appendAchievements(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.status === 'locked') {
            totalAchievs++
            createLockedAchievement(element.title);
        } else {
            totalAchievs++
            unlocked++
            // alltotals += element.value
            // console.log(element.title)
            switch (element.title.split(" ")[0].toLowerCase()) {
                case 'triple':
                    showAchievement(element, 'orange')
                    break;
                case 'quad':
                    showAchievement(element, 'green')
                    break;
                case 'penta':
                    showAchievement(element, 'blue')
                    break;
                case 'hexa':
                    showAchievement(element, 'purple')
                    break;
                case 'double':
                    showAchievement(element, 'orange')
                    break;
                case 'straight':
                    showAchievement(element, 'rose')
                    break;

                default:
                    // showAchievement(element, 'yellow')
                    break;
            }

        }
    }



}


