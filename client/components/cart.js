import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import LoggedInCart from './LoggedInCart'

import {
  removeProduct,
  increaseProduct,
  reduceProduct
} from '../store/reducers/cartManager'

export class Cart extends Component {
  componentDidMount() {
    if (!this.props.user.id) this.props.getCartItems()
  }

  render() {
    if (this.props.user.id) return <LoggedInCart />
    const cartItems = this.props.cart.cartItems || []
    const quantity = this.props.cart.quantity || {}
    if (!cartItems.length) {
      return (
        <div className="empty-cart">
          <h3>Your Cart is Empty.</h3>
          <Link to="/allproducts">continue shopping</Link>
        </div>
      )
    }
    return (
      <div className="container-products">
        <div className="product-header">
          <h5 className="product-title">PRODUCT</h5>
          <h5 className="price-title">PRICE</h5>
          <h5 className="quantity-title">QUANTITY</h5>
          <h5 className="total-title">TOTAL</h5>
        </div>

        {cartItems.map(product => {
          return (
            <React.Fragment key={product.id}>
              <div className="product">
                <ion-icon
                  name="trash-outline"
                  onClick={() => this.props.deleteCartItem(product)}
                />
                <img src={product.imageUrl[0]} />
                <span className="sm-hide">{product.name}</span>
              </div>
              <div className="price sm-hide">${product.price.toFixed(2)}</div>
              <div className="quantity">
                <ion-icon
                  className="decrease"
                  name="remove-circle-outline"
                  onClick={() => this.props.decCartItem(product)}
                />
                <span>{quantity[product.id]}</span>
                <ion-icon
                  className="increase"
                  name="add-circle-outline"
                  onClick={() => this.props.incCartItem(product)}
                />
              </div>
              <div className="total">
                ${(product.price * quantity[product.id]).toFixed(2)}
              </div>
            </React.Fragment>
          )
        })}
        <div className="cartTotalContainer">
          <h4 className="cartTotalTitle">Cart Total</h4>
          <h4 className="cartTotal">{this.props.cart.total.toFixed(2)}</h4>
        </div>
        <Link to="/cart/checkout" className="button-cart-checkout">
          {/* <button type="submit" className="button-cart-checkout"> */}
          CHECK OUT
          {/* </button> */}
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getCartItems: () => dispatch({type: 'GET_ITEMS'}),
    deleteCartItem: product => dispatch(removeProduct(product)),
    incCartItem: product => dispatch(increaseProduct(product)),
    decCartItem: product => dispatch(reduceProduct(product))
  }
}

export default connect(mapState, mapDispatch)(Cart)
