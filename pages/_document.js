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
          <link rel="stylesheet" href="/static/css/normalize.css"/>
          <link rel="stylesheet" href="/static/libs/bootstrap/bootstrap-grid.min.css"/>
          <link rel="stylesheet" href="/static/css/global.css"/>
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
