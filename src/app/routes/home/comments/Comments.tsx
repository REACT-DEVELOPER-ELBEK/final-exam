import React from "react";
import "./Comments.scss";
import stars from "../../../../../public/comments-stars.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Comments = () => {
  return (
    <>
      <div className="comments">
        <div className="comments__title">
          <h2>
            <span>Customer</span> Say
          </h2>
        </div>
        <div className="comments__items">
          <Carousel
            autoPlay={true}
            swipeable={true}
            infiniteLoop={true}
            interval={3000}
            selectedItem={3}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            centerSlidePercentage={50}
          >
            <div className="comment__item">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <Image src={stars} alt="stars" />
            </div>
            <div className="comment__item">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <Image src={stars} alt="stars" />
            </div>
            <div className="comment__item">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <Image src={stars} alt="stars" />
            </div>
            <div className="comment__item">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <Image src={stars} alt="stars" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Comments;
