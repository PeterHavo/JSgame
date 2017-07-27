//import generator
let faker = require('faker');




App = {
    games: [`duel`, `twist`, `tretia`]

}



const batting =  parseInt(process.argv.splice(2)[0]);
















//generating player
const generatePlayers = () => (
    {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    streetAddress: faker.address.streetAddress(),
    country: faker.address.country(),
    credit: Math.floor(Math.random() * (200 - 0) + 0 ),
    betLimit: Math.floor(Math.random() * (100 - 0) + 0 ) ,
    dreamWin: 0,
    gameCredit:0,
    winner: false,
    finishRound1: false,
    finishRound2: false

});
//generate players array base on limit 
const playerArray = (numOfPlayers) => {
    let counter = 0;
    const Players = [] ;
    while (counter < numOfPlayers) {
        Players.push(generatePlayers());
        counter ++;
    }
    return Players;
};
// check if in array are 8 players after game evaluation 
        // const is8Players = (array, callback) => { 
        //     console.log(`initial array length is ${array.length}`);

            
        //     if (array.length <  8 && array.length >= 0 ) {
        //         console.log(`array length is true: ${array.length}`);
        //         array.push(generatePlayers);
        //         console.log(`after pushing in to array there are ${array.length} members `);
        //         is8Players(array);
            
        //     } else {
        //         array.map(player => { checkCredit(player)});
        //         console.log(`array length OK 8  : ${array.length}`);
                
        //     }

            
        // };

const checkCredit = (arr) => {
    arr.map((player, key) => {
        if (player.credit == 0) {

            console.log(`credit is 0 you wiil drop a game `);
            // arr.splice(key, 1);


        } else {
            console.log(`credit is OK`);
        }
    });
        
    return arr;
};




const randomShuffle = (array) => {
    return new Promise ((res, rej) => {
        var i = 0, j = 0 , temp = null;

            for (i = array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            
            
            }
  res(array);

    });
};

const randomArrShuffle = (array) => {
    var i = 0, j = 0 , temp = null;

            for (i = array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    return array;        
}

const accumulateCredit = (array) => {
    let bank = 0;
    array.map(el => { 
        if (el.finishRound1 == false) {
            bank += el.betLimit;
        }
    });
    console.log(bank);
}

const moduleDef = () => {
    console.log('This comes from partials universe');
}

const P2 = (array) => {
    return new Promise ((res, rej) => {
        let bank = 0;
        array.map(el => {
            if (el.finishRound1 == true ) {
                bank += el.betLimit;
            }
        });
        res(bank);
    });
};

const makeWinner = (array) => {
   
        var arrayCalc = array;
         for (var i = 0; i <= 4; i++) {
        arrayCalc[i].finishRound1 = true;
    }
    return arrayCalc ; 

    
};




const players = playerArray (8);

class test {
    constructor(){
        this.array = [1];
    }
}
let testt = new test()
const tmP = new Promise ((res, rej) => {
    res([1,2,3,4]);
})

tmP.then(arr => testt.array = arr);

// setTimeout(()=>{console.log(testt.array)}, 4000)

module.exports.get = players;
module.exports.checkCredit = checkCredit;
module.exports.reduce = randomShuffle;
module.exports.winners = makeWinner;
module.exports.shuffle = randomArrShuffle;

// export {method1, method2, method3 }
// export default Class 
// import myClass,  {method1, method2, method3 } from zdroj


// let object = new Map();
// object.set("name", "Havo");
// object.set("age", 17);
// for (let [key, val] of object) {
//     console.log(`key is ${key} value ${val}`);
// }

 class Main  {
    constructor (array) {
        this.array = array;
        this.check = true;
    }

    checkArray () {
    console.log(`array length is ${this.array.length}`);
    if (this.array.length < 8){
        this.check = true;
            }
    else 
            {
                this.check = false;
            }
    }
 
    getCurretCheck () {
        console.log(this.check);
    }
    
    increment () {
        this.array.push(Math.floor(Math.random()*10));
    }
}

// const testObj = new Main ([1,2,3,4]);
// while (testObj.check == true) {
// testObj.checkArray();
// testObj.getCurretCheck();
// testObj.increment();
// testObj.checkArray();
// testObj.getCurretCheck();
// }


const checkMate = (truefalse) => {
    if (truefalse == true) {
        console.log(`callback`);
    } 
    else
    {
        console.log(`false`);
    }
   
}

const findDuplicates = (array) => {
   array.filter((item, pos, arr) => {
       console.log(`current position is ${pos}`)
    checkMate(pos == arr.indexOf(item));
    });
    
};


// console.log(findDuplicates([1,2,3,4,5,8,9,8]));

