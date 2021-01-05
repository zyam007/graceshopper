import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavItem} from 'react-bootstrap'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {name} = props

  return (
    <>
      <NavItem className="text-white d-flex align-items-center">
        Hi, {name}
      </NavItem>
    </>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    name: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  name: PropTypes.string
}
