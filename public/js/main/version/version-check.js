

if(playerDataCopy.version === 1.2 && playerDataCopy.version !== currentVersion){
    
    playerDataCopy.user.highestDailyScore = 0
    playerDataCopy.game[0].desc = "Save a total of 2,500 in a day!"
    playerDataCopy.game[1].desc = "Save a total of 5,000 in a day!"
    playerDataCopy.game[2].desc = "Save a total of 7,500 in a day!"
    playerDataCopy.game[3].desc = "Save a total of 10,000 in a day!"
    playerDataCopy.game[4].desc = "Save a total of 12,500 in a day!"
    playerDataCopy.game[5].desc = "Save a total of 15,000 in a day!"
    playerDataCopy.game[6].desc = "Save a total of 17,500 in a day!"
    playerDataCopy.game[7].desc = "Save a total of 20,000 in a day!"
    playerDataCopy.game[8].desc = "Save a total of 22,500 in a day!"
    playerDataCopy.game[0].amount = 2500
    playerDataCopy.game[1].amount = 5000
    playerDataCopy.game[2].amount = 7500
    playerDataCopy.game[3].amount = 10000
    playerDataCopy.game[4].amount = 12500
    playerDataCopy.game[5].amount = 15000
    playerDataCopy.game[6].amount = 17500
    playerDataCopy.game[7].amount = 20000
    playerDataCopy.game[8].amount = 22500



    playerDataCopy.version = currentVersion
    swapUpdateLocalStorage()
} if(playerDataCopy.version < 1.2){
    window.localStorage.removeItem('user-data')
    location.reload()
}