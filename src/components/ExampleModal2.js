import React from 'react'
import Modal from 'react-modal'

import modal from '../hoc/modal'

const modalKey = 'exampleModal2'

const ExampleModal2 = ({ isOpen, onRequestClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h1>Example modal 2</h1>
  </Modal>
)

export default modal({ modalKey })(ExampleModal2)
