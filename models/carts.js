// Cart Model

module.exports = (sequelize, DataTypes) => {

  let Cart = sequelize.define('carts', {
    orderDate: DataTypes.DATE,
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  Cart.associate = (models) => {
    
    // Cart has a one-to-many relationship with cart-items
    Cart.hasMany(models.cartitems, {
      onDelete: 'cascade'
    })

  }

  return Cart

} // // Cart Model