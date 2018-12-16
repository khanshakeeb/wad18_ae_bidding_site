'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('user_credits', [{
			user_id: '1',
			updated_at: '2018-11-19',
		    balance: '500',
		    expire_date: '2019-11-29',
		    //createdAt: '2019-11-29',
		    //updated_at: '2019-11-29'
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
