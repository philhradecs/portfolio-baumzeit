export default () => {
  if (sessionStorage.getItem('fonts')) {
    document.documentElement.classList.add('wf-active');
  }

  const WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: ['Titillium Web:300,400', 'Muli:300,400', 'Roboto Slab:300,400']
    },
    active: () => {
      sessionStorage.setItem('fonts', true);
    }
  })
}

