/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const primaryColors = {
  "primary-50": "#F2E7FE",
  "primary-100": "#DBB2FF",
  "primary-200": "#BB86FC",
  "primary-300": "#985EFF",
  "primary-400": "#7F39FB",
  "primary-500": "#6200EE",
  "primary-600": "#5600E8",
  "primary-700": "#3700B3",
  "primary-800": "#30009C",
  "primary-900": "#23036A",
};

const secondaryColors = {
  "secondary-50": "#C8FFF4",
  "secondary-100": "#70EFDE",
  "secondary-200": "#03DAC5",
  "secondary-300": "#00C4B4",
  "secondary-400": "#00B3A6",
  "secondary-500": "#01A299",
  "secondary-600": "#019592",
  "secondary-700": "#018786",
  "secondary-800": "#017374",
  "secondary-900": "#005457",
};

// also on error
const onPrimaryTextColors = {
  "on-primary-em": "rgba(255,255,255,1)",
  "on-primary-md-em": "rgba(255,255,255,0.74)",
  "on-primary-disabled": "rgba(255,255,255,0.38)",
};

// also on background and surface
const onSecondaryTextColors = {
  "on-secondary-em": "rgba(0,0,0,0.87)",
  "on-secondary-md-em": "rgba(0,0,0,0.60)",
  "on-secondary-disabled": "rgba(0,0,0,0.38)",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      phone: "600px",
      tablet: "1024px",
      laptop: "1440px"
    },
    colors: {
      ...primaryColors,
      ...secondaryColors,
      ...onPrimaryTextColors,
      ...onSecondaryTextColors,
      background: "#FFFFFF",
      surface: "#FFFFFF",
      error: "#B00020",
      outline: "rgba(0,0,0,12)",
    },
    fontSize: {
      h1: [
        "96px",
        {
          lineHeight: "112px",
          letterSpacing: "-1.5px",
          fontWeight: "300",
        },
      ],
      h2: [
        "60px",
        {
          lineHeight: "72px",
          letterSpacing: "-0.5px",
          fontWeight: "300",
        },
      ],
      h3: [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "400",
        },
      ],
      h4: [
        "34px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      h5: [
        "24px",
        {
          lineHeight: "24px",
          letterSpacing: "0.18px",
          fontWeight: "400",
        },
      ],
      h6: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "0.15px",
          fontWeight: "500",
        },
      ],
      sub1: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.15px",
          fontWeight: "400",
        },
      ],
      sub2: [
        "14px",
        {
          lineHeight: "24px",
          letterSpacing: "0.1px",
          fontWeight: "500",
        },
      ],
      "body-1": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.5px",
          fontWeight: "400",
        },
      ],
      "body-2": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0.25px",
          fontWeight: "400",
        },
      ],
      button: [
        "14px",
        {
          lineHeight: "16px",
          letterSpacing: "1.25px",
          fontWeight: "500",
        },
      ], // text-transform: uppercase
      caption: [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "0.4px",
          fontWeight: "400",
        },
      ],
      overline: [
        "10px",
        {
          lineHeight: "16px",
          letterSpacing: "1.5px",
          fontWeight: "500",
        },
      ], // text-transform: uppercase
    },
    boxShadow: {
      1: "0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
      2: "0px 1px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)",
      3: "0px 1px 8px 0px rgba(0, 0, 0, 0.20), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.14)",
      4: "0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14)",
      6: "0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
      8: "0px 5px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 14px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.14)",
      9: "0px 5px 6px 0px rgba(0, 0, 0, 0.20), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 9px 12px 0px rgba(0, 0, 0, 0.14)",
      12: "0px 7px 8px 0px rgba(0, 0, 0, 0.20), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 12px 17px 0px rgba(0, 0, 0, 0.14)",
      16: "0px 8px 10px 0px rgba(0, 0, 0, 0.20), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
      24: "0px 11px 15px 0px rgba(0, 0, 0, 0.20), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 24px 38px 0px rgba(0, 0, 0, 0.14)",
    },
    extend: {
      spacing: {
        xsm: "4px",
        sm: "6px",
        base: "8px",
        md: "10px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
