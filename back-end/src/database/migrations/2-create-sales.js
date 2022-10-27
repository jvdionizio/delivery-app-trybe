'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Users',
          key: 'id',
        },
        field: 'user_id',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Users',
          key: 'id',
        },
        field: 'seller_id',
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: 'total_price',
      },
      deliverAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_address',
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_number',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      }
    }, {
      timestamps: false,
      createdAt: 'saleDate',
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};