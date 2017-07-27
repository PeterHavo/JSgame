//import generator
let faker = require('faker');

//using node js prompt module
 var prompt = require('prompt');
 

//import console input
const readline = require('readline');
//configure console input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


class game {
    constructor(players) {
        this.Game = this.start;
        this.Game.players = players;
        this.controllers = {};
    }

    start (){

        console.log(`game start with first player${JSON.stringify(this.Game.players[0])}`);
             this.Game.players.map((player) => { 
                console.log(`players name | ${player.name}`)
                return player.name;
            });
    }


    

    start2 (){
                const welcome = (a) => {
                    a.map((player)=> {
                        console.log(`Welcome Player: ${player.name}  | with id: ${player.id} | with email: ${player.email} | with streetAddress: ${player.streetAddress} `);
                            return player.name;
                    });
                };


        let pipeline = new Promise ((resolve, reject) => {
            resolve(this.Game.players);

        });
        // console.log(` after first pipe ${JSON.stringify(arrayPlayers)}`)
        pipeline.then( (players) => { welcome(players);});
        // pipeline.then( (players) => { callback(players);});
    }


    start3 (welcome, players8Array,setBet){
          let pipeline = new Promise ((resolve, reject) => {
            resolve(this.Game.players);

        });

        pipeline.then((players) => { welcome(players);}
        ).then((players) => { console.log(players.allPlayers);
         
            players.map(player => console.log(`hello ${player.name}`))
        }).catch((error) => {console.log(error.message)});
        // .then((players8array) => { setBet(players8Array);});
    }

    start4 (){
         let pipeline = new Promise ((resolve, reject) => {
            resolve(this.Game.players);
        });
        
        pipeline.then((array) => {  
           
            var random8Players = [];
            var max = array.length ;
            var min = 0;
            var counter = 0;
                    (() => {  while (counter < 8 ) {
                    
                        random8Players.push(array[Math.floor(Math.random() * (max - min)) + min ]);
                
                        counter ++;
                    }})();
          
            return random8Players;
        }).then((random8Players) => { 
            // var aValue = pipeline.value();
             random8Players.map((player) => console.log(`Welcome in DUEL GAME is ${random8Players.length} | players were randomly picked up ! :  ${player.name} | ${player.email} | with current credit ${player.credit}`));
             return random8Players;
          
            }).then((playersRound1)=>{
                var playersRound2 = [];
                var bank = 400;
                var max = playersRound1.length;
                var maxRound = max/2;
                var min = 0;
                var counter = 0;
               
                

                       

                        (() => {  while (counter < maxRound ) {
                          
                            var random = Math.floor(Math.random() * (max - min)) + min ;
                           
                            playersRound2.push(playersRound1[random]);


                             

                            counter ++;

                         }})();
                         (() => {
                         var counter = 0;
                                while(counter < 4 ) {
                                    
                                    console.log(`Test-------------------------------- `);
                                    counter ++;
                         }
                        
                         }) ();
                    //make players winners
                     //assign to credit from losers
               
                  playersRound2.map((player)=>{ 
                      console.log(`${player.name}`);
                     player.winner=true;
                     if (player.winner){
                         console.log(`player credit is ${player.credit}`);
                         player.credit += bank ;
                         console.log(`after credit added credit is ${player.credit}`);
                     }
                     
                 });
               
                console.log(`Length of new array is ${playersRound2.length} as follows ${JSON.stringify(playersRound2)}`);
            return playersRound2;    

            });
         
            
          
    }

    get Info (){
        
     return this.retrieveInfo();
    }

    retrieveInfo (){
        
        return this.players.length;
    }

}



// -----------------------------------------------------------------------------------------------Helper functions -------------------------------------------------------------------------------------------




const random = () => {
    return Math.floor(Math.random() * (10 - 2)) + 2;
};
//-------------------------------------------------------------------------------------------------------------

const random2 = () => {
    return Math.floor(Math.random() * (10 - 0)) + 0;
};

const randomVariable = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

//-------------------------------------------------------------------------------------------------------------

const generateArray= (playerGeneratorFn, limit, random2) => {

    var i = 0;
    var generatedArray = [];
    var ctcPlayArr = [];
    var playerGen = playerGeneratorFn;
    //verify if object is array 
    // console.log(`typeof inicial array is ${typeof(generatedArray) } array is Array method ${Array.isArray(generatedArray)}`);
            while (i < limit){
                var player = playerGen();
                generatedArray.push(random2());
                ctcPlayArr.push(player);
                i++;
            }
    
    return ctcPlayArr;

};

const generatePlayers = () => (
    {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    streetAddress: faker.address.streetAddress(),
    country: faker.address.country(),
    credit: 100,
    betLimit: Number(0),
    winner: false

});


//-------------------------------------------------------------------------------------------------------------

 const viewPlayers = ( array ) => {
     var arrayIn = array;
       arrayIn.map((player)=>{

       });
 };

//-------------------------------------------------------------------------------------------------------------
// pickup player randomly from array use same function multiplay by 2 to get second round 
const pickupPlayer = (array) => {
    var max = array.length ;
    var min = 0;
    var counter = 0;
    while (counter < 8 ) {
        console.log(`Min Max : ${Math.floor(Math.random() * (max - min)) + min}`);
        counter ++;
       return Math.floor(Math.random() * (max - min)) + min; 
       

    }
};

