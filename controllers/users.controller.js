const { v4: uuidv4 } = require("uuid");
const User = require("../models/users.model");

//get
const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get one by id
const getOneusers = async (req, res) => {
  try {
    const user = await User.findOne({
      id: req.param.id,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//post-->create
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//patch-->update
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      id: req.param.id,
    });
    user.name = req.body.name
    user.age = Number(req.body.age)
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete
const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({
      id: req.param.id,
    });
    res.status(200).json({message : "User is deleted"});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllusers,
  getOneusers,
  createUser,
  updateUser,
  deleteUser,
};
