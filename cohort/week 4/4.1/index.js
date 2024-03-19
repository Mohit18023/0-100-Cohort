const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.get("/sum", (req, res) => {
  try {
    // Parse query parameters to numbers
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if either parameter is NaN (not a number)
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid numbers provided");
    }

    // Perform the sum
    const sum = num1 + num2;

    // Send the result as a response
    res.send(sum.toString());
  } catch (err) {
    // If any error occurs, send a 400 Bad Request response
    res.status(400).send("Invalid request parameters: " + err.message);
  }
});

app.get("/simpleIntrest", (req, res) => {
  try {
    // parse the query parameters to numbers
    const principal = parseFloat(req.query.principal);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    // check if any parameter is NaN
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      throw new Error("Invalid numbers provided");
    }

    // perform the calculation
    const intrest = (principal * rate * time) / 100;
    res.send(intrest.toString());
  } catch (err) {
    res.status(400).send("Invalid request parameters: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Path: week%204/sum/index.js
