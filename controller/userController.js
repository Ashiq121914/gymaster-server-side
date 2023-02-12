const { query } = require("express");
const mongoose = require("mongoose");
const User = require("../modals/userModal");



const userController = {
  registration: async (req, res) => {
    try {
      const user = new User(req.body);
      console.log(user)
      await user.save();
      res.status(201).send(user);
      if (!user) {
        return res.status("user not created");
      } else {
        return res.status("user added successfully");
      }
    } catch (error) {
      res.status(200).json({
        message: "aikhane error",
      });
    }
  },
  alluser: async (req, res) => {
    try {
      const data = await User.find({});
      res.send(data);
    } catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  },
  adminUser:async(req,res)=>{
    try{
      const email = req.params.email;
      console.log(email)
      const query = {email}
      const user = await User.findOne(query);
      console.log(user)
      res.send(user)
    }catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  },
};

module.exports = userController;
