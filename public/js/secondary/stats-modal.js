const bodyEL = document.querySelector('body')
const statsEL = document.querySelector('#btn-stats')
const statsClose = document.querySelector('.stats-modal-close')
const overlay2 = document.querySelector('.stats-modal')




function statsModal() {
    // toggleModal(overlay2)
    overlay2.classList.toggle('hidden')
}

statsEL.addEventListener('click', statsModal)
statsClose.addEventListener('click', statsModal)
// createStatsOverlay()

