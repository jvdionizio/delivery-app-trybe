const SalesProducts = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProducts", {
      saleId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: "sale_id" },
      productId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: "product_id" },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'salesProducts'
    }
  );

  SalesProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Products,
      {
        as: 'salesProducts',
        through: SalesProduct,
        foreignKey: 'saleId'
      });
    models.Products.belongsToMany(models.Sales,
      {
        as: 'productsSales',
        through: SalesProduct,
        foreignKey: 'productId'
      });
  }

  return SalesProduct;
};

module.exports = SalesProducts;
