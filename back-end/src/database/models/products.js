const Products = (sequelize, DataTypes) => {
  const Product = sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING
  },
  {
    timestamps: false,
  });

  return Product;
};

module.exports = Products;