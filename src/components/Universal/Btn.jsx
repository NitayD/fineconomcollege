import React, { Fragment } from 'react'
import { Link } from '/../routes'

const Btn = ({ text, route, params, margin, right }) => {
  return (
    <Fragment>
      <Link route={route ? route : '/'} params={ params ? params : {} }> 
        <a className="parsedHTML" dangerouslySetInnerHTML={{__html: text ? text : ''}}/>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          font-size: 20px;
          line-height: 20px;
          padding: 7.5px 12.5px;
          position: relative;
          color: white;
          background-color: #7C4DFF;
          white-space: nowrap;
          margin: ${margin ? margin : '0'};
          text-align: ${right ? 'right' : 'left'};
        }
      `}</style>
    </Fragment>
  )
}
export default Btn