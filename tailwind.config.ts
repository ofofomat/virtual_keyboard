import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|input|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        // WHITES
        'light-white': '#F8F8F8',
        'white': '#FFFFFF',
        'off-white': '#F1F1F1',
        // GRAYS
        'light-gray': '#D1D5DB',
        'gray': '#6B7280',
        'dark-gray': '#374151',
        // BLACKS
        'light-black': '#1F2937',
        'black': '#000000',
        'dark-black': '#111827',
        // PRIMARY COLOR BLUE
        'light-blue': '#BFDBFE',
        'primary': '#3B82F6', // blue
        'dark-blue': '#1D4ED8',
        // COMPLEMENTARY COLOR ORANGE
        'light-orange': '#FF6F00',
        'secondary': '#FF5722', //orange
        'dark-orange': '#FF3D00',
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
