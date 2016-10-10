import React from 'react'
import Modal from 'react-modal'

import modal from '../hoc/modal'

const modalKey = 'exampleModal1'

const ExampleModal1 = ({ isOpen, onRequestClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h1>Example modal 1</h1>
  </Modal>
)

export default modal({ modalKey })(ExampleModal1)
