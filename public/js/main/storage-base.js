let playerDataCopy = {}

if(!window.localStorage.getItem('user-data')){
    let achievementList = newUserSetUp();
    window.localStorage.setItem('user-data', JSON.stringify(achievementList));
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
} else {
    
    playerData = JSON.parse(window.localStorage.getItem('user-data'));
    playerDataCopy = JSON.parse(JSON.stringify(playerData));
}
appendAll();


const swapUpdateLocalStorage = () => {
    window.localStorage.setItem('user-data', JSON.stringify(playerDataCopy));
    playerDataCopy = JSON.parse(JSON.stringify(playerData));
}
