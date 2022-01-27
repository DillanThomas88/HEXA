if(playerDataCopy.version === 1.1 && playerDataCopy.version !== currentVersion){
    
    playerDataCopy.user.playCount = 0
    playerDataCopy.user.round = []

    playerDataCopy.version = 1.2
    swapUpdateLocalStorage()
}