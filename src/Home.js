import React from "react";
import Header from "./Header";
import Product from "./Product";
import "./Home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Home() {
  return (
    <>
      <Header />
      
      <div className="home">
      <Carousel>
      <div>
      <img
          className="home__image"
          src="/1.png"
          alt=""
        />

      </div>
      <div>
      <img
          className="home__image"
          src="https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg"
          alt=""
        />

      </div>
      </Carousel>
        

        <div className="home__row">
        <Product
          id= "1"
          title="Samsung Galaxy A03 Core, 6.5'' Screen, 2GB/32GB Memory, 8MP Camera, 5000 mAh Battery - Black"
          price={47990}
          rating={5}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/454289/1.jpg?1556"
        />
        <Product
          id= "2"
          title="Infinix Hot 11 Play (X688B), 6.82'' HD + IPS Premium Display, 4GB RAM + 128GB ROM, 6000 MAh"
          price={11.96}
          rating={3}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/133749/1.jpg?6418"
        />
          
        <Product
          id= "3"
          title="Tecno POP 5 Go (BD1) 5.71'' HD+ Screen, 1GB RAM + 16GB ROM, 4000mAh, 5MP +5MP Camera, Fingerprint & Face ID - Aether Black"
          price={37699}
          rating={3}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/439528/1.jpg?3594"
        />
          
        <Product
          id= "4"
          title="UMIDIGI BISON Pro (4GB,128GB) Android 11 Helio G80 IP68/IP69K (48MP+16MP+5MP)+24MP"
          price={84500}
          rating={3}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/044297/1.jpg?2487"
        />
          
        </div>

        <div className="home__row">
        <Product
          id= "5"
          title="Diamond 4GBRam/64GbRom,10.1'', Android 10.0 Poise P9 Tablet+ Free Pouch And Tampered Glass Black"
          price={72000}
          rating={3}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/111086/1.jpg?1730"
        />
        <Product
          id= "6"
          title="2021 Apple 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray"
          price={116000}
          rating={5}
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX522_.jpg"
        />
        <Product
          id= "7"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        <Product
          id= "8"
          title="Game of thrones"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
        />
        </div>
        <div className="home__row">
        <Product
          id= "9"
          title="Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 - Stainless Steel"
          price={11.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_SX679_.jpg"
        />
        <Product
          id= "10"
          title="Game of Rock 43'' Full Hd Led Tv"
          price={90000}
          rating={5}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/E/161417_1621579881.jpg"
        />
        <Product
          id= "11"
          title="Sanyo 43'' Television (2021) Full Hd Led Tv With One Year Warranty"
          price={300000}
          rating={5}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/A/138884_1633011172.jpg"
        />
        </div>
       

      </div>
    </>
  );
}

export default Home;
