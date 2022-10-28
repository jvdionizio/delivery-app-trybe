'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Sales',
          key: 'id',
        },
        primaryKey: true,
        field: 'sale_id',
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'products',
          key: 'id',
        },
        primaryKey: true,
        field: 'product_id',
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};