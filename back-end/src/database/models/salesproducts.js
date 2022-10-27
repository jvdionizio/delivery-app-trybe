const SalesProducts = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProducts", {
      saleId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
      productId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'SalesProducts'
    }
  );

  SalesProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Products,
      {
        as: 'sales',
        through: SalesProduct,
        foreignKey: 'saleId'
      });
    models.Products.belongsToMany(models.Sales,
      {
        as: 'products',
        through: SalesProduct,
        foreignKey: 'productId'
      });
  }

  return SalesProduct;
};

module.exports = SalesProducts;