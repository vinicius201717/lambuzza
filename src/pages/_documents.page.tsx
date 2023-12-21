import { getCssText } from '@/styles'
import { Head, Html, Main, NextScript } from 'next/document'
;<Html>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@200;400;700&family=Roboto+Mono:wght@700&family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <style
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText }}
    ></style>
  </Head>

  <body>
    <Main />
    <NextScript />
  </body>
</Html>
