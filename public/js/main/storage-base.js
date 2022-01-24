let playerData = {}
let playerDataCopy = {}
let currentVersion = 0.2


if(!window.localStorage.getItem('user-data')){
    setUpNewAchievements();

} else {
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
    if(playerData.version != currentVersion){
        setUpNewAchievements()
    }
}

playerDataCopy = JSON.parse(JSON.stringify(playerData));


const swapUpdateLocalStorage = () => {
    window.localStorage.setItem('user-data', JSON.stringify(playerDataCopy));
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
    playerDataCopy = JSON.parse(JSON.stringify(playerData));
    let timer = setInterval(() => {
        appendAll()
        clearInterval(timer)
    }, 100);
}



function setUpNewAchievements() {
    let achievementList = newUserSetUp();
    achievementList.version = currentVersion
    window.localStorage.setItem('user-data', JSON.stringify(achievementList));
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
}


appendAll()

// console.log(playerDataCopy)