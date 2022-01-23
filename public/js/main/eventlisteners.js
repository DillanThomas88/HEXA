const activateReRollBtn = (arr) => {
    // console.log(arr)
    refreshbtn.addEventListener('click', wipeadnRoll = (e) => {
        let target = e.target
        target.removeEventListener('click',wipeadnRoll)
        target.children[0].classList.add('fill-zinc-300')
        target.children[0].classList.toggle('fill-zinc-200')
        if(target.classList.contains('animate-pulse')){

            target.classList.toggle('animate-pulse')
        }
        refreshbtn.classList.toggle('opacity-10')
        // console.log(target)
        // console.log(arr)
        rerollThis(arr)
    })
    refreshbtn.classList.toggle('opacity-10')
    refreshbtn.classList.toggle('animate-pulse')
    refreshbtn.children[0].classList.toggle('fill-zinc-300')
    refreshbtn.children[0].classList.add('fill-zinc-200')
}