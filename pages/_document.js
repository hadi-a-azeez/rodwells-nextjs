import Document, { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const helmet = Helmet.renderStatic();
    return (
      <Html lang="en">
        <Head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
          />
          <meta http-equiv="X-Content-Type-Options" content="nosniff" />
          <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
          <meta
            http-equiv="Strict-Transport-Security"
            content="max-age=31536000; includeSubDomains; preload"
          />
          {/* Add other headers if necessary */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
