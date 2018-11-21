let projectData = [
  {
    image: '/static/assets/drummachine400x300.png',
    title: 'Drum Machine',
    description: 'React project to demonstrate use of HTML5 Audio',
    link: 'https://codepen.io/Alba-C/full/MBEbNz/',
    featured: true,
    keywords: [
      'React',
      'JSX',
      'CSS',
      'Flexbox',
      'CSS Grid',
      'Audio',
      'ES6',
      'JavaScript',
      'HTML',
    ],
  },
  {
    image: '/static/assets/pomodoroClock400x300.png',
    title: 'Pomodoro Clock',
    description:
      'React project working wth setInterval() and HTML5 Audio',
    link: 'https://codepen.io/Alba-C/full/zLJpjW/',
    featured: true,
    keywords: [
      'React',
      'JSX',
      'CSS',
      'Flexbox',
      'CSS Grid',
      'CSS Animation',
      'HTML',
      'Audio',
      'ES6',
      'JavaScript',
    ],
  },
  {
    image: '/static/assets/calculator400x300.png',
    title: 'Calculator',
    description:
      'React project using Flexbox, Key Events and math',
    link: 'https://codepen.io/Alba-C/full/ajYGYb/',
    keywords: ['React', 'JSX', 'CSS', 'Flexbox', 'ES6', 'HTML', 'JavaScript'],
  },
  {
    image: '/static/assets/d3ChoroplethMap400x300.png',
    title: 'D3.js Choropleth Map',
    description: 'Data Visualization using D3.js and Async REST API Calls',
    link: 'https://codepen.io/Alba-C/full/BOKgVX/',
    featured: true,
    keywords: ['D3.js', 'ES6', 'REST API', 'Data Viz', 'JavaScript'],
  },
  {
    image: '/static/assets/d3Heatmap400x300.png',
    title: 'D3.js Heatmap',
    description: 'Data Visualization using D3.js and Async REST API',
    link: 'https://codepen.io/Alba-C/full/MqaYER/',
    featured: true,
    keywords: ['D3.js', 'ES6', 'REST API', 'Data Viz', 'JavaScript'],
  },
  {
    image: '/static/assets/d3Treemap400x300.png',
    title: 'D3.js Treemap',
    description: 'Data Visualization using D3.js and Async REST API',
    link: 'https://codepen.io/Alba-C/full/KxaRop/',
    keywords: ['D3.js', 'ES6', 'REST API', 'Data Viz', 'JavaScript'],
  },
  {
    image: '/static/assets/d3BarChart400x300.png',
    title: 'D3.js Bar Chart',
    description: 'Data Visualization using D3.js and Async REST API',
    link: 'https://codepen.io/Alba-C/full/QVbEGM/',
    keywords: [
      'D3.js',
      'ES6',
      'REST API',
      'Data Viz',
      'JavaScript',
      'CSS Animation',
    ],
  },
  {
    image: '/static/assets/d3ScatterPlotGraph400x300.png',
    title: 'D3.js Scatter Plot Graph',
    description: 'Data Visualization using D3.js and Async REST API',
    link: 'https://codepen.io/Alba-C/full/BONNQg/',
    keywords: ['D3.js', 'ES6', 'REST API', 'Data Viz', 'JavaScript'],
  },
  {
    image: '/static/assets/quoteMachine400x300.png',
    title: 'Random Quote Machine',
    description:
      'Simple project to make ajax calls, receive random quotes and send to twitter',
    link: 'https://codepen.io/Alba-C/full/ZrmKzN/',
    keywords: ['JQuery', 'HTML', 'CSS', 'BootStrap', 'Responsive'],
  },
  {
    image: '/static/assets/twitchAPI400x300.png',
    title: 'Twitch API Viewer ',
    description: 'Use the Twitch API to view User Status',
    link: 'https://codepen.io/Alba-C/full/geaOyq/',
    keywords: ['BootStrap', 'HTML', 'CSS', 'REST API', 'JQuery'],
  },
  {
    image: '/static/assets/wikipediaViewer400x300.png',
    title: 'Wikipedia API Viewer',
    description: 'Use the Wikipedia Api to create a simple search bar',
    link: 'https://codepen.io/Alba-C/full/bvNwvR/',
    keywords: [
      'JQuery',
      'HTML',
      'CSS',
      'REST API',
      'CSS Animation',
      'Responsive',
    ],
  },
  {
    image: '/static/assets/weatherApp400x300.png',
    title: 'Weather App',
    description:
      'Use weather API to create simple Weather Dashboard parsing received JSON making backround images conditional based on forecast',
    link: 'https://codepen.io/Alba-C/full/eVoxwQ/',
    keywords: [
      'JQuery',
      'HTML',
      'CSS',
      'JavaScript',
      'REST API',
      'BootStrap',
      'Responsive',
    ],
  },
  {
    image: '/static/assets/recalcCalc400x300.png',
    title: 'Calculator',
    description: 'Four function basic math with history display and backspace.',
    link: 'http://www.recalcapp.com',
    keywords: ['Swift', 'iOS', 'Mobile', 'Xcode'],
  },

  {
    image: '/static/assets/recalcDate400x300.png',
    title: 'Date Calculator',
    description:
      'Calculating calendar days left in a listing agreement or business days until your next vacation is complete in a few simple taps with the Date Calculator.',
    link: 'http://www.recalcapp.com',
    featured: true,
    keywords: ['Swift', 'iOS', 'Mobile', 'Xcode'],
  },

  {
    image: '/static/assets/recalcMort400x300.png',
    title: 'Mortgage Calculator',
    description:
      'Super Fast with a clean design and intuitive layout. Includes monthly payments and amortization table',
    link: 'http://www.recalcapp.com',
    keywords: ['Swift', 'iOS', 'Mobile','Xcode'],
  },
  {
    image: '/static/assets/recalcProrate400x300.png',
    title: 'Prorate Calculator',
    description:
      'Take the guesswork out of prorating monthly or annual expenses. The Prorate Calculator uses a full screen calendar to enter dates quickly and accurately.',
    link: 'http://www.recalcapp.com',
    keywords: ['Swift', 'iOS', 'Mobile', 'Xcode'],
  },
  {
    image: '/static/assets/markdownPreviewer400x300.png',
    title: 'Markdown Previewer',
    description:
      'Write Markdown in the editor and see it rendered on the right.  Uses the MarkedJS Library to compile to HTML.',
    link: 'https://codepen.io/Alba-C/full/ZjBvwY/',
    keywords: ['HTML', 'Flexbox', 'JavaScript', 'CSS', 'Responsive'],
  },
  {
    image: '/static/assets/technicalDocument400x300.png',
    title: 'Technical Document',
    description:
      'BootStrap Project creating a Single Page Technical Doc using <code> tags  ',
    link: 'https://codepen.io/Alba-C/full/yEjGoa/',
    keywords: ['BootStrap', 'HTML', 'CSS'],
  },
  {
    image: '/static/assets/reaNewYear400x300.png',
    title: 'Real Estate School',
    description:
      'Wordpress site for a real estate school, uses Woo-Commerce for product listings and has Square and Paypal payment integration',
    link: 'http://www.RealEstateAcademyOfOrlando.com ',
    featured: true,
    keywords: [
      'Wordpress',
      'CSS',
      'E Commerce',
      'Responsive',
      'Websites',
      'Video',
    ],
  },
  {
    image: '/static/assets/recalcApp400x300.png',
    title: 'iOS App Product Page',
    description: 'Product landing page for an iOS app, including embed video',
    link: 'http://www.recalcapp.com ',
    keywords: [
      'BootStrap',
      'CSS',
      'HTML',
      'Responsive',
      'Websites',
      'Flexbox',
      'Video',
    ],
  },
  {
    image: '/static/assets/peridot400x300.png',
    title: 'Real Estate Company',
    description: 'Brochure style website for local real estate agent',
    link: 'http://www.peridotrealestate.com ',
    keywords: ['Wordpress', 'CSS', 'Responsive', 'Websites'],
  },
  {
    image: '/static/assets/caPortfolio400x300.png',
    title: 'Web Dev Portfolio',
    description:
      'My personal portfolio site, built with Gatsby, React and CSS-in-JS using Emotion',
    link: 'http://www.peridotrealestate.com ',
    featured: true,
    keywords: [
      'Gatsby',
      'React',
      'JSX',
      'ES6',
      'Emotion',
      'CSS-in-JS',
      'Responsive',
      'Websites',
      'JavaScript',
      'Flexbox',
    ],
  },
  {
    image: '/static/assets/spotAutoVolume400x300.png',
    title: 'Spotify Auto Volume',
    description:
      'Node JS app that listens for ads on the Spotify desktop for Mac app and automatically lowers the volume until the ads end.',
    link: 'https://github.com/Alba-C/SpotifyAutoVolume',
    featured: true,
    keywords: ['Node JS', 'JavaScript', 'ES6'],
  },
  {
    image: '/static/assets/emberQuiz400x300.png',
    title: 'Ember Quiz',
    description: 'CRUD App using Ember 3.5 and Firebase',
    link: 'https://emberquiz.firebaseapp.com/',
    featured: true,
    keywords: [
      'Ember',
      'Handlebars',
      'CSS',
      'Flexbox',
      'Firebase',
      'ES6',
      'JavaScript',
      'HTML',
      'BootStrap'
    ],
  },
]
export default projectData

// const empty = {
//   image: "./assets/    400x300.png",
//   title: "Title",
//   description:
//     "lorem lorem loren",
//   link: " ",
//   keywords: ["##", "##", "##"]
//}
