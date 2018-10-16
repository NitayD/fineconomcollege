import React from 'react'
import {Link} from '../routes'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
        <Link route="/putin"><a>Main</a></Link>
      </p>
    )
  }
}