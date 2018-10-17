import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import styles from 'styles/Logo.scss';
import stylesPage from 'styles/Mainpage.scss';
import LastNews from 'components/LastNews';
import Footer from 'components/layout/Footer'

import Popup from 'components/popup/Popup'


const scrollById = function(id, cb) {
  let V = 0.75;
  let w = window.pageYOffset;
  let hash = '#' + id;
  let t = document.querySelector(hash).getBoundingClientRect().top - 95;
  let start = null;
  requestAnimationFrame(step);
  function step(time) {
    if (start === null) start = time;
    let progress = time - start,
      r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
    window.scrollTo(0,r);
    if (r != w + t) {
      requestAnimationFrame(step)
    } else {
      location.hash = hash;
      if (cb) {
        cb();
      }
    }
  }
}

class Layout extends Component {
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
        <Popup/>
        <Footer/>
        <style jsx>{styles}</style>
        <style jsx>{stylesPage}</style>
      </div>
    )
  }
}

export default Layout