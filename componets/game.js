module.exports = class Game {
    constructor( ){
        
        this.players = [];
        this.nameGame = Math.floor(Math.random() * (100 - 1 )) + 1;
        this.gameControlers = {

            startGame: this.gameStart,
            joinGame: this.joinGame,

        }
        
    }

   
    joinGame (player) {
        this.players.push(player);
        console.log(`Player with details: ${JSON.stringify(player)} join game with name ${this.nameGame} number of current playing players is ${this.players.length}`);
    }
    
    leaveGame (player) {
        this.players.pop(player);
        console.log(`Player with details: ${JSON.stringify(player.playerDetails)} left game with name ${this.nameGame} number of current playing players is ${this.players.length}`);
    }

    gameStart (options, playersArray,callbackGameLogic) {
        console.log(`game just start`);
        
    }

    gameEnds(){
        console.log(`game ends `);
    }

}
