const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require("express-validator");
require('dotenv').config();

//Create a user
router.post('/register', 
  [
    body("firstName", "Enter a valid Name").isLength({ min: 3 }),
    body("lastName", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("age",'Enter a valid Age between 16 to 60'),
    body("password", "Password should atleast have 5 characters").isLength({ min: 5, }),
  ],
  async (req, res) => {
    try{
      let success = false;
      let user = await User.findOne({email: req.body.email});
      if (user) {
        return res.status(400).json({ success, error: "Sorry! A user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      user = User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        password: hashedPassword
      })
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error){
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR");
    }
  }
)

//Authenticate a User 
router.post('/login',
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blanked").exists()
  ],
  async (req, res) => {
    const {email, password} = req.body
    try {
     
      let user = await User.findOne({email: email})
      if (!user) {
        success = false
        return res.status(400).json({ success, error: "Please login with the correct credentials" })
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error){
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR");
    }
  }
)

module.exports = router;