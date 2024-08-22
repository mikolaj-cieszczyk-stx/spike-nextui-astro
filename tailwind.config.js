import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "custom-green-hover": "rgba(0, 128, 117, 0.1)",
      "custom-green-pressed": "rgba(0, 128, 117, 0.2)",
      "green-600": "#008075",
      "green-700": "#006058",
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
