import React from "react";
import Header from "./Header";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/ScanAndPay/Organized/More/IndependenceDay2019/OnSitePromotion/Updated/More_Page_Banner_1500x300.jpg"
          alt="img"
        />

        {basket.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
            <p>You currently do not have any items in your basket. </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
          </div>
        )}

      </div>
      {basket.length > 0 && <div className="checkout__right">
          {/* <Subtotal /> */}
          <h1>Subtotal</h1>
      </div>}
      </div>
    </>
  );
}

export default Checkout;
