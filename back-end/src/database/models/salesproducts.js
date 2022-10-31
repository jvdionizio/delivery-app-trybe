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
    models.sales.belongsToMany(models.products,
      {
        as: 'salesToProducts',
        through: SalesProduct,
        foreignKey: 'saleId'
      });
    models.products.belongsToMany(models.sales,
      {
        as: 'productsToSales',
        through: SalesProduct,
        foreignKey: 'productId'
      });
  }

  return SalesProduct;
};

module.exports = SalesProducts;
