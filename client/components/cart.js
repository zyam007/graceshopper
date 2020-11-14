import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Cart extends Component {
  componentDidMount() {
    this.props.getCartItems()
  }

  render() {
    const cartItems = this.props.cart.cartItems || []
    const quantity = this.props.cart.quantity || {}
    // if (!cartItems.length) {
    //   return <h3>Nothing in the cart</h3>
    // }
    return (
      <div className="container-products">
        <div className="product-header">
          <h5 className="product-title">PRODUCT</h5>
          <h5 className="price sm-hide">PRICE</h5>
          <h5 className="quantity">QUANTITY</h5>
          <h5 className="total">TOTAL</h5>
        </div>
        {/* place products inside here */}

        {cartItems.map(product => {
          return (
            <React.Fragment key={product.id}>
              <div className="product">
                <ion-icon name="trash-outline" />
                <img src={product.imageUrl} />
                <span className="sm-hide">{product.name}</span>
              </div>
              <div className="price sm-hide">${product.price}</div>
              <div className="quantity">
                <ion-icon
                  className="decrease"
                  name="arrow-back-circle-outline"
                />
                <span>{quantity[product.id]}</span>
                <ion-icon
                  className="decrease"
                  name="arrow-forward-circle-outline"
                />
              </div>
              <div className="total">
                ${product.price * quantity[product.id]}
              </div>
            </React.Fragment>
          )
        })}
        <div className="cartTotalContainer">
          <h4 className="cartTotalTitle">Cart Total</h4>
          <h4 className="cartTotal">{this.props.cart.total}</h4>
        </div>
      </div>
      /* <div className="cart-display">
          {cartItems.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <p>{product.name}</p>
                <p> Price: {product.price}</p>
                <p> Quantity: {quantity[product.id]}</p>
              </div>
            )
          })}
        </div>
        <p>Cart Total: {this.props.cart.total}</p> */
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    getCartItems: () => dispatch({type: 'GET_ITEMS'})
  }
}

export default connect(mapState, mapDispatch)(Cart)
