import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

import Footer from 'components/layout/Footer'

import stylesPage from 'styles/abiturientam/Specialnosti.scss'

class Specialnosti extends Component {
  render () {
    return (
      <div>
        <Parallax
          bgImage='/static/img/abiturientam/specialnosti.jpg'
          bgImageAlt="Specialnosti Background"
          blur={3}
          strength={500}
        >
          <div className="container d-flex justify-content-center align-items-end" style={{minHeight: 'calc(50vh + 155px)'}}>
            <h1 className=" title--page">Специальности</h1>
          </div>
        </Parallax>
        <section style={{minHeight: '80vh'}}>
          
        </section>
        <Footer/>
        <style jsx>{stylesPage}</style>
      </div>
    )
  }
}

export default Specialnosti