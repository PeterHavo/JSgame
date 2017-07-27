
const check = require('./partial');
const players = require('./partial');

const reduce = require('./partial');
const winers = require('./partial');
const shuffle = require('./partial');




class Game {
    constructor(players) {
        this.gamePlayers = players;
        this.gameRounds = 0; 
        this.gameBank = 0;
        this.round1 =[];
        
    }

startGame() {
    console.log(`game started at ${Date.now()}`);
    }
    
 gameRound (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].finishRound1 = false;
      }
     console.log(`name before shuffling ${array[0].name}`);
     shuffle.shuffle(array)
     console.log(`name after shuffling ${array[0].name}`);

     var arrayCalc = array;
     console.log(`arrayclac name fisrt is ${arrayCalc[0].name}`)
         for (var i = 0; i < array.length/2; i++) {
        arrayCalc[i].finishRound1 = true;
    }
    console.log(`array lenght after round ${arrayCalc.length}`)
    return arrayCalc ; 

 }

makeWinnerRound (array) {
    var arrayCalc = array;
    let winners = [];
    let counter = 0;
         for (var i = 0; i < array.length/2; i++) {
        arrayCalc[i].finishRound1 =  true;
        counter ++ ;
        
    }
    arrayCalc.map((item, pos) => {
        if (item.finishRound1 == true) { winners.push(item)}
    })
    console.log(`there are ${counter} winners`);
    console.log(winners)
    // return arrayCalc ; 
    return winners ;
}


getLoserBet2GameBank (array){
    array.map(player => {
        if (player.finishRound1 == false){
            this.gameBank += player.betLimit;
            player.betLimit = 0;
        }
    });
    console.log(`current bank in game is ${this.gameBank} `);
    return array;
}

gameRound2 (array) {
    let winnersArr = [];
    let temp = [];
    
    array.map(player => {
        if (player.finishRound1 == true) {
            winnersArr.push(player);
        }
    });

    array.filter(player => {
       return player.finishRound1 == true;
    }).
    map(player => { 
        temp.push(player);
    });
    console.log(`Name before shift winer array first person name is ${temp[0].name}`);
    console.log(shuffle.shuffle(temp));

   
    return winnersArr.length;
}

addBank2Credit (bank, player) {
    console.log(`winner credit before adding winners price ${winner.credit}`)
    winner.credit += bank;
    console.log(`winner credit after winners price ${winner.credit}`)
}
checkDreamWin (player) {
    if (player.dreamWin == player.gameCredit) {
        console.log(`player hit dream win !!`);
        return true;
    }
    else {
        console.log(`player did not hit dreamwin`);
        return false;
    }
}

}

const game1 = new Game(players.get);
game1.startGame();
var  temp = (game1.makeWinnerRound(game1.gameRound(game1.gamePlayers)))
// console.log(game1.gameRound2(game1.getLoserBet2GameBank(game1.makeWinnerRound1(game1.gameRound1(game1.gamepLayers)))));
game1.makeWinnerRound((game1.gameRound(temp)));