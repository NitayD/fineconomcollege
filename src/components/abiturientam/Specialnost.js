import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

import Footer from 'components/layout/Footer'

import styles from 'styles/abiturientam/Specialnosti.scss'

class Specialnost extends Component {
  render () {
    const { img, name, code } = this.props.data
    return (
      <div className="block">
        <div className="block__text">
          {name}
        </div>
        <figure className="block__icon">
          <img src={img} alt={name}/>
          <figcaption className="block__code">
            { code }
          </figcaption>
        </figure>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default Specialnost