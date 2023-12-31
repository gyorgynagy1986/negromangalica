"use client";

import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Buttons/Button";
import ButtonGetInTouch from "@/components/UI/Buttons/ButtonGetInTouch";
import mapPhoto from "../../../public/assets/sections/map.png";
import facebook from "../../../public/assets/social/facebook.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import Direction from "./../../../public/assets/icons/directions.svg";
import Link from "next/link";
import { Grand_Hotel } from "next/font/google";
import { links } from "../links";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h1: "Kapcsolat",
  h3: "Negro Mangalica",
  btn: "asztalfoglalás",
  btn2: "kapcsolat",
};

const Contact = () => {
  const handleClickMap = () => {
    window.location.href = "https://maps.app.goo.gl/xaJvzrspqnAv693b9";
  };

  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>{textContent.h1}</h1>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            onClick={handleClickMap}
            className={style.imagehover}
            placeholder="blur"
            priority
            alt="Negro Mangalica"
            src={mapPhoto}
          />
        </div>
        <div className={style.itemsContainer}>
          <div className={style.textContainer}>
            <h2 className={dosis.className}>{textContent.h3}</h2>
            <div className={style.addresscontainer}>
              <p className={style.contactText}>
              1074 Budapest, Dohány utca 36.
              </p>
              <Link href="https://maps.app.goo.gl/xaJvzrspqnAv693b9">
                <Image alt="direction" src={Direction} />
              </Link>
            </div>

            <p className={style.contactText}>+36 20 244 4733</p>
            <p className={style.contactText}>hello@negromangalica.hu</p>
          </div>

          <div className={style.btnContainer}>
            <div className={style.socialContainerItem}>
              <Image
                alt="Negro Mangalica étterem facebook oldala"
                src={facebook}
              />
              <ButtonGetInTouch url={links.facebook} name={"facebook"} />
            </div>
            <div className={style.socialContainerItem}>
              <Image
                alt="Negro Mangalica étterem instagram oldala"
                src={instagram}
              />
              <ButtonGetInTouch url={links.instagram} name={"instagram"} />
            </div>
            <div className={style.btnContainerItem}>
              <Button
                btnBlue={true}
                url={links.reservation}
                name={"asztalfoglalás"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
