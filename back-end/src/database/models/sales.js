const Sales = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sales", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAdress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    createdAt: 'sale_date',
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'userId', as: 'sales' });
  }

  return Sale;
};

module.exports = Sales;