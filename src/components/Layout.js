import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/Layout.scss'
import Logo from './Logo'
import NavMenu from './NavMenu'

export default class Layout extends PureComponent {
  constructor() {
    super();
    this.state = {
      miniMenu: false
    }
    this.header = React.createRef();
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
    const mini = this.state.miniMenu ? 'mini' : '';
    return (
      <div className='layout'>

        <header ref={this.header} className={"header " + mini }>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-auto">
                <Logo mini={this.state.miniMenu}/>
              </div>
              <div className="col header__navmenu">
                <NavMenu mini={this.state.miniMenu}/>
              </div>
            </div>
          </div>
        </header>
        <style jsx>{styles}</style>

        <main ref={this.body} className={"body " + mini}>
        { this.props.children }
        </main>

        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-auto">
                <Logo/>
              </div>
              <div className="col header__navmenu social_icons">
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/fb.svg" alt="Social Fb"/>
                </a>
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/youtube.svg" alt="Social Youtube"/>
                </a>
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/wt.svg" alt="Social WatsApp"/>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}
