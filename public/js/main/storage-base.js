let playerData = {}
let playerDataCopy = {}
let currentVersion = 1.3


if(!window.localStorage.getItem('user-data')){
    setUpNewAchievements();

} else {
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
}

playerDataCopy = JSON.parse(JSON.stringify(playerData));


const swapUpdateLocalStorage = () => {
    if(playerDataCopy.user.availableTurns < turnCount){
        playerDataCopy.user.hasFinished = true
    }
    window.localStorage.setItem('user-data', JSON.stringify(playerDataCopy));
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
    playerDataCopy = JSON.parse(JSON.stringify(playerData));
    let timer = setInterval(() => {
        appendAll()
        clearInterval(timer)
    }, 100);
}

const admin = () => {
    if(playerDataCopy.user.userName === 'Admin'){
        return true
    } else { return false}
}

function setUpNewAchievements() {
    let achievementList = newUserSetUp();
    achievementList.version = currentVersion
    window.localStorage.setItem('user-data', JSON.stringify(achievementList));
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
}


appendAll()

updateUserInfoDaily(playerDataCopy)
if(playerDataCopy.user.finishedTutorial){
    document.querySelector('#game-container').classList.toggle('hidden')
} else {
    document.querySelector('#tutorial-container').classList.toggle('hidden')
    runTutorial()
}
if(!admin()){
    if(playerDataCopy.user.hasFinished === true){
        gameOver()
    } 
}else {
    playerDataCopy.user.round = []
    playerDataCopy.user.availableTurns = turnCount
    swapUpdateLocalStorage()
}
// console.log(playerDataCopy)