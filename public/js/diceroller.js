const diceArr = [
    `<svg data-die="0"  class=" pointer-events-none fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g>
     <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
     <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
    </g>
   </svg>`,
    `<svg data-die="1" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
   <g>
    <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
    <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
    <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   </g>
  </svg>`,
    `<svg data-die="2" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <g>
   <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
   <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
   <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
  </g>
 </svg>`,
    `<svg data-die="3" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
 <g>
  <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
  <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
  <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
  <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
  <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 </g>
</svg>`,
    `<svg data-die="4" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
 <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
 <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
 <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
 <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
</g>
</svg>`,
    `<svg data-die="5" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
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

const diceELs = [
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

diceELs.forEach(element => {
    let randomNUM = Math.floor(Math.random() * diceArr.length)
    element.innerHTML = questionmarkEL
});

const startRoll = (firstIndex) => {
    
    diceELs.forEach(element => {
        if(element.getAttribute('rolling') == 'false'){
            let randomNUM = Math.floor(Math.random() * diceArr.length)
            element.innerHTML = questionmarkEL
            firstIndex = 0
        }
    });
    document.querySelector('#btn-roll').removeEventListener('click', startRoll)
    let timer = setInterval(() => {
        // console.log(diceELs[firstIndex].children[0])
        let opacityLVL = ((diceELs[firstIndex].children[0].style.opacity * 50) + 1) / 50
        if(opacityLVL >= .7){
            if(diceELs[firstIndex].getAttribute('rolling') == 'false'){clearInterval(timer)}
            diceELs[firstIndex].children[0].style.opacity = .7;
            diceELs[firstIndex].children[1].classList.add('fill-yellow-200','opacity-100')
            startRotation(firstIndex); clearInterval(timer)
        }
        diceELs[firstIndex].children[0].style.opacity = opacityLVL
    }, 10);
    let wait = setInterval(() => {
        let nextIndex = firstIndex + 1
        if(nextIndex > diceELs.length-1){return}
        startRoll(nextIndex)
        clearInterval(wait)
        
    }, 100);
}

const startRotation = (index) => {
    if(index >= diceELs.length-1){activateDICE()}
    let deg = 0
    let timer = setInterval(() => {
        deg += 10
        if(diceELs[index].getAttribute('rolling') == 'false'){
            diceELs[index].removeEventListener('click', freezeDieEL)
            clearInterval(timer)
            diceELs[index].children[0].style.transform = `rotate(0deg)`
            console.log(diceELs[index].children[0].style.transform )
        }
        if(deg >=360) {deg = 1}
        diceELs[index].children[0].style.transform = `rotate(${deg}deg)`
        
    }, 1);
}

const activateDICE = () => {
    diceELs.forEach(element => {
        element.addEventListener('click', freezeDieEL = (e) => {
            if (e.target.classList.contains('dice')) {
                let refreshEnabled = true
                let number = Math.floor(Math.random() * diceArr.length)
                e.target.innerHTML = diceArr[number];
                e.target.setAttribute('rolling', 'false');
                if(number === 0 || number === 4){e.target.children[0].classList.add('fill-yellow-300')}
                else {e.target.children[0].classList.add('fill-zinc-700')}
                let triple = 0
                diceELs.forEach(element => {
                    if(element.getAttribute('rolling') == "true"){ refreshEnabled = false }
                    if(parseInt(element.children[0].getAttribute('data-die')) == number){triple++}
                });
                console.log(triple)
                if(triple >= 3){
                    diceELs.forEach(element => {
                        if(element.children[0].getAttribute('data-die') == number){console.log(element.children[0]); element.children[0].classList.add('fill-purple-300')}
                    });
                }
                if(refreshEnabled === true){

                    let rollBtnEL = document.querySelector('#btn-roll')
                    let stayBtnEL = document.querySelector('#btn-stay')
                    // rollBtnEL.style.opacity = .8
                    // stayBtnEL.style.opacity = .8
                    
                    rollBtnEL.addEventListener('click', startRoll)
                }
            }

        })
    });
    let timer = setInterval(() => {
        diceELs.forEach(element => {
            element.children[0].classList.add('border-yellow-100')
        });
        clearInterval(timer)
    }, 10);
}

startRoll(0)


// const diceAnim = () => {
//     let rollBtnEL = document.querySelector('#roller-svg')
//     console.log(rollBtnEL)
//     let num = 0
//     let timer = setInterval(() => {
//         num++
//         // console.log(num)
//         if(num > 359){num = 0}
//         rollBtnEL.style = `transform: rotate(${num}deg)`
//     }, 1);
// }
// diceAnim()