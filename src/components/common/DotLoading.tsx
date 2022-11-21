import { domAnimation, LazyMotion, m } from "framer-motion";

const move = {
  move: (i: number) => {
    const delay = i * 0.25;
    return {
      y: [0, -5, 0],
      transition: {
        y: {
          delay,
          duration: 1,
          repeat: Infinity,
        },
      },
    };
  },
};

export default function DotLoading() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="flex h-full w-full items-center justify-center space-x-1"
        animate="move"
      >
        <m.div
          className="h-5 w-5 rounded-full bg-personalBlack"
          variants={move}
          custom={0}
        ></m.div>
        <m.div
          className="h-5 w-5 rounded-full bg-personalBlack"
          variants={move}
          custom={1}
        ></m.div>
        <m.div
          className="h-5 w-5 rounded-full bg-personalBlack"
          variants={move}
          custom={2}
        ></m.div>
      </m.div>
    </LazyMotion>
  );
}
