"use client";

import React, { useState, useEffect } from "react";
import style from "./PhotoGallery.module.css";
import Image from "next/image";
import left from "../../../public/assets/icons/left.svg";
import right from "../../../public/assets/icons/right.svg";

import photo1 from "../../../public/assets/gallery/image00001.webp";
import photo2 from "../../../public/assets/gallery/image00002.webp";
import photo3 from "../../../public/assets/gallery/image00003.webp";
import photo4 from "../../../public/assets/gallery/image00004.webp";
import photo5 from "../../../public/assets/gallery/image00005.webp";
import photo6 from "../../../public/assets/gallery/image00006.webp";
import photo7 from "../../../public/assets/gallery/image00007.webp";
import photo8 from "../../../public/assets/gallery/image00008.webp";
import photo9 from "../../../public/assets/gallery/image00009.webp";
import photo10 from "../../../public/assets/gallery/image00010.webp";
import photo11 from "../../../public/assets/gallery/image00011.webp";
import photo12 from "../../../public/assets/gallery/image00012.webp";
import photo13 from "../../../public/assets/gallery/image00014.webp";



import galleryCloseIcon from "../../../public/assets/icons/close.svg";

const PhotoGallery = ({ galleryClose, clickedItem }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(clickedItem - 1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const photos = [
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
    {
      id: 13,
      alt: "Negro Mangalica geléria cover photos",
      url: photo13,
    },
  ];

  const currentPhoto = photos[currentPhotoIndex];

  const handleNextPhoto = () => {
    if (currentPhotoIndex < photos.length - 1 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(0);
      setImageLoaded(false);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(photos.length - 1);
      setImageLoaded(false);
    }
  };

  useEffect(() => {
    // Update the imageLoaded state when the photo changes
    setImageLoaded(false);
  }, [currentPhotoIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > 50) {
      handlePrevPhoto();
    } else if (touchDiffX < -50) {
      handleNextPhoto();
    }
  };

  return (
    <>
      <div className={style.container}>
        <div
          onClick={galleryClose}
          className={style.layerToCloseTheGallery}
        ></div>
        <div
          className={style.containerImage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            className={style.galleryClose}
            onClick={galleryClose}
            src={galleryCloseIcon}
            alt="bezár gomb"
            key={currentPhoto.id}
          />

          {imageLoaded ? (
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              priority
              onLoad={handleImageLoad}
            />
          ) : (
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              style={{ filter: "blur(10px)" }}
              onLoad={handleImageLoad}
            />
          )}

          <div className={style.clickHandelerContainer}>
            <Image
              width={15}
              height={15}
              onClick={handlePrevPhoto}
              alt="képgaléria gomb"
              src={left}
            ></Image>
            <p className={style.photoCounter}>
              {currentPhoto.id}/{photos.length}
            </p>
            <Image
              width={15}
              height={15}
              onClick={handleNextPhoto}
              alt="képgaléria gomb"
              src={right}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
