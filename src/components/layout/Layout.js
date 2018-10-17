import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/layout/Layout.scss'
import Logo from '../Logo'
import NavMenu from '../NavMenu'

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

        <main className="body">
        { this.props.children }
        </main>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
