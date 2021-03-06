import React, { Fragment } from 'react'
function backToLastWindow() {
  return window ? window.history.back() : false
}
const BackBtn = ({ text }) => {
  return (
    <Fragment>
      <a onClick={backToLastWindow} className="parsedHTML" dangerouslySetInnerHTML={{__html: text ? text : 'Назад<i class="icon-back d-none d-sm-inline-block"></i>'}}/>
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
        }
      `}</style>
    </Fragment>
  )
}
export default BackBtn