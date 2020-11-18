import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import {Nav, NavItem, Navbar as BootstrapNavbar} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {
  fetchLoggedInCart,
  resetCart,
  fetchLoggedInItems
} from '../store/reducers/loggedInCart'
import {UserHome} from './index'

const cartStyle = {
  fontSize: '24px'
}

export class Navbar extends React.Component {
  async componentDidMount() {
    console.log('in Nav')
    this.props.getCartItems()
    if (this.props.isLoggedIn) {
      await this.props.getOrderId()
      await this.props.getLoggedInItems()
    }
  }

  useEffect() {
    if (!this.props.isLoggedIn) {
      return this.props.clearCart()
    }
    if (this.props.isLoggedIn) {
      return this.props.getLoggedInItems()
    }
  }

  render() {
    const {handleClick, isLoggedIn} = this.props
    return (
      <>
        <BootstrapNavbar variant="dark" bg="dark" id="flex">
          <Link to="/">
            <img src="logo.png" alt="ALL_CAPS" className="logo" />
          </Link>
          <Nav>
            {isLoggedIn ? (
              <div>
                <Nav>
                  {/* The navbar will show these links after you log in */}
                  <UserHome />
                  <NavItem>
                    <Link to="/" className="nav-name">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/allproducts" className="nav-name">
                      Products
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/" onClick={handleClick} className="nav-name">
                      Logout
                    </Link>
                  </NavItem>

                  {this.props.user.isAdmin ? (
                    <>
                      <NavItem>
                        <Link to="/admin/edit-user" className="nav-name">
                          Edit User
                        </Link>
                      </NavItem>
                    </>
                  ) : (
                    ''
                  )}
                  <NavItem className="center">
                    <Link to="/cart" className="nav-name">
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        style={cartStyle}
                      />
                      <span className="badge badge-warning" id="lblCartCount">
                        {this.props.loggedInCart.cartItems.length
                          ? this.props.loggedInCart.cartItems.reduce(
                              (acc, item) => acc + item.productQuantity,
                              0
                            )
                          : 0}
                      </span>
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Nav>
                  <NavItem>
                    <Link to="/" className="nav-name">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/allproducts" className="nav-name">
                      Products
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/login" className="nav-name">
                      Login
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/signup" className="nav-name">
                      Sign Up
                    </Link>
                  </NavItem>
                  <NavItem className="center">
                    <Link to="/cart" className="nav-name">
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        style={cartStyle}
                      />
                      <span className="badge badge-warning" id="lblCartCount">
                        {this.props.cart.cartItems.length
                          ? this.props.cart.cartItems.length
                          : 0}
                      </span>
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            )}
          </Nav>
        </BootstrapNavbar>
      </>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    loggedInCart: state.loginCart,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getCartItems: () => dispatch({type: 'GET_ITEMS'}),
    getOrderId: () => dispatch(fetchLoggedInCart()),
    clearCart: () => dispatch(resetCart()),
    getLoggedInItems: () => dispatch(fetchLoggedInItems())
  }
}
const ConnectedNavbar = connect(mapState, mapDispatch)(Navbar)
export default withRouter(ConnectedNavbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
