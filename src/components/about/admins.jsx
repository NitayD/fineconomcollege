import React, { Component } from 'react'
import { Link }             from '/../routes'

import Footer               from 'components/layout/Footer'

import styles               from 'styles/abiturientam/Documenti.scss'

const admins = [
  {
    fio: 'Нуртаева Гульнара Нурбековна',
    role: 'Директор финансово-экономического колледжа',
    about: 'Преподаватель высшего уровня квалификации высшей категории',
    img: '/static/img/admins/1.jpg'
  },
  {
    fio: 'Алимова Карлыгаш Улановна',
    role: 'Заместитель директора по учебной работе',
    about: 'Преподаватель экономических дисциплин, высшего уровня квалификации высшей категории.',
    img: '/static/img/admins/2.jpeg'
  },
  {
    fio: 'Бисеева Назира Пернебековна',
    role: 'Заместитель директора по инновационно-методической работе',
    about: 'Преподаватель казахского языка и литературы высшего уровня квалификации высшей категории,«Почетный работник образования Республики Казахстан»',
    img: '/static/img/admins/3.jpg'
  },
  {
    fio: 'Суханбердиева Эльзира Касымовна',
    role: 'Заместитель директора по воспитательной работе',
    about: 'Преподаватель математики высшего уровня квалификации высшей категории.',
    img: '/static/img/admins/4.jpg'
  },
]

class Admins extends Component {
  render () {
    return (
      <main>
        <section>
          <div className="container">
            <div className="row no-gutters">
              <h1 className="title">Админист&shy;рационный состав</h1>
            </div>
            <div className="row no-gutters cards">
              { admins.map((admin, index) => <Card {...admin} right={index % 2 ? false : true} key={`${admin.img}-${admin.fio}`}/>) }
            </div>
          </div>
        </section>
        <Footer/>
        <style jsx global>{`
          main {
            margin-top: 45px;
          }
          @media screen and (max-width: 991px) {
            main {
              margin-top: 0;
            }
          }
          section {
            padding-top: 30px;
          } 
          .cards {
            padding-top: 30px;
            padding-bottom: 45px;
          }
          .title {
            font-size: 30px;
            font-weight: 700;
            text-transform: uppercase;
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

const Card = ({ fio, img, role, about, right }) => {
  return (
    <div className={`card ${right ? '' : 'right'}`}>
      <div className="row">
        <div className="col-sm-4">
          <figure>
            <img src={ img } alt=""/>
          </figure>
        </div>
        <div className="col-sm-8 info">
          <h3>{ fio }</h3>
          <h4>Должность: { role }</h4>
          <p>
            { about }
          </p>
        </div>
      </div>
      <style jsx>{`
        .card {
          margin-bottom: 15px;
        }
        .right .row {
          flex-direction: row-reverse;
        }
        .right .info {
          text-align: right;
        }
        .row {
          align-items: center;
        }
        h3 {
          font-size: 24px;
        }
        h4 {
          font-size: 20px;
          margin-top: 15px;
          margin-bottom: 15px;
        }

      `}</style>
    </div>
  )
}

export default Admins