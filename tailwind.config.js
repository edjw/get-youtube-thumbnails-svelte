module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        full: "100%",
      },
      gridTemplateRows: {
        "auto-1-auto": "auto 1fr auto",
      },
    },
  },
  variants: {},
  plugins: [],
};
