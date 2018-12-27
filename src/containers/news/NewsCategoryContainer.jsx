import React, { Component } from 'react'
import CategoryBtn          from 'components/news/CategoryBtn'
import styles               from 'styles/news/NewsPage.scss'
import NewsContainer        from 'components/news/NewsContainer'
import Footer               from 'components/layout/Footer'
import axios                from 'axios'
import { initMainPageData } from 'actions/news_page'


class NewsCategoryContainer extends Component {
  static async getInitialProps ({ store, query }) {
    if ( !query.category ) { return }
    await axios.get(`${process.env.API_ADDRESS}/blog_with_category/${query.category}`)
    .then(({ data }) => {
      store.dispatch(initMainPageData(data))
    })
    .catch((err) => {
      console.log(err)
      console.dir(err)
    })
  }

  render () {
    const { category } = this.props.url.query
    return (
      <section>
        <div className="container">
          <div className="row title">
            <div className="col-sm-6 d-flex justify-content-start align-items-center">
              <h1>Блог</h1>
            </div>
            <div className="col-sm-6 d-flex justify-content-end align-items-center">
              <CategoryBtn keyId={category}/>
            </div>
          </div>
          <NewsContainer />
        </div>
        <style jsx>{`
          img {
            max-width: 100%;
            width: 100%;
          }
        `}</style>
        <style jsx>{ styles }</style>
      </section>
    )
  }
}

export default NewsCategoryContainer