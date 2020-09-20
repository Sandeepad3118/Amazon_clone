import React from "react"
import "./CheckOutProduct.css"
import StarIcon from "@material-ui/icons/Star"
import { useStateValue } from "./StateProvider"

function CheckOutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id,
    })
  }
  return (
    <div className="checkout_product">
      <img src={image} className="checkoutproduct_image" alt="" />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckOutProduct
