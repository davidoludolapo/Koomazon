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
          src="https://www.dignited.com/wp-content/uploads/2016/06/Jumiabanner-1.png"
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
