export const slideHeadAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const topAnimation = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const bgAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const mounthAnimation = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
  },
};

export const oceanfrontkAnimation = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: {
      duration: 2,
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const textAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const trainImageAnimation = {
  hidden: {
    x: "-100%",
    opacty: 0,
    transition: {
      duration: 2,
      bounce: 0.4,
      type: "spring",
    },
  },
  show: {
    x: 0,
    opacty: 1,
    transition: {
      duration: 2,
      bounce: 0.4,
      type: "spring",
    },
  },
};

export const bookAnimation = {
  hidden: {
    y: 20,
    scale: 1.2,
  },
  show: {
    y: 0,
    scale: 1,
  },
};

export const leftCrabAnimation = {
  hidden: {
    x: -200,
    scale: 1.5,
    opacity: 0.2,
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
};

export const rightCrabAnimation = {
  hidden: {
    x: 500,
    scale: 1.5,
    opacity: 0.2,
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
};

export const rightAnimation = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    scaleX: -1,
    scaleY: 1,
  },
};

export const dragonAnimation = {
  hidden: {
    x: 1000,
    opacity: 0.1,
    scale: 0.2,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

export const leftImagAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const seashellAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 50,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      bounce: 0.7,
      type: "spring",
    },
  },
};

export const coinAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 50,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.3,
    },
  },
};

export const crab_6Aimation = {
  hidden: {
    x: "-100%",
    y: "-100%",
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2.5,
      delay: 0.2,
      type: "spring",
      bounce: 0.3,
    },
  },
};


export const crab_4Aimation = {
  hidden: {
    x: "100%",
    y: "-100%",
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 3,
      delay: 0.2,
      type: "spring",
      bounce: 0.3,
    },
  },
};