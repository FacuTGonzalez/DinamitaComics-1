const S = require("sequelize");
const db = require("../config");

class OrderDetail extends S.Model {}

OrderDetail.init(
  {
    totalPrice: {
      type: S.INTEGER,
      defaultValue: 0
    },
    quantity: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "order_detail" }
);

module.exports = OrderDetail;