import React from "react"
import "./Subtotal.css"
import { useHistory } from "react-router-dom"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer"
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  const history = useHistory()
  // console.log(basket)
  // const addTotal=basket.reduce((n, {price}) => n + price, 0)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
