"use client";

import style from "./Services.module.css";
import { Grand_Hotel } from "next/font/google";
import Image from "next/image";
import HeroCoverPhoto from "../../../public/assets/sections/4.jpg";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Szolgáltatások ",
  p: "Szervezz hozzánk céges rendezvényt, baráti összejövetelt vagy születésnapot. Mi előkészítjük a helyszínt, étel- és italválasztékunkkal pedig igazodunk az igényeitekhez és az alkalomhoz.",
  p1: "Céges rendezvények",
  p2: "Baráti összejövetelek",
  p3: "Születésnapok",
};

const textContentEn = {
  h2: "Services ",
  p: "Organize your corporate event, friendly gathering or birthday party with us. We'll prepare the venue and tailor our food and drink selection to your preferences and the occasion.",
  p1: "Corporate events",
  p2: "Get-togethers",
  p3: "Birthday celebrations",
};

const Services = ({ lang }) => {
  const titleLogic = !lang ? textContent.h2 : textContentEn.h2;
  const liLogic = !lang ? textContent.p1 : textContentEn.p1;
  const liLogic2 = !lang ? textContent.p2 : textContentEn.p2;
  const liLogic3 = !lang ? textContent.p3 : textContentEn.p3;
  const pLgoic = !lang ? textContent.p : textContentEn.p;

  return (
    <section className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
          style={{borderRadius:"5px"}}
            placeholder="blur"
            alt="Negro Mangalica"
            src={HeroCoverPhoto}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={dosis.className}>{titleLogic}</h2>
          <ul className={style.ulContainer}>
            <li>{liLogic}</li>
            <li>{liLogic2}</li>
            <li>{liLogic3}</li>
          </ul>
          <p>{pLgoic}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
