import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

const baseSeo = {
  title: 'Финансово Экиномический Колледж',
  desc: 'Описание сайта колледжа ещё не готово',
  img: 'http://www.eurazir.kz/Logo_EInAEM.png'
}

// from https://github.com/zeit/next.js/edit/canary/examples/with-react-helmet/pages/_document.js
export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    const { title, desc, img } = baseSeo
    return (
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>{title}</title>
        <meta property="title" content={title}/>
        <meta property="og:title" content={title}/>

        <meta property="og:type" content="website"/>
        <meta property="type" content="website"/>

        <meta property="description" content={desc}/>
        <meta name="description" content={desc}/>
        <meta property="og:description" content={desc}/>
        
        <meta property="og:image" content={img}/>
        <meta property="image" content={img}/>
      </Helmet>
    )
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicons/apple-touch-icon.png?v1=7koRgvAMbN">
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicons/favicon-32x32.png?v1=7koRgvAMbN">
          <link rel="icon" type="image/png" sizes="192x192" href="/static/img/favicons/android-chrome-192x192.png?v1=7koRgvAMbN">
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicons/favicon-16x16.png?v1=7koRgvAMbN">
          <link rel="manifest" href="/static/img/favicons/site.webmanifest?v1=7koRgvAMbN">
          <link rel="mask-icon" href="/static/img/favicons/safari-pinned-tab.svg?v1=7koRgvAMbN" color="#5bbad5">
          <link rel="shortcut icon" href="/static/img/favicons/favicon.ico?v1=7koRgvAMbN">
          <meta name="msapplication-TileColor" content="#7c4dff">
          <meta name="msapplication-TileImage" content="/static/img/favicons/mstile-144x144.png?v1=7koRgvAMbN">
          <meta name="msapplication-config" content="/static/img/favicons/browserconfig.xml?v1=7koRgvAMbN">
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="stylesheet" href="/static/css/normalize.css"/>
          <link rel="stylesheet" href="/static/libs/bootstrap/bootstrap-grid.min.css"/>
          <link rel="stylesheet" href="/static/css/global.css"/>
          <link rel="stylesheet" href="/static/img/icons/fontello/css/fontello.css"/>
          <link rel="stylesheet" href="/static/img/icons/fontello/css/animation.css"/>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
