const activateReRollBtn = (arr) => {
    // console.log(arr)
    refreshbtn.addEventListener('click', wipeadnRoll = (e) => {
        let target = e.target
        target.removeEventListener('click',wipeadnRoll)
        target.children[0].classList.add('fill-zinc-300')
        target.children[0].classList.toggle('fill-zinc-200')
        refreshbtn.classList.toggle('opacity-10')
        // console.log(target)
        // console.log(arr)
        console.log(arr.length)
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.removeEventListener('click', freezeDieEL)
            // debugger
            removeAllChildNodes(element);
            element.classList.toggle('dice-activated')
            element.toggleAttribute('rolling')
        }
        startNewRoll(arr)
    })
    refreshbtn.classList.toggle('opacity-10')
    refreshbtn.children[0].classList.toggle('fill-zinc-300')
    refreshbtn.children[0].classList.add('fill-zinc-200')
}