//-------------------------------------------------------------------------------------------------------------
// JavaScript function to get a random item from an array.

const randomItemArray = (array) => {
    return array[Math.floor(Math.random() * array.length )];
};


//-------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------

var startPromise = new Promise((resolve, reject) => {

    resolve (1)

} );

const print = (a) => {
    console.log(`the velue is ${a}`);
};

// startPromise.then(print);



//-------------------------------------------------------------------------------------------------------------
const welcome = (a) => {
  var allPlayers = [ ];  
  var transformObject = {};
  a.map((player)=> {
      console.log(`Welcome in game DUEL  Player: ${player.name} | with id: ${player.id} | with email: ${player.email} | with streetAddress: ${player.streetAddress} | `);
      allPlayers.push(player);
    //   return player;
  });
  console.log(`type of all players array is ${typeof(allPlayers)} `);
  console.log(`is array : ${Array.isArray(allPlayers)}`);
  console.log(`type of transform Object is ${typeof(transformObject)}`);

  return {allPlayers: allPlayers,
          sometext: 'textTest'  };
};


// welcome([{name:'Peter'}]);

//-------------------------------------------------------------------------------------------------------------

const welcome2 = (a) => {
  var allPlayers = [ ];  
  var transformObject = {};
  a.map((player)=> {
      console.log(`Welcome in game DUEL  Player: ${player.name} | with id: ${player.id} | with email: ${player.email} | with streetAddress: ${player.streetAddress} | `);
      allPlayers.push(player);
    //   return player;
  });
  console.log(`type of all players array is ${typeof(allPlayers)} `)
  console.log(`is array : ${Array.isArray(allPlayers)}`);
  console.log(`type of transform Object is ${typeof(transformObject)}`)

  return {allPlayers: allPlayers,
          sometext: 'textTest'  };
};


//-------------------------------------------------------------------------------------------------------------
// pickup 8 players from all players 

const pickup8Players = (array) => { 
   var players8Array = [];
        for (var i = 0; i < 8 ; i++){
            players8Array.push( array[Math.floor(Math.random() * array.length )] );
        }
    console.log(`Following 8 Players randomly picked up : ${JSON.stringify(players8Array)}`);
    return players8Array;
};


//-------------------------------------------------------------------------------------------------------------

const setBet = (players8Array) => { 
    players8Array.map((player) => { 
            rl.question('What do you think of Node.js? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.close();
            });
    })
}


//-------------------------------------------------------------------------------------------------------------
//                                                      chaining promises as asyn calls !!!

let isWinner = true;
const pipe = new Promise((resolve, reject) => {
    var winer = {
        name: 'tinka',
        mainprice: 1000,
        winGame: true,
        credit: 0
    };
    if (isWinner) {resolve(winer);}
    else {
    let reason = new Error(' you are not winner');
    reject(reason);
    }
    
});


const pipe2 = (winer) => {
  console.log(`hello winner ${JSON.stringify(winer)}`);
  if (winer.winGame ){
      winer.credit = 100;
     
  }
  return Promise.resolve(winer)
  
};



// pipe.then(result => console.log(result))

// pipe.then(pipe2).then(winnercredit => console.log(`Winner won credit in value as ${winnercredit.credit} player ${JSON.stringify(winnercredit)}`))



//-------------------------------------------------------------------------------------------------------------


// pickup8Players(generateArray(generatePlayers, 100, random2));




//-------------------------------------------------------------------------------------------------------------

// console.log(random())
// var control = new game (generateArray(generatePlayers, 100, random2));


// console.log((generatePlayers()));
//  console.log(generateArray(generatePlayers, 100, random2));


//----------------------WORKING START GAME---------------------------
// let game1 = new game (generateArray(generatePlayers, 100, random2));
// game1.start2();

//  game1.start3(welcome);





//------------------------------------------------TESTING ZONE------------------------------------


// let game1 = new game (generateArray(generatePlayers, 100, random2));
//  game1.start3(welcome, pickup8Players);

// const test =  welcome(generateArray(generatePlayers, 100, random2));
















// winer.then(function(value){
    
//    return value ;
// }).then(value => console.log(`new value is ${value}`))

// winer.then(players).then((playersarray)=> console.log(`players array is : ${playersarray}`));


// pickupPlayer([1,2,3,4]);

// console.log(randomItemArray([1,22,32,4]));

// const testPromise = new Promise (function (resolve, reject){

//     resolve(generateArray(generatePlayers, 100, random2));

// });

// testPromise.then((array) => {
//     console.log(`tyoe of object pass is ${typeof(array)} is ARRAY > ${Array.isArray(array)}`)
//     return array;}).then((returnArray) => {
//         let arrayTest = [];
//         arrayTest.push(returnArray[0]);
//         arrayTest.push(returnArray[1]);
//         console.log(arrayTest);
//         return arrayTest;
//     })
//     .then((reducedArray) => { 
//         reducedArray.map( (player) => {
//             console.log(`------------------------------`);

           
//         }) ;
//     });


let game1 = new game (generateArray(generatePlayers, 100, random2));
// console.log(game1.Game.players);

game1.start4();