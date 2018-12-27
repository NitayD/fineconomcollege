import React, { Component } from 'react'
import axios                from 'axios'
import Slider               from "react-slick"
import PopupLink            from 'components/popup/PopupLink'
import { Link }             from '/../routes'
import ParsedHTML           from 'components/Universal/ParsedHTML'

import Footer               from 'components/layout/Footer'

import styles               from 'styles/abiturientam/Documenti.scss'

const optVerticalMain = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

const textData = `<p>
Студенческая жизнь – конечно, прежде всего, это учеба, получение знаний, овладение профессией. 
Но не только… Студенты колледжа – первые помощники администрации и педагогов во всех делах, при их помощи и поддержке проводятся практически все мероприятия и ведется разнообразная работа, 
в т.ч. профориентационная. 
Во многом силами студентов ведется и профориентационная работа: выступление агитбригады на Днях открытых дверей, подготовка и проведение дегустации молочных напитков и хлебных изделий, 
распространение информации о колледже, участие в Днях СПО и НПО и т.п.  – все это лишь часть работы студентов, входящих в Центр Профориентационной работы.
</p><p>
Огромную  помощь в организации общеколледжных мероприятий оказывает и комиссия досуга. При помощи студентов ежегодно проводятся следующие меропрития:
</p><ul><li>
  Торжественная линейка, посвященная Дню знаний
</li><li>
  Праздничная программа на День Учителя
</li><li>
  Посвящение в студенты
</li><li>
  КВН
</li><li>
  Новогоднее шоу
</li><li>
  Праздничная программа, посвященная Дню студента
</li><li>
  Праздничная программа, посвященная Дню всех влюбленных
</li><li>
  Праздничный вечер, посвященный Международному женскому дню 8 Марта
</li><li>
  Выступление агитбригады на Днях  открытых дверей
</li><li>
  Праздничная программа, посвященная Дню Защитника Отечества
</li></ul><p>
Торжественная часть выпускного вечера.
После каждого мероприятия проводятся дискотеки.
</p><p>
Студенты  колледжа принимают  участие в областных олимпиадах по различным дисциплинам.
</p><p>
Участвуем также в областных соревнованиях, таких как  Шахматы и Волейбол.
</p><p>
Одно из направлений студенческого самоуправления – Совет общежития – незаменимый помощник воспитателя и коменданта. 
Студенты работают и в учебной комиссии, санитарной, редколлегии, комиссии досуга…
</p><p>
Активна и разнообразна студенческая жизнь, насыщенна и интересна.
</p><p>
Подробнее со студенчекой жизнью можно ознакомиться в разделе <Link route="/blog"><a>"Новости"</a></Link>, где освящаются  проведенные мероприятия.
</p>`

class StudenLive extends Component {
  static async getInitialProps ({ store, query }) {
    let res = {}
    await axios.get(`${process.env.API_ADDRESS}/gallery/studencheskaya-zhizn`)
      .then(({ data }) => {
        res = { data }
      })
      .catch((err) => {
        console.dir(err);
        res.errorCode = err.response ? response.status : 500
      })
    return res
  }

  render () {
    const { data } = this.props
    const { Изображения, Обложка } = data
    return (
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="slider_wrap">
                  <div className="slider_wrap_main">
                    <Slider
                      {...optVerticalMain}
                    >
                    {
                      Изображения.map(slide => (
                        <figure className="slide_mini">
                          <img src={slide.secure_url} alt=""/>
                        </figure>
                      ))
                    }
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h1>Студенческая жизнь</h1>
                <ParsedHTML text={textData}/>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        <style jsx global>{`
          .slick-dots li button:before {
            font-size: 12px;
            color: #7C4DFF;
            transition: all 0.1s ease-out;
          }
          .slick-dots li.slick-active button:before {
            color: #512DA8;
          }
          main {
            margin-top: 30px;
          }
          section {
            padding-top: 30px;
          } 
          h1 {
            font-size: 30px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .block {
            padding-top: 45px;
            padding-bottom: 45px;
          }
          img {
            max-width: 100%;
          }
        `}</style>
        <style jsx>{styles}</style>
      </main>
    )
  }
}

export default StudenLive