import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { openPopupWith } from 'actions/popup'

class PopupLink extends PureComponent {
  constructor() {
    super()
    this.openPopup = this.openPopup.bind(this)
  }
  openPopup() {
    this.props.openPopupWith(this.props.popupInner)
  }
  render () {
    return (
      <span className="link link--popup" onClick={this.openPopup}>{this.props.children}</span>
    )
  }
}

function mapStateToProps (state) {
  return {
    popup: state.popup
  }
}

export default connect(mapStateToProps, {
  openPopupWith
})(PopupLink)