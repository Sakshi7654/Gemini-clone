// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Make sure this includes your JSX files
  theme: {
    extend: {
        keyframes:{
            fadeIn:{
                '0%':{opacity:0},
                '100%':{opacity:1},
            },
        },
        Animation:{
            fadeIn:'fadeIn 1.5s'

        }
    },
  },
  plugins: [],
};
