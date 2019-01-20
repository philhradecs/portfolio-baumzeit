export default () => {
  if (sessionStorage.getItem('fonts')) {
    document.documentElement.classList.add('wf-active');
  }

  import('webfontloader').then(WebFont => {
    WebFont.load({
      google: {
        families: ['Titillium Web:400,600']
      },
      active: () => {
        sessionStorage.setItem('fonts', true);
      }
    })
  })
}

