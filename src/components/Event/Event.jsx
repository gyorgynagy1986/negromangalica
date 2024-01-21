import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Grand_Hotel } from "next/font/google";

const font = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Szeretnél egy rendezvényt a Negro Mangalica-ban?",
  p: "Hívj minket, vagy írj nekünk, és egyeztetjük a részleteket!",
  btn: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Insterested in hosting an event at Negro Mangalica?",
  p: "Call us or send an e-mail if you’d like to organize an event in our restaurant!",
  btn: "Get in touch",
  url: "/en/contact",
};

const Event = ({ lang }) => {
  // const h2Logic = !lang ? textContent.h2 : textContentEn.h2;
  const pLogic = !lang ? textContent.p : textContentEn.p;
  const buttonNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const urlLogic = !lang ? textContent.url : textContentEn.url;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
       {lang ? <h2 className={font.className}>Insterested in hosting an event at <span style={{whiteSpace:"nowrap", lineHeight:"145%"}}>Negro Mangalica?</span> </h2> : <h2 className={font.className}>Szeretnél egy rendezvényt a <span style={{whiteSpace:"nowrap", lineHeight:"145%"}}>Negro Mangalica-ban?</span></h2>}
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
