import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import Footer from 'components/layout/Footer'
import { Link } from '/../routes'
import stylesPage from 'styles/abiturientam/Specialnosti.scss'
import { loadSpecialtyData } from 'actions/specialty'
import TermsAndPaymentTable from './TermsAndPaymentTable'
import Helmet from 'react-helmet'

import Specialnost from './Specialnost'

import { connect } from 'react-redux'

class Specialty extends Component {
  static async getInitialProps ({query, store}) {
    store.dispatch(loadSpecialtyData(query.specialnost))
  }

  render () {
    const { title, code, shortDescription, description, termsAndPayment } = this.props.specialty.toJS().data
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta property="title" content={title}/>
          <meta property="og:title" content={title}/>

          <meta property="description" content={shortDescription}/>
          <meta name="description" content={shortDescription}/>
          <meta property="og:description" content={shortDescription}/>
        </Helmet>
        <Parallax
          bgImage='/static/img/abiturientam/bg.jpg'
          bgImageAlt="Specialnost Background"
          strength={500}
        >
          <section className="specialtyes" style={{minHeight: '50vh'}}>
            <div className="container">
              <div className="specialnost">

                <div className="specialnost__block specialnost__titles">
                  <h1 className="specialnost__title">{title}</h1>
                  <h2 className="specialnost__code">{code}</h2>
                </div>

                <div className="specialnost__block">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="specialnost__shortDesc">{shortDescription}</p>
                    </div>
                    <div className="col-md-6">
                      <TermsAndPaymentTable data={termsAndPayment}/>
                    </div>
                    <div className="col-12">
                      <p className="specialnost__desc">{ description }</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
  stylesPage
})(Specialty)