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
app.get("/",async (req,res)=>{
  res.status(200).send("working properly")
}
app.use("/user", router);
mongoose
  .connect(
    process.env.mongoose
  )
  .then((res) => console.log("database connected"))
  .catch((r) => console.log(r));

app.listen(PORT, () => {
  console.log(`sevrer running at ${PORT}`);
});
