module.exports = {
  content: ["./index.html","./public/js/*.js","./public/js/main/*.js",,"./public/js/misc/*.js","./public/js/secondary*.js"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
    },
    screens: {
      '13mini': '375px',

      '12pro': '390px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
},
  plugins: [],
}
