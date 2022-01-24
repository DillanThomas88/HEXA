const activateReRollBtn = (arr) => {
    // console.log(arr)
    isRefreshActivated = true
    refreshbtn.addEventListener('click', wipeadnRoll = (e) => {
        toggleRefreshBtnContent( arr)
    })
    refreshbtn.classList.toggle('opacity-10')
    refreshbtn.classList.toggle('animate-pulse')
    refreshbtn.children[0].classList.toggle('fill-zinc-300')
    refreshbtn.children[0].classList.add('fill-zinc-200')

}

function toggleRefreshBtnContent( arr) {
    isRefreshActivated = false

    refreshbtn.removeEventListener('click', wipeadnRoll)
    refreshbtn.children[0].classList.add('fill-zinc-300')
    refreshbtn.children[0].classList.toggle('fill-zinc-200')
    if (refreshbtn.classList.contains('animate-pulse')) {
        
        refreshbtn.classList.toggle('animate-pulse')
    }
    refreshbtn.classList.toggle('opacity-10')
    // console.log(target)
    // console.log(arr)
    rerollThis(arr)

    
}

