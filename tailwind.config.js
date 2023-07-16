/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screen:{
        'widescreen': {'raw': '(min-aspect-ration:3/2)'},
        'tallscreen': {'raw': '(min-aspect-ration:13/20)'}
      },
      keyframes:{
        '0%':{transform: 'scaleY(0)'},
        '80%':{transform: 'scaleY(1.2)'},
        '100%':{transform: 'scaleY(1)'}
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

