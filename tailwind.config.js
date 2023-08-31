/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '870px',
      // => @media (min-width: 768px) { ... }

      'lg': '1156px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        allpagebg: '#171A25',
        userBg: '#103B8E',
        contentBg: '#F9F9F9',
        buttonColor: '#1db56c',
        searchIcon: '#D3D4D9',
        storyTitle: '#1C62EB',
        storyPublishDateColor: '#A3A3A3',
        storyDate: '#50525a',
        otherPhotosBg: '#EBEBEB',
      }
    },
  },
  plugins: [],
}

