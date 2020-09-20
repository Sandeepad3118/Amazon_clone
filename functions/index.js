const functions = require("firebase-functions")

const express = require("express")
const cors = require("cors")
const { response } = require("express")
const { default: Product } = require("../src/Product")

const stripe = require("stripe")(
  "sk_test_51HQH0yIjLwD46cko6ZjSAH09aFCscichqoQpWkTcWifsFEMSDrQmo6Uifpn4vjlkT8ICojOpU5pI3eSFaFd3X0av004dlJiLaO"
)

// api

// app config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"))
app.post("/payments.create", async (request, response) => {
  const total = request.query.total
  console.log("payment request received boom", total)
  const payment = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  })
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
//listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-d9731/us-central1/api
