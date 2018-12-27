import React, { PureComponent } from 'react'
import ParsedDate               from 'components/Universal/ParsedDate'
import ParsedHTML               from 'components/Universal/ParsedHTML'
import Btn                      from 'components/Universal/Btn'
import CategoryBtn              from 'components/news/CategoryBtn'
import NewsItemPreview          from './NewsItemPreview'
import { connect }              from 'react-redux'
import axios                    from 'axios'
import styles                   from 'styles/news/NewsItem.scss'
import SEO                      from 'components/Universal/SEO'

class NewsItem extends PureComponent {
  renderNews(item) {
    return (
      <div className="row" key={item._id}>
        <NewsItemPreview data={item}/>
      </div>
    )
  }
  render () {
    const { data } = this.props
    return (
      <section>
        <SEO
            title='Блок Финансово Экономического колледжа'
            description='Здесь публикуются самые свежие новости из студенческо жизни в колледже'/>
          <div className="container">
            {
              data.length > 0
              ?
                data.map(this.renderNews)
              :
                <div className="">Записей пока нет, <s>следите за обновлениями в Telegram Bot'e</s></div>
            }
          </div>
          <style jsx>{`
              img {
                  max-width: 100%;
              }
              .container > .row {
                  margin-top: 15px;
              }
          `}</style>
          <style jsx>{ styles }</style>
      </section>
    )
  }
}

const Categoryes = ({ data }) => (
    <div className="category">
        {data.map((el) => (
            <CategoryBtn id={el} key={el}/>
        ))}
        <style jsx>{ styles }</style>
    </div>
)

function mapStateToProps({ news_page }) {
    return {
        data: news_page.toJS().allNewsData
    }
}

export default connect(mapStateToProps)(NewsItem)
