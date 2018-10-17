import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/LastNews.scss'

const testDate = [
  {
    img: 'https://tengrinews.kz/userdata/news/2015/news_273891/thumb_m/photo_156306.jpg',
    date: '10.08.2017',
    title: 'Наш колледж навестил ветерана ВОВ Королева М.К.',
    desc: `В рамках мероприятий, посвященных Дню Победы 
      студсовет колледжа совместно с акиматом Ауэзовского района посетил
      ветерана ВОВ Королева М.К.  С...`
  },
  {
    img: 'https://tengrinews.kz/userdata/news/2015/news_273891/thumb_m/photo_156306.jpg',
    date: '10.08.2017',
    title: 'Наш колледж навестил ветерана ВОВ Королева М.К.',
    desc: `В рамках мероприятий, посвященных Дню Победы 
      студсовет колледжа совместно с акиматом Ауэзовского района посетил
      ветерана ВОВ Королева М.К.  С Миха...`
  },
  {
    img: 'https://tengrinews.kz/userdata/news/2015/news_273891/thumb_m/photo_156306.jpg',
    date: '10.08.2017',
    title: 'Наш колледж навестил ветерана ВОВ Королева М.К.',
    desc: `В рамках мероприятий, посвященных Дню Победы 
      студсовет колледжа совместно с акиматом Ауэзовского района посетил
      вете...`
  },
]

export default class LastNews extends PureComponent {
  getNews (newsDate, key) {
    return <News img={newsDate.img} date={newsDate.date} title={newsDate.title} desc={newsDate.desc} key={key}/>;
  }
  render () {
    return (
      <section className="lastnews">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="lastnews__title">Последние события в жизни колледжа</h2>
          </div>
          <div className="row lastnewses">
            {testDate.map((news, index)=>this.getNews(news, String(index) + news.title))}
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
  const { img, date, title, desc } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="lastnews__news">
        <h4 className="lastnews__news__date">
          { date }
        </h4>
        <figure className="lastnews__news__img">
          <Link href="/news/1">
            <a>
              <img src={ img } alt={ title }/>
            </a>
          </Link>
        </figure>
        <h3 className="lastnews__news__title">
          <Link href="/news/1">
            <a>
              { title }
            </a>
          </Link>
        </h3>
        <Link href="/news/1">
          <a>
            <p className="lastnews__news__desc">
              { desc }
            </p>
          </a>
        </Link>
        <span className="lastnews__news__more">
          <Link href="/news/1">
            <a className="btn">
              подробнее
            </a>
          </Link>
        </span>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}