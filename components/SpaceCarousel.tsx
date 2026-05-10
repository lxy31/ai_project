"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/washcare-carousel-reception.png",
    alt: "高端宠物洗护点前台与透明分区",
    caption: "透明前台接待，洗前评估与分类建档"
  },
  {
    src: "/assets/washcare-carousel-care-zone.png",
    alt: "高端宠物洗护点分区护理操作区",
    caption: "护理、吹干、整理分区可视化"
  },
  {
    src: "/assets/washcare-carousel-finished-zone.png",
    alt: "高端宠物洗护点成品整理与等候区",
    caption: "成品整理与等候区，低噪音更安心"
  }
];

export default function SpaceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="space-carousel" aria-label="门店环境轮播">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure className="carousel-slide" key={slide.caption}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 620px) calc(100vw - 28px), min(1180px, calc(100vw - 40px))"
              className="carousel-image"
            />
            <figcaption className="photo-caption">{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
      <button
        className="carousel-btn prev"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(currentSlide - 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        className="carousel-btn next"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(currentSlide + 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <div className="carousel-dots" aria-label="选择门店环境图片">
        {slides.map((slide, index) => (
          <button
            className={`carousel-dot${index === currentSlide ? " active" : ""}`}
            type="button"
            aria-label={`第 ${index + 1} 张`}
            onClick={() => showSlide(index)}
            key={slide.caption}
          />
        ))}
      </div>
    </div>
  );
}
