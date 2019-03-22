export default [

  {
    data: {
      title: 'Drinking around the world',
      description: "An interactive dot chart built with D3 comparing countries around the world in regards to the amount and type of alcoholic drink consumed per person and year. Every country is represented as a dot in the histogram with further data displayed as a self-updating, animated pie chart. An integrated search function with auto-suggestion allows users to search and show data for a specific country. The piechart smoothly transitions from one state to the next which provides a delightful experience especially when exploring the data by hovering over the country dots area. Legends, axes, titles and sources provide enough context for the data display to stand for itself."
    },
    img: 'global_drinks.png',
    url: {
      live: 'https://baumzeit.github.io/dataviz-global-drinks/',
      code: 'https://github.com/baumzeit/dataviz-global-drinks/'
    },
    tags: [ 'D3', 'UI', 'Animation', 'Data Visualization']
  },  

  {
    data: {
      title: 'Data Visualization Society Signups',
      description: "Upon signup for the Data Visualization Society, people were asked to self-evaluate their experience levels on a scale from 1 (no experience) to 5 (master) in the areas 'data', 'visualization' and 'society'. This visualization built with D3 uses data collected during the first 18 days since signup opened. Detailed data is shown contextually by hovering over different areas of the chart. The raw data is processed and restructured before DOM representations are created."
    },
    img: 'dvs_signups.jpg',
    url: {
      live: 'https://baumzeit.github.io/dataviz-dvs-signups/',
      code: 'https://github.com/baumzeit/dataviz-dvs-signups/'
    },
    tags: [ 'D3', 'UI', 'Data Visualization']
  },

  {
    data: {
      title: 'Personal Website / Portfolio',
      description: "Personal website built with React. The server side rendered single page application should provide an unobstrusive UI and communicate clearly and coherently a suitable range of relevant information about myself. Transitions across routes are realized using the reach router's API together with CSS Transition Groups for a seamless native-like user experience. The projects data is presented via a filter view mechanism for easy navigation of the catalog. Additional interactive content will be added soon."
    },
    img: 'portfolio_baumzeit.jpg',
    url: {
      live: 'https://portfolio-baumzeit.netlify.com/',
      code: 'https://github.com/baumzeit/portfolio-baumzeit/'
    },
    tags: ['React', 'Animated Routes', 'CSS3', 'Responsive Design']
  },

  {
    data: {
      title: 'Book Library App',
      description: "A responsive library app built using Express, Pug Templating and a MongoDB database. The functionality includes creating, reading, updating and deleting Author, Genre, Book and Book Copy Data. User input is validated and sanitized using express-validator. The client-side views are dynamically generated and represent any changes in the database."
    },
    img: 'express_library.jpg',
    url: {
      live: 'https://express-mongo-library.herokuapp.com/catalog',
      code: 'https://github.com/baumzeit/express-locallibrary'
    },
    tags: ['Node', 'Express', 'MongoDB', 'Mongoose', 'PugJS', 'Responsive Design', 'Bootstrap']
  },
  
  {
    data: {
      title: 'Music Art Explorer',
      description: "(work in progress) A user-friendly tool  to compare music cover art throughout different decades, genres and countries utilizing the Discogs API. Through distraction-free and customizable views of art and meta data, characteristics and patterns within and across visual cultures start to reveal themselves to the user who can generate a shareable url link for any particular view. Using React together with socket.io to communicate with the Node/Express server allows for real-time actualization of data and representation of state."
    },
    img: 'vmhx.jpg',
    url: {
      live: 'https://thread-bandana.glitch.me/',
      code: 'https://github.com/baumzeit/cover-art-explorer/'
    },
    tags: ['React', 'socket.io', 'API', 'UI']
  },
  
  {
    data: {
      title: 'Drum Machine',
      description: "A drum machine using the keyboard to play sounds on click. The application displays the name of the active sound and allows toggling between two sound sets as well as adjusting the volume. Built with React."
    },
    img: 'drum_machine.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-drum-machine/',
      code: 'https://github.com/baumzeit/fcc-drum-machine/'
    },
    tags: ['React', 'UI']
  },
  
  {
    data: {
      title: 'Tic Tac Toe with Gnome',
      description: "A beautiful Samorost themed Tic Tac Toe game that can be played with a human friend or against the little Gnome (AI). Players can enter their names and the game keeps track of the score. Written in HTML5, CSS3 and vanillaJS entirely. Proper and reliable management of the DOM throughout different application states as well as the design and development of the algorithms for the AI were very interesting and challenging aspects of this project."
    },
    img: 'tic_tac_toe.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-tic-tac-toe/',
      code: 'https://github.com/baumzeit/fcc-tic-tac-toe/'
    },
    tags: ['vanillaJS', 'DOM Manipulation', 'Algorithms', 'AI', 'CSS3']
  },

  
  {
    data: {
      title: 'Simon in Bali',
      description: "This is my interpretation of the classic Simon game embracing the beautiful aesthetics of Balinese culture. The game adds one note to the sequence that is played back to the player after successfully reproducing the previous one gradually increasing the speed. The game ends after round 20 rewarding the victorious player with a visual feedback and a short and nice winning melody that I came up with. Built with HTML5, CSS3, Javascript and a little sound library."
    },
    img: 'simon.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-simon-in-bali/',
      code: 'https://github.com/baumzeit/fcc-simon-in-bali/'
    },
    tags: ['vanillaJS', 'OOP', 'CSS3']
  },
  
  {
    data: {
      title: 'Pomodoro Clock',
      description: "The Clock allows the user to set individual times for work phase and break phase that will alternate between each other, respectively displaying the time remaining. Built with HTML5, CSS3 and vanillaJS."
    },
    img: 'pomodoro_clock.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-pomodoro-clock/',
      code: 'https://github.com/baumzeit/fcc-pomodoro-clock/'
    },
    tags: ['vanillaJS', 'DOM Manipulation']
  },
  
  {
    data: {
      title: 'Treemap Diagram',
      description: "An application that displays three different datasets in form of a treemap diagram where the relative size of the tile corresponds with the relative value of the datapoint within the set. Memoization is used to load each dataset only once per session. Metadata is displayd dynamically as a tooltip and the map's legends are generated from the dataset's internal categories allowing users to find corresponding areas in the diagram by hovering over any legend entry with the mouse. The currently rendered dataset can be changed by clicking the panel or using the arrow keys on the keyboard. The treemap is rendered accordingly based on the window size."
    },
    img: 'treemap.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-d3-treemap/',
      code: 'https://github.com/baumzeit/fcc-d3-treemap/'
    },
    tags: [ 'D3', 'Responsive Design', 'UI', 'Data Visualization']
  },
  
  {
    data: {
      title: 'Choropleth Map',
      description: "A data visualization created with D3 that mapping statistical education data to a topographical representation of the United States. The individual areas on the map are dynamically colored based on the data value using a color scale. Hovering over any part of the map shows a tooltip showing related metadata for the corresponding data point."
    },
    img: 'choropleth.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-d3-choropleth-map/',
      code: 'https://github.com/baumzeit/fcc-d3-choropleth-map/'
    },
    tags: ['D3', 'Cartography', 'Data Visualization']
  },
  
  {
    data: {
      title: 'Heat Map',
      description: "A data visualization created with D3 showing changes in the monthly global temperature average over time. Each data point is dynamically colored and allocated on the diagram area based on its temperature value, year, and month. A tooltip provides details about the corresponding data point on hover."
    },
    img: 'heat_map.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-d3-heat-map/',
      code: 'https://github.com/baumzeit/fcc-d3-heat-map/'
    },
    tags: ['D3', 'Data Visualization']
  },

  {
    data: {
      title: 'Scatterplot Chart',
      description: "A data visualization created with D3 showing doping allegations of the fastest riders in professional bicycle racing. The datapoints are colored accordingly revealing a tooltip with information on hover and redirecting to the corresponding rider's Wikipedia page on click."
    },
    img: 'scatterplot.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-d3-scatter-plot/',
      code: 'https://github.com/baumzeit/fcc-d3-scatter-plot/'
    },
    tags: ['D3', 'Data Visualization']
  },
  
  {
    data: {
      title: 'Responsive Survey Form',
      description: "A template for a responsive Survey Form that scales to devices of all sizes without compromising its well-balanced appearance. Accessibility requirements are met. Created using CSS3's Grid Layout, Flexbox and HTML5."
    },
    img: 'survey_form.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-survey-form/',
      code: 'https://github.com/baumzeit/fcc-survey-form/'
    },
    tags: ['Responsive Design', 'CSS3', 'Accessibility', 'HTML5']
  },

  {
    data: {
      title: 'Chat Room',
      description: "A chat room utilizing the Github authentication strategy based on client - server communication with socket.io. Sent messages are broadcasted to all connected sockets as well as information about users joining and leaving the chat room. Views are rendered using PugJS templating engine."
    },
    img: 'chat_room.jpg',
    url: {
      live: 'https://mountain-grape.glitch.me/',
      code: 'https://github.com/baumzeit/socket-chat-room/'
    },
    tags: ['Node', 'Express', 'passportJS', 'PugJS', 'socket.io']
  },
   
  {
    data: {
      title: 'URL Shortener',
      description: "A microservice allowing users to generate short URLs. On the backend the input URL validated both in terms of format using RegEx and availability using the Node dns module. A MongoDB database is accessed by the Node server to create or retrieve the record holding the pair of shortened and full url string. Asynchronous tasks and errors are handled using ES6 Promises syntax."
    },
    img: 'url_shortener.jpg',
    url: {
      live: 'https://spotless-viola.glitch.me/',
      code: 'https://github.com/baumzeit/fcc-url-shortener/'
    },
    tags: ['Node', 'Express', 'API', 'MongoDB', 'Mongoose']
  },
  
  {
    data: {
      title: 'Exercise Tracker',
      description: "A microservice allowing users to save their personal exercise log. After a unique user id is created, exercises can be saved to the database with various validated fields. An exercise log can be retrieved via GET request providing user id and, optionally, start and end date as well as a output limit."
    },
    img: 'exercise_tracker.png',
    url: {
      live: 'https://hazel-owner.glitch.me/',
      code: 'https://github.com/baumzeit/fcc-exercise-tracker'
    },
    tags: ['Node', 'Express', 'RESTful', 'API', 'MongoDB', 'Mongoose']
  },
  
  {
    data: {
      title: 'Twitch.tv Streamer',
      description: "An application providing a neat user interface for viewing, profile picture and live information aboute a set of Twitch streams based on the Twitch API. The list can be filtered by online and offline streams providing a direct link to the live stream or the streamer's profile respectively."
    },
    img: 'twitch_streamer.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-twitchtv-streamer/',
      code: 'https://github.com/baumzeit/fcc-twitchtv-streamer/'
    },
    tags: ['API', 'vanillaJS', 'UI']
  },
  
  {
    data: {
      title: 'Quote Generator',
      description: "A simple app showing design quotes from an API. A new random quote can be generated by the click of a button and quotes can be shared via Twitter."
    },
    img: 'quote_generator.jpg',
    url: {
      live: 'https://baumzeit.github.io/fcc-quote-generator/',
      code: 'https://github.com/baumzeit/fcc-quote-generator/'
    },
    tags: ['API', 'vanillaJS', 'UI']
  }
  
];
