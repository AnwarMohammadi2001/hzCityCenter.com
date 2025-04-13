export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// utils/framermotion/variants.js

export const contentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // فاصله زمانی بین انیمیشن‌های فرزند
    },
  },
};

export const contentItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // موج آرام‌تر بین کارت‌ها
      delayChildren: 0.2, // تأخیر اولیه قبل از شروع اولین کارت
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // از پایین‌تر بیاد
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // حرکت آرام‌تر
      ease: "easeInOut", // نرم و طبیعی
    },
  },
};
