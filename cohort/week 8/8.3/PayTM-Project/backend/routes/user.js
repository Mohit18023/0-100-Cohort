const express = require("express");
const zod = require("zod");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { authMiddelware } = require("../middleware");
const {Account} = require("../db");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().min(3).max(30),
  password: zod.string().min(8),
  firstName: zod.string().max(30),
  lastName: zod.string().max(30),
});

const LoginSchema = zod.object({
  username: zod.string().min(3).max(30),
  password: zod.string().min(8),
});

router.post("/signup", async (req, res) => {
  try {
    const user = req.body;
    const res = signupSchema.safeParse(user);

    if (!res.success) {
      res.send(411).json({ message: "Incorrect inputs" });
      // Early Return
      return;
    }
    // check if the user exists in the database
    const userExists = await User.findOne({ username: user.username });
    if (userExists) {
      res.status(411).json({ message: "User already exists" });
      // Early Return
      return;
    }
    // create new user
    const newUser = await User.create({
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    // take user Id
    const userId = newUser._id;
    // Create account for the user
    const account = new Account.create({
        userId,
        balance: 1 + Math.random()*1000
    });

    // if user does not exist then make a token and send it to the user
    const token = jwt.sign(userId, JWT_SECRET);

    // save the user in the database

    // send the token to the user
    res.status(200).json({ message: "User signed up successfully", token });
  } catch (error) {
    console.error(`Error in user signup: ${error}`);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = req.body;
    const res = LoginSchema.safeParse(user);
    if (!res.success) {
      // if user doesnot exist then send the response
      res.send(411).json({ message: "Incorrect Inputs" });
      // Early Return
      return;
    }
    // check if the user exists in the database
    const userExists = await User.findOne({
      username: user.username,
      password: user.password,
    });

    if (!userExists) {
      res.status(400).json({ message: "User does not exist" });
      // Early Return
      return;
    }
    // if user exists then make a token and send it to the user
    const token = jwt.sign({ userId: userExists._id }, JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    // if error occurs then send the response
    res.status(411).json({ message: "Error while logging in" });
  }
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

// update user infprmation on default route of user i.e. api/v1/user
router.put("/", authMiddelware, async (req, res) => {
  // check if the user is present in the database through authMiddleware

  // now check the if the input is correct or not
  const { success } = updateBody.safeParse(req.body);
  // if input is not correct then send the response
  if (!success) {
    // if the input are not correct then sendong the 411 error response
    res.status(411).json({
      message: "Error while updating information",
    });
    // Early Return
    return;
  }

  // if the input is correct then update the user information
  // check if the user is present in the database through authMiddleware

  // now update the user information , finding the user by id and updating the user information
  await User.updateOne({ _id: req.userId }, req.body);

  // send the response
  res.json({
    message: "User updated successfully",
  });
});

// making the zod schema to check the input given by the user
const getUser = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

// route to get the users from the backend , filterable via firstName and lastName
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});


// route for accounts 


module.exports = router;
