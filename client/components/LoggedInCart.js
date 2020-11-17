import React from 'react'
import {
  CardDeck,
  Card,
  Button,
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap'
import {
  fetchLoggedInItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem
} from '../store/reducers/loggedInCart'
import {connect} from 'react-redux'
import SingleCartItem from './Cart-Product-Details'

const LoggedInCart = props => {
  console.log(props)
  const {increaseItem, decreaseItem, deleteCartItem} = props
  // const {loginCart} = props

  // let total = loginCart.cartItems.reduce(
  //   (acc, item) => acc + item.product.price * item.quantity,
  //   0).toFixed(2)
  // {cart
  //   ? cart.map(cartItem => (
  //       <CartProductDetail
  //         key={cartItem.productId}
  //         cartItem={cartItem}
  //         loadCart={this.props.loadCart}
  //       />
  //     ))
  //   : `Your cart is currently empty`}
  if (!props.cart.cartItems.length)
    return <h1 style={{textAlign: 'center'}}>Your Cart Is Empty</h1>

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Your Items</h1>
      <CardDeck>
        <Container className="w-50">
          {props.cart.cartItems.map(item => (
            <SingleCartItem
              key={item.id}
              item={item}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </Container>
      </CardDeck>
    </>
  )
}

const mapState = state => ({
  cart: state.loginCart,
  user: state.user
})

const mapDispatch = dispatch => ({
  getCart: () => dispatch(fetchLoggedInItems),
  increaseItem: (product, item) => dispatch(increaseQuantity(product, item)),
  decreaseItem: (product, item) => dispatch(decreaseQuantity(product, item)),
  deleteCartItem: product => dispatch(deleteItem)
})

export default connect(mapState, mapDispatch)(LoggedInCart)
