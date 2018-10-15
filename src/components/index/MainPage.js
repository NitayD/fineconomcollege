import React, { PureComponent } from 'react'
import { Parallax } from 'react-parallax';
import styles from 'styles/Logo.scss';
import stylesPage from 'styles/Mainpage.scss';
import LastNews from 'components/LastNews'

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

export default class Layout extends PureComponent {
  constructor() {
    super();
    this.state = {
      miniMenu: false
    }
    this.changeMenuStatus = this.changeMenuStatus.bind(this);
  }
  changeMenuStatus() {
    if (window.scrollY !== 0) {
      if (!this.state.miniMenu) {
        this.setState({
          miniMenu: true
        });
      }
    } else {
      if (this.state.miniMenu) {
        this.setState({
          miniMenu: false
        });
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuStatus);
    this.changeMenuStatus();
  }
  render () {
    const mini = this.props.mini ? 'mini' : '';
    return (
      <div>
        <Parallax
          bgImage='/static/img/main/bgV2.jpg'
          bgImageAlt="the cat"
          blur={5}
          strength={500}
        >
          <div className={"container first " + mini}>
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
        <section id="section-2" style={{height: '100vh'}}>
          <LastNews />
        </section>
        <div style={{height: '1000vh'}}></div>
        <style jsx>{styles}</style>
        <style jsx>{stylesPage}</style>
      </div>
    )
  }
}
