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
    getAllTotalsAndChance()
    window.localStorage.setItem('user-data', JSON.stringify(playerDataCopy));
    let timer = setInterval(() => {
        playerDataCopy = JSON.parse(JSON.stringify(playerData));
        clearInterval(timer)
    }, 100);
}


const getAllTotalsAndChance = () => {
    let {saved, standard, special} = playerDataCopy
    let {hexa, penta, quad, triple} = standard

    let arr = [special,hexa,penta,quad,triple]

    for (let i = 0; i < arr.length; i++) {
        const parents = arr[i];
        for (let j = 0; j < parents.length; j++) {
            const element = parents[j];
            element.fact = `${((element.total/allTotals)*100).toFixed(2)}%`
            console.log(element);
            
        }
    }

}
