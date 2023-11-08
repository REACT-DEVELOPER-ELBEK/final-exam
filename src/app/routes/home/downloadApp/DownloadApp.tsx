import React from "react";
import "./DownloadApp.scss";
import mobileScreen from "../../../../../public/mobile-screen.png";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className="download">
      <div className="download__img">
        <Image src={mobileScreen} alt="screen" />
      </div>
      <div className="download__info">
        <h1>
          Premium <span>Quality</span> For Your Health
        </h1>
        <ul>
          <li>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>
        <Link href="#">
            Download
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DownloadApp;
