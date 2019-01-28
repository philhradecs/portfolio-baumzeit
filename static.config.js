import React from 'react';

export default {
  plugins: ['react-static-plugin-styled-components'],
  siteRoot: 'https://portfolio-baumzeit.netlify.com',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/styles/fontAwesome.css" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
