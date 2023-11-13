// code your solution here
function saturdayFun(activity = 'roller-skate'){
    let response = 'This Saturday, I want to';
    return (`${response} ${activity}!`)
}

function mondayWork(activity = 'go to the office'){
    let response = 'This Monday, I will';
    return (`${response} ${activity}.`)
}

function wrapAdjective(flair = "*"){ 
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}