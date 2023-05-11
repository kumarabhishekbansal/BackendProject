const orderroute = require("express").Router();
const {
  getAdminOrders,
  updateAdminOrders,
  getOrderHistory,
  orderrating,
  orderdetail,
  addorder
} = require("./controllers");

// post order after final payment
// all other add to cart,delete form cart are done using redux
// order will work after payment done 

orderroute.post("/orderdetail/userid/resid",orderdetail);


// getting all non completed orders for admin so that admin can update the status of that item
// with restuarant id
orderroute.get("/getAdminOrders/:_id", getAdminOrders);

// update placing orders with restuarant id

orderroute.put("/updateAdminOrders/:_id", updateAdminOrders);

// get history of all orders of particular user by user id

orderroute.get("/getOrderHistory/:_id", getOrderHistory);


// order rating which is done by after payment with order id

orderroute.put("/orderrating/:_id",orderrating);


// add customer order to list

orderroute.post("/addorder",addorder)

module.exports = { orderroute };