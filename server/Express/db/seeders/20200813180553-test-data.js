'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const users = await queryInterface.bulkInsert('Users',
    [
      {
      username: 'Demo',
      email: 'demo@email.com',
      hashed_password: bcrypt.hashSync('password'),
      }
  
      ],
        {returning:true});

    
    const areas = await queryInterface.bulkInsert('Areas', 
    [
      {
        name: 'Austin Area',
        description: "Have you ever thought to yourself: 'Gosh, I'd love to live in a city with great live music, tacos for breakfast, over 100 boulder problems and sport routes less than a mile from your office, spring fed pools at a year round 65 degrees, eccentric locals, thirty million college students, traffic as far as the eye can see at all times, homeless people at every light, 400 days a year of 100+ degree weather and 85% humidity, rain only on the weekends, all the crags are secret, or on on private land, or are prone to collapsing on a massive scale at any given time, and/or made of a rock type that has a frictional coefficient approaching -infinity, and everything is graded V4 and 5.10-'????Well look no further than Austin, Texas!",
        image_url: 'https://cdn2.apstatic.com/photos/climb/116192886_medium_1545104464_topo.jpg',
        user_id: 1
      }
    ], {returning:true})

    const routes = await queryInterface.bulkInsert('Routes',
    [
      {
        name: 'Diving for Rocks',
        type: 'Sport',
        grade: '5.10d',
        description: 'The crux is getting from the 2nd to 3rd bolt. The "easiest" way to do it is probably to lunge, but it can be done static as well. I reccommend doing it both ways for the full effect! After the crux, it is easier, but you still gotta hang on. Some of the rock up top can be a bit dusty.',
        image_url: 'https://cdn2.apstatic.com/photos/climb/107950637_smallMed_1494252887.jpg',
        longitude: -97.7999,
        latitude: 30.2453,
        area_id: 1,
        user_id: 1
      }
    ])

    return queryInterface.bulkInsert('Followers',
    [
      {
        followable_type: 'route',
        followable_id: 1,  //id of route 
        user_id: 1
      }
    ])
    },



  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   await queryInterface.bulkDelete('Followers',null,{});
   await queryInterface.bulkDelete('Routes', null, {});
   await queryInterface.bulkDelete('Areas',null, {});
   return queryInterface.bulkDelete('Users',null, {});
  }
};
