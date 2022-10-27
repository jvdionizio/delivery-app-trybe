const Users = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'userId', as: 'user' });
    User.hasMany(models.Sales,
        { foreignKey: 'sellerId', as: 'seller' });
  }

  return User;
};

module.exports = Users;