"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import { Grand_Hotel } from "next/font/google";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import ButtonGetInTouch from "../UI/Buttons/ButtonGetInTouch";
import HeroCoverPhoto from "../../../public/assets/hero/hero.svg";

const orelega = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h1: "Negro Mangalica Bistro & Bar",
  p: "Fedezd fel a tradicionális magyar ízeket, amelyek nálunk modern köntösben új életre kelnek!",
  btn: "asztalfoglalás",
  btn2: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h1: "Negro Mangalica Bistro & Bar",
  p: "Explore the authentic and traditional flavors of Hungarian cuisine, expertly infused with a modern twist!",
  btn: "BOOK a table now",
  btn2: "Get in touch",
  url: "/en/contact",
};

const Hero = ({ reservation, lang }) => {
  const [stickyNav, setStickyNav] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 20px 20px 20px" }
    );

    observer.observe(menuRef.current);
  }, []);

  return (
    <header ref={menuRef} className={style.container}>
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <Image
          alt="Negro Mangalica"
          priority
          src={HeroCoverPhoto}
        />
      </div>
      <div className={style.textContainer}>
        <h1 className={orelega.className}>
          {!lang ? textContent.h1 : textContentEn.h1}
        </h1>
        <h2>{!lang ? textContent.p : textContentEn.p}</h2>
        <div className={style.btnContainer}>
          <Button
            btnBlue={true}
            engColorPrefix={lang ? true : false}
            url={reservation}
            name={!lang ? textContent.btn : textContentEn.btn}
          />
          <ButtonGetInTouch
            url={!lang ? textContent.url : textContentEn.url}
            name={!lang ? textContent.btn2 : textContentEn.btn2}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
