import React, { PureComponent } from 'react'
import styles from 'styles/layout/Layout.scss'
import Logo from '../Logo'
import NavMenu from '../NavMenu'

export default class Header extends PureComponent {
  render () {
    const { mini } = this.props
    return (
      <header ref={this.header} className={`header ${mini ? 'mini' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <Logo mini={this.props.mini}/>
            </div>
            <div className="col header__navmenu">
              <NavMenu mini={this.props.mini}/>
            </div>
          </div>
        </div>
      <style jsx>{styles}</style>
      </header>
    )
  }
}
