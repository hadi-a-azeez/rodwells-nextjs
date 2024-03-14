import { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "helmet";
import Document from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Ensure Helmet has access to relevant user-agent for optimal configuration
    const userAgent = ctx.req ? ctx.req.headers["user-agent"] : "";

    return {
      ...initialProps,
      helmet: Helmet.renderStatic({ userAgent }),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ... other meta tags and links ... */}
          <Helmet>
            <contentSecurityPolicy {...contentSecurityPolicy} />{" "}
            {/* Add your CSP configuration */}
            <frameguard sameorigin /> {/* Or deny to prevent framing */}
            <xFrameOptions deny />{" "}
            {/* You can choose between sameorigin or deny */}
            <xssProtection mode="block" />{" "}
            {/* Consider the implications before enabling */}
            <noSniff />
            <hidePoweredBy />
            <pragmaticCacheControl noCache="true" />{" "}
            {/* Adjust caching headers as needed */}
            {/* Add other headers as needed */}
          </Helmet>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
