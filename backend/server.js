const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/route");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

PORT = process.env.PORT || 5555;

app.use("/user", router);
mongoose
  .connect(
    "mongodb+srv://imnanilavaraju:9g7F5xYlC29ABJ84@firstmongo.kp5civp.mongodb.net/users_prep?retryWrites=true&w=majority&appName=firstmongo"
  )
  .then((res) => console.log("database connected"))
  .catch((r) => console.log(r));

app.listen(PORT, () => {
  console.log(`sevrer running at ${PORT}`);
});
