import React, { Component } from 'react'
import Error                from '/../pages/_error'
import styles               from 'styles/Logo.scss'
import Footer               from 'components/layout/Footer'
import NewsItem             from 'components/news/NewsItem'
import axios                from 'axios'

import { initItemPageData } from 'actions/news_page'

class NewsMainContainer extends Component {
  static async getInitialProps ({ store, query }) {
    if ( !query.slug ) { return }
    let res = { slug: query.slug }
    await axios.get(`${process.env.API_ADDRESS}/blog/${query.slug}`)
        .then(({ data }) => {
            store.dispatch(initItemPageData(data))
        })
        .catch((err) => {
          console.dir(err);
          res.errorCode = err.response ? response.status : 500
        })
    return res
  }

  render () {
    if (typeof this.props.errorCode === 'number') return <Error statusCode={this.props.errorCode} />
    return (
      <div>
        <NewsItem slug={ this.props.slug }/>
        <Footer/>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default NewsMainContainer