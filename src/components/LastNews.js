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
      ветерана ВОВ Королева М.К.  С Михаилом Кондратьевичем наши студенты
      дружат около 10 лет. Ежегодно учащиеся колледжа
      посещают его на дому и оказывает посильную помощь...`
  },
  {
    img: 'https://tengrinews.kz/userdata/news/2015/news_273891/thumb_m/photo_156306.jpg',
    date: '10.08.2017',
    title: 'Наш колледж навестил ветерана ВОВ Королева М.К.',
    desc: `В рамках мероприятий, посвященных Дню Победы 
      студсовет колледжа совместно с акиматом Ауэзовского района посетил
      ветерана ВОВ Королева М.К.  С Михаилом Кондратьевичем наши студенты
      дружат около 10 лет. Ежегодно учащиеся колледжа
      посещают его на дому и оказывает посильную помощь...`
  },
  {
    img: 'https://tengrinews.kz/userdata/news/2015/news_273891/thumb_m/photo_156306.jpg',
    date: '10.08.2017',
    title: 'Наш колледж навестил ветерана ВОВ Королева М.К.',
    desc: `В рамках мероприятий, посвященных Дню Победы 
      студсовет колледжа совместно с акиматом Ауэзовского района посетил
      ветерана ВОВ Королева М.К.  С Михаилом Кондратьевичем наши студенты
      дружат около 10 лет. Ежегодно учащиеся колледжа
      посещают его на дому и оказывает посильную помощь...`
  },
]

export default class LastNews extends PureComponent {
  getNews (newsDate, key) {
    return <News img={newsDate.img} date={newsDate.date} title={newsDate.title} desc={newsDate.desc}/>;
  }
  render () {
    return (
      <section className="lastnews">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="lastnews__title">Последние события в жизни колледжа</h2>
          </div>
          <div className="row">
            {testDate.map((news, index)=>this.getNews(news, String(index) + news.title))}
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
    <div className="col-12 col-md-6">
      <div className="lastnews__news">
        <h4 className="lastnews__news__date">
          { date }
        </h4>
        <figure className="lastnews__news__img">
          <img src={ img } alt={ title }/>
        </figure>
        <h3 className="lastnews__news__title">
          { title }
        </h3>
        <p className="lastnews__news__desc">
          { desc }
        </p>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}