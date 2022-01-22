const bodyEL = document.querySelector('body')
const statsEL = document.querySelector('#btn-stats')
const statsClose = document.querySelector('.stats-modal-close')




function statsModal() {
    
    const overlay = document.querySelector('.stats-modal')
    // overlay.classList.toggle('pointer-events-none')
    overlay.classList.toggle('hidden')
}

statsEL.addEventListener('click', statsModal)
statsClose.addEventListener('click', statsModal)
// createStatsOverlay()

