const { sequelize } = require("./connection");
const Order = require("./models/order");
const OrderProductMap = require("./models/orderProductMap");
const Product = require("./models/product");
const products = require("./productSeed");


Order.hasMany(OrderProductMap, {
  foreignKey: "orderId",
  onDelete: "CASCADE",
});
OrderProductMap.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderProductMap, {
  foreignKey: "productId",
  onDelete: "CASCADE",
});
OrderProductMap.belongsTo(Product, { foreignKey: "productId" });

sequelize.sync({logging: false, alter:false }).then(async () => {
    console.log("models are in sync with database now");

    products.forEach( async (product) => {
      const [seededProduct, productCreated] = await Product.findOrCreate({
        where: { id: product.id},
        defaults: {
          id: product.id,
          productName: product.productName,
          productDescription: product.productDescription
        }
      });
      if(seededProduct) { console.log(`Seeded product: ${JSON.stringify(seededProduct)}\n`); }
    });
  
  }).catch(err => {
    console.log(`unable to sync model ${err.message}`)
  });
//   module.exports = { User, Role }