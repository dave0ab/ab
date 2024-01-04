import React from 'react';

const HtmlToReact = () => {
  return (
    <React.Fragment>
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <title>App</title>
          <base href="/"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/x-icon" href="favicon.ico"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="assets/bootstrap.min.css"/>
        </head>
        <body>
          <app-root></app-root>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://kit.fontawesome.com/6161add08b.js"></script>
        </body>
      </html>
    </React.Fragment>
    );
}
export default HtmlToReact;