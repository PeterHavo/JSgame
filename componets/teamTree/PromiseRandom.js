const players = require('./partial');


const pipe = new Promise ((resolve, reject) => {

    resolve([1,2,3,4,5,6]);
});




// return4unique(players.get, 4).then((arr) => { console.log(arr)});

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j];
    array[j] = temp;
  
   
  }
  return array;

}

const P2 = (array) => {
    return new Promise ((res, rej) => {
        var i = 0
        , j = 0
        , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j];
    array[j] = temp;
  
   
  }
  res(array);

    })
}


pipe.then((P2)).then(newarr => console.log(newarr))



var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
}


