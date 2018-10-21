import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import Footer from 'components/layout/Footer'
import {Link} from '../../../routes'
import stylesPage from 'styles/abiturientam/Specialnosti.scss'

import Specialnost from './Specialnost'

const professions = [
  {
    img: '/static/img/specialty/marketing.svg',
    name: 'Маркетинг',
    code: '0513000'
  }, {
    img: '/static/img/specialty/appraisal.svg',
    name: 'Оценка',
    code: '0514000'
  }, {
    img: '/static/img/specialty/manegment.svg',
    name: 'Менеджмент',
    code: '0515000'
  }, {
    img: '/static/img/specialty/finances.svg',
    name: 'Финансы',
    code: '0516000'
  }, {
    img: '/static/img/specialty/accounting_and_auditing.svg',
    name: 'Учёт и аудит',
    code: '0518000'
  }, {
    img: '/static/img/specialty/ecomonic.svg',
    name: 'Экономика',
    code: '0519000'
  }, {
    img: '/static/img/specialty/tourism.svg',
    name: 'Туризм',
    code: '0511000'
  }, {
    img: '/static/img/specialty/information_system.svg',
    name: 'Информационные системы',
    code: '1305000'
  }
]

class Specialnosti extends Component {
  getSpecialty (item, index) {
    return (
      <div className="col-md-6">
        <Link route={`/abiturientam/specialnosti/${item.code}`}>
          <a><Specialnost data={item}/></a>
        </Link>
      </div>
    )
  }

  render () {
    return (
      <div>
        <Parallax
          bgImage='/static/img/abiturientam/specialnosti.jpg'
          bgImageAlt="Specialnosti Background"
          strength={500}
        >
          <div className="container d-flex justify-content-center align-items-end" style={{minHeight: 'calc(50vh + 155px)'}}>
            <h1 className="specialtyes__title title--page">Специальности</h1>
          </div>
        </Parallax>
        <section className="specialtyes">
          <div className="container">
            <div className="row no-gutters">
              {professions.map(this.getSpecialty)}
            </div>
          </div>
        </section>
        <Footer/>
        <style jsx>{stylesPage}</style>
      </div>
    )
  }
}

export default Specialnosti