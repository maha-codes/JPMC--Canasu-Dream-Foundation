var router = require("express").Router();
// var express = require("express");
var User = require("../models/User");
var Mentor = require("../models/mentor");
var Mentee = require("../models/mentee");
// var cors = require('cors');
var bcrypt = require("bcrypt"); //used to generate hash for passwords
// 
// app.use(express.json())
// app.use(cors());

//REGISTER
router.get("/health", async(req,res)=>{
  res.json({
    number:1
  });
})
router.post("/register", async (req, res) => {
  const { email, password, name, role } = req.body;

  User.findOne({ email }, async (err, user) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "Some error has occured", msgError: true },
      });
    }

    if (user) {
      res
        .status(400)
        .json({ message: { msgBody: "Email already in use", msgError: true } });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      try {
        const newUser = new User({
          name: name,
          email: email,
          password: hashedPass,
          role: role,
        });

        const user = await newUser.save();

        if (role == "mentee") {
          const { language, education, aspiration, collegeName } = req.body;
          const newMentee = new Mentee({
            email: email,
            language: language,
            education: education,
            aspiration: aspiration,
            collegeName: collegeName,
          });

          await newMentee.save();
        } else {
          const { language, skills } = req.body;
          const newMentor = new Mentor({
            email: email,
            language: language,
            skills: skills,
          });

          await newMentor.save();
        }
        res.status(200).json({
          message: {
            msgBody: "Account Successfully Created",
            msgError: false,
          },
        });
      } catch (err) {
        res.status(500).json({
          message: { msgBody: "Some error has occured", msgError: true },
        });
      }
    }
  });
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json("No such user exits");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    const { password, ...basic } = user._doc;
    if (user.role == "mentee") {
      const mentee = await Mentee.findOne({ email: req.body.email });
      const { email, ...primary } = mentee._doc;
      const response = { basic, primary };
      return res.status(200).json(response);
    }

    //if role is mentor
    const mentor = await Mentor.findOne({ email: req.body.email });
    const { email, ...primary } = mentor._doc;
    const response = { basic, primary };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
