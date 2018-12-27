import React, { PureComponent } from 'react'
import styles from 'styles/layout/Layout.scss'

import Header from './Header'

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
  componentDidUnMount() {
    window.removeEventListener('scroll', this.changeMenuStatus);
  }
  render () {
    const { miniMenu } = this.state
    return (
      <div className={`layout ${miniMenu ? 'mini' : ''}`}>
        <Header mini={miniMenu}/>
        <main className="body">
        { this.props.children }
        </main>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
