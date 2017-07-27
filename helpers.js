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

module.exports = {
    faker: faker,
    generatePlayers: generatePlayers
}