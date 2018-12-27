import React, { PureComponent } from 'react'
import { Link } from '/../routes'
import styles from 'styles/Logo.scss'

export default class Logo extends PureComponent {
  render () {
    const mini = this.props.mini ? 'mini' : '';
    return (
      <Link route="/">
        <a>
          <figure className={"logo " + mini}>
            <img src="/static/img/logo.png" alt="Logo"/>
            <style jsx>{styles}</style>
          </figure>
        </a>
      </Link>
    )
  }
}
