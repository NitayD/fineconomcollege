import React, { Component } from 'react'
import { Parallax }         from 'react-parallax'
import styles               from 'styles/Logo.scss'
import stylesPage           from 'styles/Mainpage.scss'
import NewsContainer        from 'components/news/NewsContainer'
import Footer               from 'components/layout/Footer'
import axios                from 'axios'
import { initMainPageData } from 'actions/news_page'


class NewsMainContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await axios.get(`${process.env.API_ADDRESS}/blog`)
    .then(({ data }) => {
      store.dispatch(initMainPageData(data))
    })
    .catch((err) => {
      console.log(err)
      console.dir(err)
    })
  }

  render () {
    return (
      <section>
        <div className="container">
          <NewsContainer />
        </div>
        <style jsx>{`
            img {
                max-width: 100%;
            }
        `}</style>
        <style jsx>{ styles }</style>
      </section>
    )
  }
}

export default NewsMainContainer