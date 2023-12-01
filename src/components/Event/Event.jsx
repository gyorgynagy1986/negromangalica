import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Grand_Hotel } from "next/font/google";

const font = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Szeretnél rendezvényt tartani a Negro Mangalicában ?",

  p: "Keress minket bátran telefonon, vagy írj nekünk, ha szeretnél rendezvényt tartani nálunk!",
  btn: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Want to have an event at Negro Mangalica ? ",
  p: "Give us a call or drop us a message if you're interested in hosting an event!",
  btn: "Get in touch",
  url: "/en/contact",
};

const Event = ({ lang }) => {
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;
  const pLogic = !lang ? textContent.p : textContentEn.p;
  const buttonNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const urlLogic = !lang ? textContent.url : textContentEn.url;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={font.className}>{h2Logic}</h2>
        <p className={style.h2}>{pLogic}</p>
        <Button
          btnBlue={true}
          engColorPrefixBlueContact={lang ? true : false}
          buttonContact={true}
          name={buttonNameLogic}
          url={urlLogic}
        />
      </div>
    </section>
  );
};

export default Event;
