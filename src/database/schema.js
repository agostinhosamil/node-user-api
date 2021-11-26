const { DataTypes } = require ('sequelize')

exports.user = { 
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },

  gender: {
    type: DataTypes.ENUM ('M', 'F'),
    allowNull: false,
    defaultValue: 'M'
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}
