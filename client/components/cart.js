import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Cart extends Component {
  componentDidMount() {
    this.props.getCartItems()
  }

  render() {
    const cartItems = this.props.cartItems.cartItems || []

    if (!cartItems.length) {
      return <h3>Nothing in the cart</h3>
    }
    return (
      <div>
        <h1>Cart Items</h1>
        <div className="cart-display">
          {cartItems.map(product => {
            return (
              <div key={product.id}>
                <p>Product: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Total: </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatch = dispatch => {
  return {
    getCartItems: () => dispatch({type: 'GET_ITEMS'})
  }
}

export default connect(mapState, mapDispatch)(Cart)
