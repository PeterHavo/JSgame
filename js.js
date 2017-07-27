
// var App = {
//     initialArray:[1,2,3,4,5,6],
//     find: callback
// }






// function callback (a){
//    var max = a.reduce(function(c, b) {
//     return Math.max(c, b);
// });
//     // 
//     return max;
// }

// class App1  {
//     constructor(initialArray, callback){
        
//         this.initialArray = initialArray;
//         this.find = callback;
//         this.result = 0;
       
// }
//  logItem (a){
//      var max = a.reduce(function(c, b) {
//     return Math.max(c, b);
//         });
//     // 
//     console.log(max)
//     return max;
//  }

    
// }

// const test = new App1(App.initialArray, callback);
// test.logItem(test.initialArray)
// callback(App.initialArray)


// function findSmallestNum(strArray, logValue) {
//     var max;
//     max =  strArray.reduce(function(a,b){
//            return Math.max(a,b)
//     })
//    logValue (max);
// }
//  function logValue (a) {
//      console.log(a)
//  }







// let testObj = App.find(App.initialArray, logValue)
// // console.log(testObj)

class Game {
    constructor( ){
        this.nameGame = Math.floor(Math.random() * (100 - 1 )) + 1;
    }

    joinGame(){
        console.log(`you joinGame ${this.nameGame}`);
    }

    gameStart () {
        console.log(`game just start`);
    }

    gameEnds(){
        console.log(`game ends `);
    }

}


class Player {
    constructor(credit, games, gameLimit) {

    }

    insertMoney(){
        console.log(`insert money`);
    }

    chooseGame(){
        console.log(`choose game`);
    }

    batLimit(){
        console.log(`bat Limit`);
    }



}

const addNum = (a) =>{
    let n = a ; 
  
    while (a > 0 ) { 
        a -- ; 
        n += a 
        
    }
    console.log(`current n is ${n}`)
}




 function checkprimenumber(n){
        for (c=2; c<=n - 1; c++){
            if ( n%c == 0 ){
                console.log(`false`)
            return false;
        }
            return true;
        }
}


checkprimenumber(8);