'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'sales',
          key: 'id',
        },
        foreignKey: true,
        field: 'sale_id',
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'products',
          key: 'id',
        },
        foreignKey: true,
        field: 'product_id',
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};