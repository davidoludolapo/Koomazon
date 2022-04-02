import React from "react";
import Header from "./Header";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
          
        </div>

        <div className="home__row">
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        </div>
        <div className="home__row">
        <Product
          id= "1234466"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        </div>
       

      </div>
    </>
  );
}

export default Home;
