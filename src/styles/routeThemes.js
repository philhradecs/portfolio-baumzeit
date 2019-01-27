export default {
  '/': {
    pathname: 'home',
    wide: true,
    navImg: 'home.jpg', 
    pageView: false,
    contentBg: '#757865',
    colorHighlight: '#9fb55e'
  },
  '/404': {
    pathname: '404',
    wide: true,
    navImg: '404.jpg', 
    pageView: false,
    contentBg: 'blue',
    colorHighlight: 'darkMagenta'
  },
  '/contact': {
    pathname: 'contact',
    wide: false,
    navImg: 'contact.jpg', 
    pageView: true,
    contentBg: '#E2D0A8',
    colorHighlight: '#5B9791'
  },
  '/cv': {
    pathname: 'cv',
    wide: false,
    navImg: 'cv.jpg', 
    pageView: true,
    contentBg: '#5B9791',
    colorHighlight: '#5B9791'
  },
  '/mind': {
    pathname: 'mind',
    wide: false,
    navImg: 'mind.jpg', 
    pageView: true,
    contentBg: '#a9b5a1',
    colorHighlight: '#a9b5a1'
  },
  '/projects': {
    pathname: 'projects',
    wide: false,
    navImg: 'projects.jpg', 
    pageView: false,
    contentBg: '#e5decc',
    colorHighlight: '#aaa'
  },
  'default': {
    pathname: 'default',
    wide: false,
    navImg: 'http://fabrilabo.ro/wp-content/uploads/2015/11/default-image2.jpg',
    pageView: true,
    contentBg: 'thistle',
    colorHighlight: 'darkMagenta'
  }
}