import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render = () => (
    <Html lang="fa" dir="rtl">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
