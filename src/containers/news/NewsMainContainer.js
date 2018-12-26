import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import styles from 'styles/Logo.scss';
import stylesPage from 'styles/Mainpage.scss';
import LastNews from 'components/LastNews';
import Footer from 'components/layout/Footer'
import axios from 'axios';

class NewsMainContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await axios.get(`${process.env.API_ADDRESS}/blog`)
    .then(({ data }) => {
      store.dispatch(initNews(data))
    })
    .catch((err) => {
      console.log(err)
      console.dir(err)
    })
  }

  render () {
    return (
      <div>
        <Parallax
          bgImage='/static/img/main/bgV2.jpg'
          bgImageAlt="the cat"
          blur={5}
          strength={500}
        >
          <div className="container first">
            <h1 className="logo__name">
              Финансово&#8209;Экономический Колледж
            </h1>
            <figure className="down">
              <a href="#section-2" onClick={()=>scrollById('section-2')}>
                <img src="/static/img/icons/down.svg" alt="Down"/>
              </a>
            </figure>
          </div>
        </Parallax>

        <section id="section-2">
          <LastNews />
        </section>
        <Footer/>
        <style jsx>{styles}</style>
        <style jsx>{stylesPage}</style>
        <style jsx global>{`
          .react-parallax:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 1;
          }
          .react-parallax-content {
            z-index: 2;
          }
        `}</style>
      </div>
    )
  }
}

export default NewsMainContainer