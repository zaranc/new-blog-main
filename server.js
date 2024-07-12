require("dotenv").config();

const http = require("http");
const route = require("./routes");
const bodyParser = require("body-parser");

const express = require("express");
const connectDB = require("./db/dbConnect");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", route);

//database connection
connectDB();

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started successs on port ${process.env.PORT}`);
});
