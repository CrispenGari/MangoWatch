export const SERVER_BASE_URL = "https://mangowatch.onrender.com";

export const COLORS = {
  main: "#FEFAE0",
  primary: "#B1AB86",
  secondary: "#819067",
  tertiary: "#0A400C",
  black: "#000000",
  white: "#ffffff",
  red: "#FB2576",
  gray: "#758694",
  transparent: "transparent",
  gray100: "#DDDDDD",
  gray200: "#7F8CAA",
};

export const PLOT_COLORS = [
  "#FF6F3C",
  "#B22222",
  "#CA7842",
  "#537D5D",
  "#FFC107",
];

export const AUDIOS = {
  predicting: require("@/assets/sounds/diagnosing.wav"),
  results: require("@/assets/sounds/response.wav"),
};

export const Fonts = {
  "JosefinSans-Bold": require("@/assets/fonts/JosefinSans-Bold.ttf"),
  "JosefinSans-Regular": require("@/assets/fonts/JosefinSans-Regular.ttf"),
};
export const FONTS = {
  regular: "JosefinSans-Regular",
  bold: "JosefinSans-Bold",
};

export const STORAGE_NAME = {
  SETTINGS: "mango watch:settings",
  HISTORY: "mango watch:history",
  DAILY_TIP: "mango watch:tip",
  TIP_NOTIFICATION_FLAG_KEY: "mango watch:notification",
};

export const APP_NAME = "Mango Watch";

export const relativeTimeObject = {
  future: "in %s",
  past: "%s",
  s: "now",
  m: "1m",
  mm: "%dm",
  h: "1h",
  hh: "%dh",
  d: "1d",
  dd: "%dd",
  M: "1M",
  MM: "%dM",
  y: "1y",
  yy: "%dy",
};

export const LANDING_MESSAGES = [
  {
    id: 1,
    image: require("@/assets/images/0.png"),
    title: "Welcome to Mango Watch!",
    message:
      "Your AI-powered assistant for mango health — Mango Watch uses deep learning to detect diseases directly from mango fruit images. Early detection made simple.",
  },
  {
    id: 2,
    image: require("@/assets/images/1.png"),
    title: "Accurate Disease Prediction",
    message:
      "Mango Watch analyzes mango images using advanced AI models like MobileNetV3, providing fast and reliable disease detection results for your orchard.",
  },
  {
    id: 3,
    image: require("@/assets/images/2.png"),
    title: "Clear Results for Better Crop Care",
    message:
      "Get easy-to-understand results with visual indicators — from healthy to possibly or confirmed disease — helping you take informed action for your mango trees.",
  },
  {
    id: 4,
    image: require("@/assets/images/3.png"),
    title: "AI Support Anytime, Anywhere",
    message:
      "Whether in the field or remotely, Mango Watch puts advanced mango disease detection in your pocket — accessible through our secure mobile app.",
  },
];
