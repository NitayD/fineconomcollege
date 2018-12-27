import { withRouter } from 'next/router'
import App, { Container } from 'next/app'
import Layout from 'components/layout/Layout'
import ReactBreakpoints from 'react-breakpoints'
import { PageTransition } from 'next-page-transitions'

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
        <PageTransition timeout={300} classNames="page-transition">
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout>
            <Component {...pageProps} url={url} />
          </Layout>
        </ReactBreakpoints>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 100ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 100ms;
          }
          .page-transition-enter-done:after, .page-transition-exit-done {
            content: none !important;
          }
          [class^="page-transition"] {
            position: relative;
          }
          [class^="page-transition"]:after {
            content: '\\e838';
            font-family: "fontello";
            font-style: normal;
            font-weight: normal;
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 60px;
            animation: spin 3s infinite linear;
            z-index: 99999;
            color: #512DA8;
            background-color: white;
            padding: 15px;
            border-radius: 50%;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRouter(MyApp)
