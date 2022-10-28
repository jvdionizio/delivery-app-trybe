const Sales = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sales", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, field: 'seller_id' },
    totalPrice: { type:DataTypes.DECIMAL(9, 2), field: 'total_price' },
    deliveryAddress: { type:DataTypes.STRING, field: 'delivery_address' },
    deliveryNumber: { type:DataTypes.STRING, field: 'delivery_number' },
    saleDate: { type:DataTypes.DATE, field: 'sale_date' },
    status: DataTypes.STRING,
  },
  {
    createdAt: 'saleDate',
    tableName: 'Sales',
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.Users, { foreignKey: 'id', as: 'user' });
    Sale.hasMany(models.Users, { foreignKey: 'id', as: 'seller' });
  }

  return Sale;
};

module.exports = Sales;