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
    contentBg: '#dbbda8',
    colorHighlight: '#5B9791'
  },
  '/cv': {
    pathname: 'cv',
    wide: false,
    navImg: 'cv.jpg', 
    pageView: true,
    contentBg: '#80A1A8',
    colorHighlight: '#C33B23'
  },
  '/mind': {
    pathname: 'mind',
    wide: false,
    navImg: 'mind.jpg', 
    pageView: true,
    contentBg: '#c6c6ad',
    colorHighlight: '#B32B7F'
  },
  '/projects': {
    pathname: 'projects',
    wide: false,
    navImg: 'projects.jpg', 
    pageView: false,
    contentBg: '#E5E2D9',
    colorHighlight: '#aaa'
  },
  'default': {
    pathname: 'default',
    wide: false,
    navImg: 'http://fabrilabo.ro/wp-content/uploads/2015/11/default-image2.jpg',
    pageView: true,
    contentBg: 'transparent',
    colorHighlight: 'darkMagenta'
  }
}