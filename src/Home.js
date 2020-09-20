import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="234235"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={34.32}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="432343"
            title="For a price of just under Rs 40k, the Inspiron M501 does offer good performance with its quad-core processor and latest-gen dedicated mobile graphics chipset"
            price={34.43}
            rating={4}
            image="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="home_row">
          <Product
            id="432343"
            title="The mobile phone can be used to communicate over long distances without wires..which are called feature phones"
            price={64.43}
            rating={4}
            image="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Product
            id="432343"
            title="Alpha advanced technology – two way rotation Multi-functional juice, smoothie, ice cream and nut milk"
            price={83.34}
            rating={3}
            image="https://images.pexels.com/photos/39587/lemon-squeezer-lemon-juice-citrus-citric-acid-39587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Product
            id="432343"
            title="The pile was traditionally made from wool, but since the 20th century, synthetic fibers such as polypropylene"
            price={53.34}
            rating={1}
            image="https://images.pexels.com/photos/276666/pexels-photo-276666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
        <div className="home_row">
          <Product
            id="432343"
            title="Finding a piece with a striking look can often be a case of love at first sight "
            price={435.23}
            rating={4}
            image="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
