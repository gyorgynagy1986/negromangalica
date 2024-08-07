"use client";

import Image from "next/image";
import etlap from "../../../../public/assets/menu/1.png";
import itallap from "../../../../public/assets/menu/2.png";
import style from "./page.module.css";
import { Grand_Hotel } from "next/font/google";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const handleClickFood = () => {
    window.location.href = "/menu_eng.pdf";
  };

  const handleClickDrinks = () => {
    window.location.href = "/itallap.pdf";
  };

  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Menu</h1>
      <div className={style.container}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickFood}
          placeholder="blur"
          priority
          alt="Drink menu of Negro Mangalica restaurant"
          src={etlap}
        />
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickDrinks}
          placeholder="blur"
          priority
          alt="Negro Mangalica Restaurant Menu"
          src={itallap}
        />
      </div>
    </>
  );
};

export default Menu;
