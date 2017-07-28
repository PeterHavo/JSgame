
const check = require('./partial');
const players = require('./partial');

const reduce = require('./partial');
const winers = require('./partial');
const shuffle = require('./partial');
const pl = require('./partial');




// Load the full build. 
var _ = require('lodash');

class Game {
    constructor(players) {
        this.gamePlayers = players;
        this.gameRounds = {
            counter: 0,
            round1: [],
            round2: [],
            round3: []
        }; 
        this.gameBank = 0;
        
        
    }

startGame() {
    console.log(`game started at ${Date.now()}`);
    }
    
 gameRound (array) { 
     //keep track of rounds caunter
      
     //make sure each round all players fiishRound1 false   

      for (var i = 0; i < array.length; i++) {
        array[i].finishRound1 = false;
      }
    //update gameRounds object with original players for calculation in last round
      this.gameRounds.round1 = array;
      //chceck if shuffle method is working this just check 
     console.log(`before randomizing round winner  ${this.gameRounds.round1[0].name}`)
     var arrayCalc = _.shuffle(this.gameRounds.round1);
     console.log(`after randomizing round winner  ${arrayCalc[0].name}`);
   
         for (var i = 0; i < array.length/2; i++) {
        arrayCalc[i].finishRound1 = true;
    }
    console.log(`array lenght after round: ${this.gameRounds.counter} is: ${arrayCalc.length} `);

    this.gameRounds.counter ++;


    return arrayCalc ; 

 }

makeWinnerRound (array) {
    var arrayCalc = array;
    let winners = [];
    for (var player of arrayCalc) {
        if (this.gameRounds.counter == 2 ) {
            player.finishRound2 = true;
        }
        else if (this.gameRounds.counter == 3)
        {
        //make a winner property to true 
        player.winner = true;   
        }
    }

    
    arrayCalc.map((item, pos) => {
        if (item.finishRound1 == true) { winners.push(item);}
    });
   
    console.log(`winners after round ${this.gameRounds.counter} are: ${JSON.stringify(winners)} `);
    // return arrayCalc ; 
    for (var pler of winners ){
        if (pler.winner == true) {
            console.log(`------------------game finished winner is ${pler.name}---------------------------`)
        }else 
        {
            console.log(`is not a winner`);
        }
    }
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

const game1 = new Game(pl.pl(8));
game1.startGame();
var  temp = (game1.makeWinnerRound(game1.gameRound(game1.gamePlayers)))
// // console.log(game1.gameRound2(game1.getLoserBet2GameBank(game1.makeWinnerRound1(game1.gameRound1(game1.gamepLayers)))));
game1.makeWinnerRound(game1.gameRound(game1.makeWinnerRound((game1.gameRound(temp)))));

// console.log(_.shuffle([1,2,3,4,5,6,7]));



