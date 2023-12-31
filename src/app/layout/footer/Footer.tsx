"use client"
import React from "react";
import "./Footer.scss";
import footerLogo from "../../../../public/nav.svg";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import { getCookie } from "@/app/utils/cookies";
import { usePathname } from "next/navigation";

const token = getCookie("access_token");

const Footer = () => {
  const getPath = usePathname()
  return getPath=="/login"?<></>:(
    <>
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top">
              <Link href='/' className="footer__top__items">
              <Image src={footerLogo} alt="" />
              <p>eatly</p>
              </Link>
              <div className="footer__top__medias">
                <Link href="instagram.com">
                  <AiOutlineInstagram />
                </Link>
                <Link href="linkedin.com">
                  <BiLogoLinkedin />
                </Link>
                <Link href="facebook.com">
                  <BiLogoFacebook />
                </Link>
                <Link href="/productView">
                  <AiOutlineTwitter />
                </Link>
              </div>
            </div>
            <div className="footer__bottom">
              <h2>© 2023 EATLY All Rights Reserved.</h2>
              <div className="footer__bottom__medias">
                <Link href="instagram.com">
                  <AiOutlineInstagram />
                </Link>
                <Link href="linkedin.com">
                  <BiLogoLinkedin />
                </Link>
                <Link href="facebook.com">
                  <BiLogoFacebook />
                </Link>
                <Link href="/productView">
                  <AiOutlineTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
