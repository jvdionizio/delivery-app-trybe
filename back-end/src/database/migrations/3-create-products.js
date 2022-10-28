'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false,
      },
      urlImage: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        field: 'url_image',
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  }
};