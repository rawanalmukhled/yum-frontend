module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["retro"],
  },
  plugins: [require("daisyui")],
};
