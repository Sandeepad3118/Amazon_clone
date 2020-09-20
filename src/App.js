import React, { useEffect, useState } from "react"
import Header from "./Header"
import Home from "./Home"
import Payment from "./Payment"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
import { auth } from "./firebase"
import { useForkRef } from "@material-ui/core"
import { useStateValue } from "./StateProvider"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
const promise = loadStripe(
  "pk_test_51HQH0yIjLwD46ckouNL7ScMJXSn4OAjJWxZWaOf6dQOdSLjv0nnYYpXtjI2tt54nLTxvwPauSKVpFlB1qD6dyTwc008aiIo6Db"
)

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is >>> ", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
