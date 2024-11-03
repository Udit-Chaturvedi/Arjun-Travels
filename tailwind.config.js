/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include your file paths
  ],
  theme: {
    extend: {
      colors: {
        // You can customize your color palette here
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#F5A623',
      },
      spacing: {
        // Custom spacing can be added here
      },
      fontFamily: {
        // Custom fonts can be defined here
      },
    },
  },
  variants: {
    extend: {
      // Add any variants you want to enable
    },
  },
  plugins: [],
}
