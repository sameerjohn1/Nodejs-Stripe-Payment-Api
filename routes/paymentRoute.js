const express = require("express");
const payment_route = express();

const bodyParser = require("body-parser");
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended: false }));

const paymentontroller = require("../controllers/paymentController");

//create customer controller
payment_route.post("/create-customer", paymentontroller.createCustomer);

//add card controller
payment_route.post("/add-card", paymentontroller.addNewCard);

//create charges controller
payment_route.post("/create-charges", paymentontroller.createCharges);

module.exports = payment_route;
