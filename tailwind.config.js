/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "550px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
      "2xl": "1880px",
    },
    extend: {
      backgroundImage: {
        "hero-section": "url(/static/hero.png)",
        "standard-bg": "url(/static/standard_ticket.png)",
        "premium-bg": "url(/static/premium_ticket.png)",
        "vip-bg": "url(/static/vip_ticket.png)",
        "exclusive-bg": "url(/static/exclusive_ticket.png)",
        "modal-bg": "url(/static/modal_image.png)",
      },
      colors: {
        primary: "#FFC107",
        success: "#0a6b55",
        secondary: "#FFA000",
        grey_text: "#CCCCCC",
      },
      boxShadow: {
        card: "0px 16px 32px rgba(36, 36, 36, 0.24)",
        dialog: "0px 12px 32px rgba(36, 36, 36, 0.24)",
      },
    },
  },
  plugins: [],
};
