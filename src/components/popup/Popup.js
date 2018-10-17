import React, { Component } from 'react'
import styles from 'styles/popup/popup.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import ScrollLock from 'react-scrolllock';

import { closePopupWith } from 'actions/popup'

class Popup extends Component {
  constructor(props) {
    super()
    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.props.closePopupWith()
  }

  render () {
    const popupInnerComponent = this.props.popup.toJS().popupInnerComponent
    console.log(popupInnerComponent);
    if (popupInnerComponent) {
      return (
        <div className="popup">
          <div className="popup__inner">
            <div className="popup__close" onClick={this.closePopup}/>
            {popupInnerComponent}
          </div>
          <div className="popup__overlay" onClick={this.closePopup}/>
          <style jsx>{styles}</style>
          <ScrollLock />
        </div>
      )
    } else {
      return (
        <div className="popup"/>
      )
    }
  }
}

Popup.propTypes = {
  popup: PropTypes.instanceOf(Map).isRequired
}

function mapStateToProps (state) {
  return {
    popup: state.popup
  }
}

export { Popup }
export default connect(mapStateToProps, {closePopupWith})(Popup)