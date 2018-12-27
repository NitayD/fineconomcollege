import React, { Component } from 'react'
import { Link }             from '/../routes'

import Footer               from 'components/layout/Footer'

import styles               from 'styles/abiturientam/Documenti.scss'

class Building extends Component {
  render () {
    return (
      <main>
        <section>
          <div className="container">
            <div className="row no-gutters">
              <h1 className="title">Помещения</h1>
            </div>
            <div className="row no-gutters cards">
              { admins.map((admin, index) => <Card {...admin} right={index % 2 ? false : true}/>) }
            </div>
          </div>
        </section>
        <Footer/>
        <style jsx global>{`
          main {
            margin-top: 30px;
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

export default Building