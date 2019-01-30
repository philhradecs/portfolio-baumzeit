import React from 'react';

export default {
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: async () => ({
    title: 'Portfolio Baumzeit',
    lastBuilt: Date.now()
  }),
  siteRoot: 'https://portfolio-baumzeit.netlify.com',
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <title>{siteData.title}</title>
        <meta name="author" content="Philip Hradecsni" />
        <meta name="lastBuilt" content={siteData.lastBuilt} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/styles/fontAwesome.css" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
