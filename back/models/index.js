const User = require("./user")
const Comic = require("./comic")
const Category = require("./category")
const Order = require("./order")
const OrderDetail = require("./order_detail")
const Review = require("./review")
const CreditCard = require("./creditCard")

//Un usuario tiene ordenesDeCOMpra
User.hasMany(Order,{foreignKey: 'userId'})
Order.belongsTo(User)

//Un usuario escribe reviews
User.hasMany(Review,{foreignKey:'userId'})
Review.belongsTo(User)


//Un usuario tiene payments(tarjetas de credito)
User.hasMany(CreditCard,{foreignKey:'userId'})
CreditCard.belongsTo(User)


//Orden tiene varios orderdetails
Order.hasMany(OrderDetail,{foreignKey:'cartId'})
OrderDetail.belongsTo(Order)    


//Comic tiene varias orderDetail
Comic.hasMany(OrderDetail,{foreignKey:'comicId'})
OrderDetail.belongsTo(Comic)



//Comic tiene escritas varias reviews
Comic.hasMany(Review,{foreignKey:'comicId'})
Review.belongsTo(Comic)



//un comic tiene varias categorias , y una categoria tiene varios comics asociados
Comic.belongsToMany(Category,{through:"comic_category"})
Category.belongsToMany(Comic,{through:"comic_category"})




module.exports = {User ,Comic,Category,Order,OrderDetail,Review,CreditCard}