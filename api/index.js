const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to Db"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/users", userRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});
