import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Jumbotron, Container, Form, Row, Col} from 'react-bootstrap'
//improt placeOrderfunc dispatch
export class CheckoutForm extends Component {
  componentDidMount() {
    this.props.getCartItems()
  }
  render() {
    const cartItems = this.props.cart.cartItems || []
    const total = this.props.cart.total
    const qty = this.props.cart.quantity

    return (
      <div className="checkout">
        <Form className="checkout-form">
          <h2 className="contact-title">Your Information</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder="LastName" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>New York</option>
                <option>New Jersey</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required type="text" placeholder="Zipcode" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button type="submit" variant="secondary">
              Place Order
            </Button>
          </Form.Row>
        </Form>
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">
              {cartItems.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map(item => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between lh-condensed"
                  key={item.id}
                >
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Qty: {qty[item.id]}</small>
                  </div>
                  <span className="text-muted">
                    ${item.price * qty[item.id]}
                  </span>
                </li>
              )
            })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{total}</strong>
            </li>
          </ul>
        </div>
      </div>
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
    //placeOrder: () => dispatch();
  }
}

export default connect(mapState, mapDispatch)(CheckoutForm)

//shopping cart
/*

<div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">
              {cartItems.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((item) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between lh-condensed"
                  key={item.id}
                >
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Qty: {qty[item.id]}</small>
                  </div>
                  <span className="text-muted">
                    ${item.price * qty[item.id]}
                  </span>
                </li>
              )
            })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{total}</strong>
            </li>
          </ul>
        </div>
*/
