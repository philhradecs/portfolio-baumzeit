export default () => {
  if (sessionStorage.getItem('fonts')) {
    document.documentElement.classList.add('wf-active');
  }

  import('webfontloader').then(WebFont => {
    WebFont.load({
      google: {
        families: ['Titillium Web:300,400', 'Muli:300,400', 'Roboto Slab:300']
      },
      active: () => {
        sessionStorage.setItem('fonts', true);
      }
    })
  })
}

