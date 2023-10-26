require("dotenv").config();

const app = require("express")();
var http = require("http").Server(app);

const paymentRoute = require("./routes/paymentRoute");

app.use("/", paymentRoute);

// port
const port = process.env.PORT;

http.listen(port, function () {
  console.log(`Server is running ${port}`);
});
