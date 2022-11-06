import { cls } from "@/utils/cls";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Carousel {
  imageURLs: string[];
}

const variants = (imageSize: number) => ({
  initial: (direction: number) => ({
    x: direction > 0 ? imageSize : -imageSize,
  }),
  animate: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -imageSize : imageSize,
  }),
});

export default function Carousel({ imageURLs }: Carousel) {
  const [nowIndex, setNowIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [iamgeSize, setImageSize] = useState(500);
  const figureRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (figureRef.current == null) return;
    setImageSize(figureRef.current.clientWidth);
  }, [figureRef]);

  const onSlotClick = (slotNum: number) => () => {
    figureRef.current!.style.overflow = "hidden";
    if (nowIndex - slotNum < 0) setDirection(1);
    else setDirection(-1);
    setNowIndex(slotNum);
  };

  return (
    <figure className="relative h-full w-full" ref={figureRef}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          ref={imageRef}
          src={imageURLs[nowIndex]}
          key={imageURLs[nowIndex]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            ease: "linear",
          }}
          variants={variants(iamgeSize)}
          custom={direction}
          className="absolute left-0 top-0 h-full w-full rounded-md object-cover"
        ></motion.img>
      </AnimatePresence>
      <section className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 space-x-3">
        {imageURLs.map((_, index) => (
          <button
            key={index}
            onClick={onSlotClick(index)}
            className={cls(
              nowIndex === index
                ? "border-gray-100 bg-gray-700"
                : "border-gray-700 bg-gray-100",
              "h-4 w-4 rounded-full border-2"
            )}
          ></button>
        ))}
      </section>
    </figure>
  );
}
