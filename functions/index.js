const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const { REACT_APP_SECRET_KEY } = process.env;

const stripe = require("stripe")(REACT_APP_SECRET_KEY);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.json("hey"));

app.post("/payments/create", async (req, res) => {
  const { total } = req.query;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
