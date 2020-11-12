import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Nav, NavItem, NavLink, Navbar as BootstrapNavbar} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

const cartStyle = {
  fontSize: '24px'
}

const Navbar = ({handleClick, isLoggedIn}) => (
  <>
    <BootstrapNavbar variant="dark" bg="dark" id="flex">
      <BootstrapNavbar.Brand>
        <img src="logo.png" alt="ALL_CAPS" className="logo" />
      </BootstrapNavbar.Brand>
      <Nav>
        {isLoggedIn ? (
          <div>
            <Nav>
              {/* The navbar will show these links after you log in */}
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/allproducts">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" onClick={handleClick}>
                  Logout
                </NavLink>
              </NavItem>
              <NavItem className="center">
                <NavLink href="/cart">
                  <FontAwesomeIcon icon={faCartArrowDown} style={cartStyle} />
                  <span className="badge badge-warning" id="lblCartCount">
                    5
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Nav>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/allproducts">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup" onClick={handleClick}>
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem className="center">
                <NavLink href="/cart">
                  <FontAwesomeIcon icon={faCartArrowDown} style={cartStyle} />
                  <span className="badge badge-warning" id="lblCartCount">
                    5
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        )}
      </Nav>
    </BootstrapNavbar>
  </>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
