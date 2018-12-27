import React, { Component } from 'react'
import styles from 'styles/Humburger.scss'
import ScrollLock from 'react-scrolllock';

export default class Humburger extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.toggleHamburger = this.toggleHamburger.bind(this)
  }
  toggleHamburger() {
    this.setState((old, props) => {
      return {
        open: !old.open
      }
    })
  }
  render () {
    const { open } = this.state
    return (
      <div className={open ? "wrap open" : "wrap"}>
        <div className="humburger" onClick={this.toggleHamburger}>
          <span className="humburger__line"></span>
          <span className="humburger__line"></span>
          <span className="humburger__line"></span>
        </div>
        <div className="content">
          <div className="content__inner">
            {this.props.children}
          </div>
          <div className="content__overlay" onClick={this.toggleHamburger}></div>
          {open ? <ScrollLock/> : ''}
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
