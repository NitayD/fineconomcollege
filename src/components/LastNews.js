import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/LastNews.scss'
import { connect } from 'react-redux'

class LastNews extends PureComponent {
  getNews (newsDate, key) {
    if (newsDate.state === 'published') return <News data={newsDate} brief={newsDate.content.brief} key={key}/>
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
              <Link href="/news">
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
  const { data, brief } = props
  const { title, publishedDate, image, slug } = data
  let time = publishedDate ? new Date(Date.parse(publishedDate)) : new Date(Date.now())
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link href={`/news/${slug}`}>
        <a>
          <div className="lastnews__news">
            <h4 className="lastnews__news__date">
              { `${time.getDate()} ${getMounthString(time.getMonth())} ${time.getFullYear()}` }
            </h4>
            <figure className="lastnews__news__img">
              <img src={ image ? image.secure_url : '' } alt={ title }/>
            </figure>
            <h3 className="lastnews__news__title">
              { title }
            </h3>
            <div className="lastnews__news__desc" dangerouslySetInnerHTML={{ __html: brief || '' }}/>
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

function getMounthString(mounthNumber) {
  switch (mounthNumber) {
    case 0: return 'Янв'
    case 1: return 'Фев'
    case 2: return 'Мар'
    case 3: return 'Апр'
    case 4: return 'Май'
    case 5: return 'Июн'
    case 6: return 'Июл'
    case 7: return 'Авг'
    case 8: return 'Сен'
    case 9: return 'Окт'
    case 10: return 'Ноя'
    case 11: return 'Дек'
    default: return ''
  }
}

function mapStateToProps({ main_news }) {
  return {
    data: main_news.toJS().data || []
  }
}

export default connect(mapStateToProps)(LastNews)