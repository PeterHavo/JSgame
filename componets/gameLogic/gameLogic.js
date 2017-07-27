
let playersArray = [1,2,3,4,5,6,7,8,10];
let options = {numOfRounds:4}
let firstGamePlayers = [{playerDetails:{id:1, credit:2}},{playerDetails:{id:2, credit:200}},{playerDetails:{id:3, credit:300}}];

//function for ga,e joinGame to generate players (using Player class)
const players = () => playersArray;
const firstGame = (firstGamePlayers) => {
    let min = 0;
    let max = firstGamePlayers.length;
    let randomPlayer =  Math.floor(Math.random() * (max - min)) + min;
    return firstGamePlayers[randomPlayer];
    
   

};



const secondGame = () => {}

const playersDetails = (firstGamePlayers) => {
    
    firstGamePlayers.map((player) => { console.log (JSON.stringify(player.playerDetails))})
};


 let winer = new Promise ((resolve, reject ) => {
    setTimeout(()=> {
        
       resolve( );
    }, 1000);

})

// winer.then(function(value){
    
//    return value ;
// }).then(value => console.log(`new value is ${value}`))

// winer.then(players).then((playersarray)=> console.log(`players array is : ${playersarray}`));

// console.log(firstGame(playersArray));

// playersDetails(firstGamePlayers);

// console.log(firstGame(firstGamePlayers));






