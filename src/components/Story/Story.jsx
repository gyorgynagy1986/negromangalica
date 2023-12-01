"use client";

import style from "./Story.module.css";
import { Grand_Hotel } from "next/font/google";
import Button from "../UI/Buttons/Button";
import Image from "next/image";

import ourStoryCoverPhoto from "../../../public/assets/sections/temp.png";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h4: "Rólunk",
  p: "2023-ban nyitottuk meg Budapest első spanyol colmadoját a Bartók Béla úton, a Szent Gellért tér közvetlen közelében, és azóta rendületlenül igyekszünk megnyerni minden hozzánk betérő vendég szívét.",
  p1: "Bárunkban érlelt sonkák, ínycsiklanydozó sajtok, olívabogyók, pinchók, vermutok és egyéb finomságok várnak. Boltunk polcain pedig többek között izgalmas krémek és szószok, kiváló minőségű halkonzervek, borok, cavak és sörök sorakoznak, amelyek közvetlenül Spanyolországból érkeznek.",
  btn: "Étlapunk",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: "We opened the very first spanish colmado of Budapest on Bartók Béla Street, in the immediate vicinity of St. Gellért Square in 2023, and since then we have been tirelessly striving to win the hearts of every guest who enters our doors.",
  p1: "Our bar offers cured hams, mouth-watering cheeses, olives, pinchos, vermouths and other delicacies. On the shelves of our store you will find exciting creams and sauces, excellent quality canned fish, wines, cavas and beers, among others, all coming directly from Spain.",
  btn: "See the Menu",
  url: "/en/menu",
};

const Story = ({ lang }) => {
  const pText = `${!lang ? textContent.p : textContentEn.p}`;
  const pText2 = `${!lang ? textContent.p1 : textContentEn.p1}`;
  const h2Text = `${!lang ? textContent.h4 : textContentEn.h4}`;
  const btnUrl = `${!lang ? textContent.url : textContentEn.url}`;
  const btnName = `${!lang ? textContent.btn : textContentEn.btn}`;

  return (
    <section className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
            placeholder="blur"
            priority
            alt="Negro mangalica"
            src={ourStoryCoverPhoto}
          />
        </div>

        <div className={style.textContainer}>
          <h2 className={dosis.className}>{h2Text}</h2>
          <p>
            {pText} <br />
            <br />
            {pText2}
            <br /> <br />
          </p>
          <Button
            engColorPrefixBlue={lang ? true : false}
            btnBlue={true}
            url={btnUrl}
            name={btnName}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
