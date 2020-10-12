const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dog_breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dog_breeds').insert([
        {
          "breed_id" : 1,
          "dog_id" : 1
        },
        {
          "breed_id" : 2,
          "dog_id" : 2
        },
        {
          "breed_id" : 3,
          "dog_id" : 3
        },
        {
          "breed_id" : 4,
          "dog_id" : 4
        },
        {
          "breed_id" : 5,
          "dog_id" : 5
        }
      ]);
    });
};
