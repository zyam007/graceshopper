import React from 'react'
import {CardDeck, Container} from 'react-bootstrap'
import {
  fetchLoggedInItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem
} from '../store/reducers/loggedInCart'
import {connect} from 'react-redux'
import SingleCartItem from './Cart-Product-Details'
import {Link} from 'react-router-dom'

const LoggedInCart = props => {
  const {increaseItem, decreaseItem, deleteCartItem, cart} = props

  if (!cart.cartItems.length)
    return <h1 style={{textAlign: 'center'}}>Your Cart Is Empty</h1>

  let total = cart.cartItems
    .reduce((acc, item) => acc + item.product.price * item.productQuantity, 0)
    .toFixed(2)

  return (
    <>
      <h1 id="cart-text">Your Items</h1>
      <CardDeck>
        <Container className="w-50">
          {props.cart.cartItems.map(item => (
            <SingleCartItem
              key={item.id}
              item={item}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              deleteCartItem={deleteCartItem}
              total={total}
            />
          ))}
        </Container>
      </CardDeck>
      <div>
        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>
          Cart Total: ${total}
        </h3>
      </div>
      <div className="m-2" style={{textAlign: 'center'}}>
        <Link to="/cart/checkout" className="button-cart-checkout">
          CHECK OUT
        </Link>
      </div>
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
  deleteCartItem: id => dispatch(deleteItem(id))
})

export default connect(mapState, mapDispatch)(LoggedInCart)
