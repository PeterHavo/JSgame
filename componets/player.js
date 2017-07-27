//readline

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//faker 

let faker = require('faker');

const generatePlayers = () => (
    {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    streetAddress: faker.address.streetAddress(),
    country: faker.address.country(),
    credit: 100,
    betLimit: Number(0)

});


const virtualPlayer = generatePlayers();



module.exports = class Player {

    constructor(virtualPlayer )
        {
        
        this.winner = false;
        this.playerDetails = virtualPlayer;
        this.playerControler = {
            playerDetails: this.playerInfo
        };
        

    }


    playerInfo () {

        console.log(`Player details: ${JSON.stringify(this.playerDetails)}`)

    }

    insertMoney(){
                rl.question('How much money would you like to bet ', (answer) => {
                console.log(`you have bet  ${this.playerDetails.betLimit + parseInt(answer)} money`);
                this.playerDetails.betLimit += parseInt(answer);
                rl.close();
        });
    }

    chooseGame(){
        console.log(`choose game`);
    }

    batLimit(){
        console.log(`bat Limit`);
    }

   

};



class Player {

    constructor(virtualPlayer )
        {
        
        this.winner = false;
        this.playerDetails = virtualPlayer;
        this.playerControler = {
            playerDetails: this.playerInfo,
            info: this.printInfo
        };
        

    }


    playerInfo () {
        
        return this.playerDetails;

    }

    printInfo () { 
        console.log(this.playerInfo());
    }

    insertMoney(){
                rl.question('How much money would you like to bet ', (answer) => {
                console.log(`you have bet  ${this.playerDetails.betLimit + parseInt(answer)} money`);
                this.playerDetails.betLimit += parseInt(answer);
                rl.close();
        });
    }

    chooseGame(){
        console.log(`choose game`);
    }

    batLimit(){
        console.log(`bat Limit`);
    }

   

}
// var player = new Player (virtualPlayer);


// console.log(`player object properties are: ${Object.getOwnPropertyNames(player).sort()} player generated detaisl are ${JSON.stringify(player.playerDetails)}`); 
// console.log(`------------`);




