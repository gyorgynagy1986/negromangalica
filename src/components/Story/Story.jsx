"use client";

import style from "./Story.module.css";
import { Grand_Hotel } from "next/font/google";
import Button from "../UI/Buttons/Button";
import Image from "next/image";

import ourStoryCoverPhoto from "../../../public/assets/sections/temp.png";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h4: "Rólunk",
  p: "A hely névadóját, a mangalicát számos izgalmas variációban kóstolhatod meg Dohány utcai éttermünkben. Étlapunkon megtalálhatóak az olyan hagyományos magyar ételek is, mint a gulyásleves, a csirkepaprikás vagy a túrógombóc. A klasszikus fogásokat modern köntösben kínáljuk, és kiemelt figyelmet szentelünk a friss, minőségi alapanyagoknak. Itallapunkon magyar borok, pálinkák és egyéb helyi specialitások széles választékát ajánljuk.",
  p1: "Merülj el a magyar gasztronómia varázslatos világában, és reméljük, hogy egy felejthetetlen gasztronómiai élménnyel gazdagodva távozol tőlünk. Jó étvágyat kívánunk!",
  btn: "Étlapunk",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: "You can savor the namesake of the place, Mangalica pork, in various exciting variations in our restaurant on Dohány Street. Our menu also includes traditional Hungarian dishes such as goulash soup, chicken paprikash, or cottage cheese dumplings. With a modern touch, we elevate these classic dishes, prioritizing fresh, high-quality ingredients. Find your favouries among a wide selection of Hungarian wines, pálinkas, and other local specialties",
  p1: "Immerse yourself in the enchanting world of Hungarian gastronomy, and we hope you leave with an unforgettable culinary experience. Bon appétit!",
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
            alt="Negro Mangalica"
            src={ourStoryCoverPhoto}
          />
        </div>

        <div className={style.textContainer}>
          <h3 className={dosis.className}>{h2Text}</h3>
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
