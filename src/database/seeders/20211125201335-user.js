'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const fakeUserList = [
      {
        "name": "Agostinho Lopes",
        "email": "agostinho.lopes@gmail.com",
        "gender": "M",
        "phone": "924389485",
        "birthday": new Date ("29-01-1999")
      },
      {
        "name": "Manuela Lú",
        "email": "manuela.lu@gmail.com",
        "gender": "F",
        "phone": "7881772938",
        "birthday": new Date ("29-01-1999")
      },
      {
        "name": "Sara Doun",
        "email": "sarah.doun@twitterapp.com",
        "gender": "F",
        "phone": "9882390384",
        "birthday": new Date ("29-01-1999")
      }
    ]

    await queryInterface.bulkInsert ('users', fakeUserList, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
