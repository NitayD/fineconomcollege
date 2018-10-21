import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import Footer from 'components/layout/Footer'
import Link from 'next/link'
import stylesPage from 'styles/abiturientam/Specialnosti.scss'

import Specialnost from './Specialnost'
import allSpecialityes from './specialnosti.json'

import { connect } from 'react-redux'

class Specialty extends Component {
  static async getInitialProps (data) {
    console.log(data);
  }
  componentDidMount() {

  }

  render () {
    return (
      <div>
        <Parallax
          bgImage='/static/img/abiturientam/bg.jpg'
          bgImageAlt="Specialnost Background"
          strength={500}
        >
          <section className="specialtyes" style={{minHeight: '100vh'}}>

          </section>
        </Parallax>
        <Footer/>
        <style jsx>{stylesPage}</style>
      </div>
    )
  }
}

function mapStateToProps({ specialty }) {
  return {
    specialty: specialty
  }
}

export default connect(mapStateToProps, {
  
})(Specialty)