const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://mohitchoudhary1054:QfJndg00cr4OBkbD@cluster0.902vrzk.mongodb.net/user_data"
);
// Get the default Mongoose connection
const db = mongoose.connection;

// Event listeners for connection success and error
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log(`Connected to MongoDB successfully! - ${db.name} and ${db.port}`);
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);

const app = express();
const PORT = 5000;
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({
        msg: "User already exists with this username",
      });
    }

    // Create new user
    const user = new User({
      name,
      username,
      password,
    });
    var token = jwt.sign({ username: username }, jwtPassword);
    // Save user to database
    await user.save();

    // Send success response
    return res.status(200).json({
      msg: "User created successfully",
      token
    });
  } catch (error) {
    // Catch any errors that occur during the operation
    console.error(error);
    return res.status(500).json({
      msg: "Error creating user",
    });
  }
});

async function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // return ALL_USERS.find((user)=> user.username === username && user.password === password);

  const user = await User.findOne({
    username,
    password,
  });
  
  if(user){
    return true;
  }
  return false;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      msg: "Invalid request",
    });
  }
  if (!userExists(username, password)) {
    return res.status(400).json({
      msg: "Invalid username or password",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({
      msg: "Token is missing",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Fetch users from the database excluding the current user
    const users = await User.find({ username: { $ne: username } });

    return res.json({
      users,
    });
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    } else {
      return res.status(500).json({
        msg: "Error fetching users",
      });
    }
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});