import React from 'react'

export default {
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: async () => ({
    title: 'Portfolio Baumzeit',
    lastBuilt: Date.now(),
  }),
  siteRoot: 'https://portfolio-baumzeit.netlify.app',
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang='en-US'>
      <Head>
        <title>{siteData.title}</title>
        <meta name='author' content='Philip Hradecsni' />
        <meta name='lastBuilt' content={siteData.lastBuilt} />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' type='text/css' href='/styles/fontAwesome.css' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
