import { withRouter } from 'next/router'
import App, { Container } from 'next/app'
import Layout from 'components/layout/Layout'
import ReactBreakpoints from 'react-breakpoints'

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 992,
  desktop: 1366,
  desktopLarge: 1680,
  desktopWide: 1920,
}

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    const { asPath, pathname, query } = router
    const url = {
      asPath,
      pathname,
      query
    }
    return (
      <Container>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout>
            <Component {...pageProps} url={url} />
          </Layout>
        </ReactBreakpoints>
      </Container>
    )
  }
}

export default withRouter(MyApp)
