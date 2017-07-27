
// will be necessary to use promises or observables 

//Import dependesies
let Player = require('./componets/player.js') ;
//Import faker generator players
let faker = require('faker');
let generator = require('./helpers').generatePlayers;
let Game = require('./componets/game');


// start APP - GAME 
class APP {
    constructor ( Game, Player) {
        this.game = Game;
        this.player = Player;
        this.gamesList = [];
    }

    generatePlayers(numOfPlayers){

        for (var i = 0; i < numOfPlayers; i++){
            this.gamesList.push(this.player);
        }
        console.log(`Following players joined the game ${this.gamesList}`);
    }

    startGame () {

        // Game.gameStart (this.player);

    }   
}




var testPlayer4 = generator();
const player1 = new Player(testPlayer4);

// console.log(Object.getOwnPropertyNames(player1).sort()); 
const Game1 = new Game ();

// console.log(JSON.stringify(Game1));
// console.log(`------------GAME start----------------`)
// setTimeout(()=> Game1.joinGame(player1), 2000);
// setTimeout(()=> Game1.leaveGame(player1), 2000);
// setTimeout(()=> player1.insertMoney(), 2000);


//working one 
// Game1.gameStart();
// Game1.gameControlers.startGame();
//     const hra = new APP (Game1, player1);

var testPlayer4 = JSON.parse('{"id":"101e30c6-3028-40c8-a343-5ee4be54f5fa","name":"Jillian Kuhic","email":"Astrid.Gerlach76@yahoo.com","streetAddress":"6857 Welch Bypass","country":"Philippines","credit":100,"betLimit":0}')
console.log(`Test player ${JSON.stringify((testPlayer4))}`);
const test = player1.playerDetails;

console.log(`${player1.playerControler.info}`);
let generatedPlayer = player1.playerDetails;
// console.log(`type of generateted var player is ${typeof(testplayer4)}`)
// console.log(testPlayer4);

   








 

