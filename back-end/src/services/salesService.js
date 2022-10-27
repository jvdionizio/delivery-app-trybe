const { Sales } = require('../database/models');

const getAllByUserId = async (userId) => Sales.findAll({ where: { userId } });

module.exports = {
  getAllByUserId,
};