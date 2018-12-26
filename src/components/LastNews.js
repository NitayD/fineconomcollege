import React, { PureComponent } from 'react'
import { Link } from '/../routes'
import styles from 'styles/LastNews.scss'
import { connect } from 'react-redux'
import NewsDate from 'components/Universal/ParsedDate'
import ParsedHTML from 'components/Universal/ParsedHTML'

class LastNews extends PureComponent {
  getNews (newsDate, key) {
    if (newsDate.Состояниние === 'Опубликован') return <News data={newsDate} brief={newsDate.Содержимое.Короткое} key={key}/>
    else return ''
  }
  render () {
    return (
      <section className="lastnews">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="lastnews__title">Последние события в жизни колледжа</h2>
          </div>
          <div className="row lastnewses">
            {this.props.data.map((news, index)=>index < 3 ? this.getNews(news, news._id + news.slug) : '')}
          </div>
          <div className="row justify-content-end">
            <div className="col-auto lastnews__more">
              <Link href="/novosti">
                <a className="btn">
                  Больше новостей
                </a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </section>
    )
  }
}

const News = function (props) {
  const { Заголовок, Дата_публикации, Изображение, slug, Содержимое } = props.data
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link route='news_item' params={{slug: slug}}>
        <a>
          <div className="lastnews__news">
            <h4 className="lastnews__news__date">
              <NewsDate date={Дата_публикации} />
            </h4>
            <figure className="lastnews__news__img">
              <img src={ Изображение ? Изображение.secure_url : '' } alt={ Заголовок }/>
            </figure>
            <h3 className="lastnews__news__title">
              { Заголовок }
            </h3>
            <div className="lastnews__news__desc">
              <ParsedHTML text={Содержимое.Короткое}/>
            </div>
            <span className="lastnews__news__more">
              <span className="btn">
                подробнее
              </span>
            </span>
          </div>
        </a>
      </Link>
      <style jsx>{styles}</style>
    </div>
  )
}

function mapStateToProps({ main_news }) {
  return {
    data: main_news.toJS().data || []
  }
}

export default connect(mapStateToProps)(LastNews)