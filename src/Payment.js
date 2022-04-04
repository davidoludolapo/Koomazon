import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__container">
        <h1>
            Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>No 9 Aanni Street</p>
              <p>Ogbomoso</p>
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delievery</h3>
            </div>
            <div className="payment__items">
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
          </div>

          <div className="payment__section">
              <div className="payment__title">
                  <h3>Payment Method</h3>
              </div>
              <div className="payment__details">

              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
