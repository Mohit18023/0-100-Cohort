const express = require("express");
const authMiddelware = require("../middleware");
const { Account } = require("../db");
const { User } = require("../db");
const router = express.Router();
const zod = require("zod");

// A schema for the transfer request
const tranferSchema = zod.object({
  to: zod.string(),
  amount: zod.coerce.number().gt(0),
});

router.get("/balance", authMiddelware, async (req, res) => {
  // now get the balance and give it to the user
  const account = await Account.findOne({ userId: req.userId });
  res.json({
    balance: account.balance,
  });
});

// An endpoint for user to transfer money to another account
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  // Fetch the accounts within the transaction
  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  // Perform the transfer
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Commit the transaction
  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
