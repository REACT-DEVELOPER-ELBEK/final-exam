import React from "react";
import "./Home.scss";
import heroContent from "../../public/sign-up-right.png";
import Image from "next/image";
import HomeSellInfo from "./routes/home/homeSellInfo/HomeSellInfo";
import DownloadApp from "./routes/home/downloadApp/DownloadApp";
import HomePreviewEats from "./routes/home/homePreviewEats/HomePreviewEats";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__hero">
            <div className="home__info">
              <h3>
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
        <HomeSellInfo />
        <DownloadApp />
        <HomePreviewEats />
      </div>
    </div>
  );
};

export default Home;
