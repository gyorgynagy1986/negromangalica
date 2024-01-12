"use client";

import React from "react";
import Image from "next/image";
import style from "./PhotoGallery.module.css";

import photo1 from "../../../public/assets/gallery/covers/image00001.webp";
import photo2 from "../../../public/assets/gallery/covers/image00002.webp";
import photo3 from "../../../public/assets/gallery/covers/image00003.webp";
import photo4 from "../../../public/assets/gallery/covers/image00004.webp";
import photo5 from "../../../public/assets/gallery/covers/image00005.webp";
import photo6 from "../../../public/assets/gallery/covers/image00006.webp";
import photo7 from "../../../public/assets/gallery/covers/image00007.webp";
import photo8 from "../../../public/assets/gallery/covers/image00008.webp";
import photo9 from "../../../public/assets/gallery/covers/image00009.webp";
import photo10 from "../../../public/assets/gallery/covers/image00010.webp";
import photo11 from "../../../public/assets/gallery/covers/image00011.webp";
import photo12 from "../../../public/assets/gallery/covers/image00012.webp";


const photoGalleryCoverPhots = [
  {
    id: 1,
    alt: "Negro Mangalica geléria cover photos",
    url: photo1,
  },
  {
    id: 2,
    alt: "Negro Mangalica geléria cover photos",
    url: photo2,
  },
  {
    id: 3,
    alt: "Negro Mangalica geléria cover photos",
    url: photo3,
  },
  {
    id: 4,
    alt: "Negro Mangalica geléria cover photos",
    url: photo4,
  },
  {
    id: 5,
    alt: "Negro Mangalica geléria cover photos",
    url: photo5,
  },
  {
    id: 6,
    alt: "Negro Mangalica geléria cover photos",
    url: photo6,
  },
  {
    id: 7,
    alt: "Negro Mangalica geléria cover photos",
    url: photo7,
  },
  {
    id: 8,
    alt: "Negro Mangalica geléria cover photos",
    url: photo8,
  },
  {
    id: 9,
    alt: "Negro Mangalica geléria cover photos",
    url: photo9,
  },
  {
    id: 10,
    alt: "Negro Mangalica geléria cover photos",
    url: photo10,
  },
  {
    id: 11,
    alt: "Negro Mangalica geléria cover photos",
    url: photo11,
  },
  {
    id: 12,
    alt: "Negro Mangalica geléria cover photos",
    url: photo12,
  },
];

const CoverPhotoItems = ({ photoGalleryHandler }) => {
  const handleClick = (id) => {
    photoGalleryHandler(id);
  };

  return (
    <>
      {photoGalleryCoverPhots.map((coverPhoto, idex) => (
        <div
          onClick={() => handleClick(coverPhoto.id)}
          className={style.hoverProperty}
          key={idex}>
          <Image
            // priority
            placeholder="blur"
            onClick={() => handleClick(coverPhoto.id)}
            alt={coverPhoto.alt}
            src={coverPhoto.url}
          ></Image>
        </div>
      ))}
    </>
  );
};

export default CoverPhotoItems;
