"use client";

import style from "./Story.module.css";
import { Grand_Hotel } from "next/font/google";
import Button from "../UI/Buttons/Button";
import Image from "next/image";

import ourStoryCoverPhoto from "../../../public/assets/sections/aboutus.jpg";

const dosis = Grand_Hotel({ subsets: ["latin"], weight: "400" });

const textContent = {
  h4: "Rólunk",
  p: "A hely névadóját, a mangalicát számos izgalmas variációban kóstolhatod meg Dohány utcai éttermünkben, legyen az egy gazdag sonkatál erdei gombákkal gazdagítva, vagy épp vörösborral készítve, dödöllével ölelve. Étlapunkon megtalálhatóak olyan hagyományos magyar ételek is, mint a gulyásleves, a csirkepaprikás vagy a túrógombóc. A klasszikus fogásokat újragondolva tálaljuk, kiemelt figyelmet fordítva a friss, minőségi alapanyagokra. Itallapunkon magyar borok, pálinkák és egyéb helyi specialitások széles választékát kínáljuk.",
  p1: "Ismerd meg a magyar konyha izgalmas világát, és vigyél magaddal egy különleges gasztronómiai élményt! Jó étvágyat kívánunk!",
  btn: "Étlapunk",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: "In the heart of the 7th district, our restaurant invites you to indulge in the namesake of the place – Mangalica pork – in various exciting variations, whether it's a rich ham plate or prepared with red wine. Traditional Hungarian favourites such as goulash, chicken paprikash, or cottage cheese dumplings are also featured in the menu. We present these classic dishes with a fresh perspective, while we are dedicated to using high-quality ingredients. Our drink menu boasts a wide selection of Hungarian wines, pálinkas, and other local specialties.",
  p1: "Explore the world of Hungarian cuisine and enjoy a memorable dining experience! Bon appétit!",
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
