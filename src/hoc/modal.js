import React, { Component } from 'react'
import { connect } from 'react-redux'

import { initializeModal, hideModal } from '../actions/modal'

function modal(config) {
  return function wrapModal (ModalComponent) {
    class ModalWrapper extends Component {
      componentWillMount () {
        this.props.initializeModal()
      }

      render () {
        return <ModalComponent {...this.props} />
      }
    }

    const mapStateToProps = (state) => state.modal[config.modalKey] || {}

    return connect(
      mapStateToProps,
      {
        initializeModal: () => initializeModal(config.modalKey),
        onRequestClose: () => hideModal(config.modalKey)
      }
    )(ModalWrapper)
  }
}

export default modal
