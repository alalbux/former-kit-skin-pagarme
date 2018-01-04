import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UIModal')

const ModalActions = ({ theme, children }) => (
  <div className={theme.actions}>
    {children}
  </div>
)

ModalActions.propTypes = {
  theme: PropTypes.shape({
    actions: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(ModalActions)
