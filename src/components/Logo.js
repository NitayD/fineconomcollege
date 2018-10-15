import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/Logo.scss'

export default class Logo extends PureComponent {
  render () {
    const mini = this.props.mini ? 'mini' : '';
    return (
      <Link href="/">
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
