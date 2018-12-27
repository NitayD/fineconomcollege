import React, { Component } from 'react'
import axios                from 'axios'
import Slider               from "react-slick"
import ParsedHTML           from 'components/Universal/ParsedHTML'
import Footer               from 'components/layout/Footer'
import styles               from 'styles/abiturientam/Documenti.scss'
import SEO                  from 'components/Universal/SEO'

const optVerticalMain = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

const textData = `<p>
Общежитие — место временного проживания для приезжих студентов и учащихся на время учёбы, 
сезонных рабочих на время работы, службы или ставшее постоянным для работников учреждения. 
Соответственно, следует различать студенческие и рабочие общежития.
</p>`

class StudenLive extends Component {
  static async getInitialProps ({ store, query }) {
    let res = {}
    await axios.get(`${process.env.API_ADDRESS}/gallery/obshezhitie`)
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
        <SEO title="Список документов, необходимых для поступления"
          description='Общежитие — место временного проживания для приезжих студентов и учащихся на время учёбы, сезонных рабочих на время работы, службы или ставшее постоянным для работников учреждения. Соответственно, следует различать студенческие и рабочие общежития.'/>
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
                <h1 className="title">Общежитие на 100 мест</h1>
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
          .title {
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
          .slider_wrap_main {
            margin-bottom: 45px;
          }
        `}</style>
        <style jsx>{styles}</style>
      </main>
    )
  }
}

export default StudenLive