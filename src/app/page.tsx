import React from "react";
import "./Home.scss";
import heroContent from "../../public/sign-up-right.png";
import Image from "next/image";

const Home = () => {
  const sellInfo = [
    { count: "10k+", text: "Satisfied Costumers All Great Over The World" },
    { count: "4M", text: "Healthy Dishes Sold Including Milk Shakes Smooth" },
    { count: "99.99%", text: "Reliable Customer Support We Provide Great Experiences" },
  ];
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__info">
            <h3>
              {" "}
              <span>-</span>OVER 1000 USERS
            </h3>
            <h1>
              Enjoy Foods All Over The <span>World</span>
            </h1>
            <p>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span>$20 bonus</span>.
            </p>
            <button>Get Started</button>
          </div>
          <div className="home__content">
            <Image src={heroContent} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
