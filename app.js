const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(userRouter);
const mongooseConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/MEN-prac", {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  app.listen(PORT, () => console.log(`server started at port ${PORT}`));
};
mongooseConnect();
