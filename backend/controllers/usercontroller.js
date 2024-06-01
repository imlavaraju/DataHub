const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Data } = require("../models/Userdata ");
const { default: mongoose } = require("mongoose");

const Createuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      email,
      password: hashpassword,
    });
    await newuser.save();
    res.status(201).send("User created successfully"); // Created status code
  } catch (error) {
    if (error.code === 11000) {
      return res.status(410).send("User already exists"); // Conflict status code
    }
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existeduser = await User.findOne({ email });
    if (!existeduser) {
      return res.status(400).send("User not registered");
    }
    const ismatched = await bcrypt.compare(password, existeduser.password);
    if (!ismatched) {
      return res.status(401).send("Invalid password");
    }
    const jsontoken = jwt.sign(
      { email: existeduser.email },
      "my_secret_token",
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ jsontoken });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("Authorization header missing");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send("Token missing");
  }

  jwt.verify(token, "my_secret_token", (err, user) => {
    if (err) {
      return res.status(403).send("Invalid or expired token");
    }
    req.user = user;
    next();
  });
};

const postdata = async (req, res) => {
  try {
    const email = req.user.email; // Get user email from the authenticated user
    const isexisted = await User.findOne({ email });
    if (!isexisted) {
      return res.status(400).send("User does not exist");
    }

    const id = isexisted._id;
    const { question, answer } = req.body;
    if (question.trim().length === 0) {
      return res.status(400).send("Please enter the question");
    } else if (answer.trim().length === 0) {
      return res.status(400).send("please enter the answer");
    }

    const newdata = new Data({
      question,
      answer,
      user: id,
    });

    await newdata.save();
    res.status(200).send("Created successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getdata = async (req, res) => {
  try {
    const email = req.user.email; // Get user email from the authenticated user
    const isexisted = await User.findOne({ email });
    if (!isexisted) {
      return res.status(400).send("User does not exist");
    }

    const id = isexisted._id;
    const data = await Data.find({ user: id });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getsingledata = async (req, res) => {
  try {
    const itemid = req.params.id;
    const email = req.user.email; // Get user email from the authenticated user
    const isexisted = await User.findOne({ email });
    if (!isexisted) {
      return res.status(400).send("User does not exist");
    }

    const id = isexisted._id;
    const data = await Data.findOne({ _id: itemid, user: id });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const updatedata = async (req, res) => {
  const email = req.user.email;
  const isexist = await User.findOne({ email });
  if (!isexist) {
    return res.status(400).send("user doesn't exist");
  }
  const UserId = isexist._id;
  const id = req.params.id;
  const { question, answer } = req.body;
  const Updated = await Data.findByIdAndUpdate(
    { _id: id, user: UserId },
    {
      question,
      answer,
    }
  );
  if (!Updated) {
    return res.status(500).send("not");
  }
  res.status(201).json(Updated);
};
//to delete dATA

const deleteData = async (req, res) => {
  const email = req.user.email;
  const isexist = await User.findOne({ email });
  if (!isexist) {
    return res.status(400).send("user doesn't exist");
  }
  const UserId = isexist._id;
  const id = req.params.id;
  const deleted = await Data.findByIdAndDelete({ _id: id, user: UserId });
  if (!deleted) {
    return res.status(500).send("error to delete");
  }
  res.status(200).send("deleted successfully");
};
module.exports = {
  Createuser,
  Loginuser,
  authenticateToken,
  postdata,
  getdata,
  getsingledata,
  updatedata,
  deleteData,
};
