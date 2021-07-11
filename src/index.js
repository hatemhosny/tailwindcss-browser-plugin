import tailwindcss from "tailwindcss";

let defaultConfig = {
  mode: "jit",
  theme: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
export default {
  tailwindcss,
  defaultConfig,
};
