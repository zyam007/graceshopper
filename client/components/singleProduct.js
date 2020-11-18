import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/reducers/singleproduct'
import {
  Card,
  DropdownButton,
  Dropdown,
  Carousel,
  Spinner,
  Button
} from 'react-bootstrap'
import {
  fetchLoggedInCart,
  fetchLoggedInItems,
  addItemToCart
} from '../store/reducers/loggedInCart'
import {addProduct} from '../store/reducers/cartManager'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id)
      this.props.getLoggedInItems()
    }
  }

  handleAddToCart(product) {
    this.props.addItemToCart(product)
  }

  render() {
    const product = this.props.product

    if (!product.name) return <Spinner animation="border" />

    return (
      <div
        style={{display: 'flex', justifyContent: 'space-evenly'}}
        className="container-product"
      >
        <Carousel
          style={{width: '40rem', padding: '1rem', alignSelf: 'center'}}
        >
          {product.imageUrl.map((url, i) => (
            <Carousel.Item key={i} interval={2000}>
              <img className="d-block w-100" src={url} alt={product.name} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card style={{width: '40rem', margin: '1rem'}} className="shadow-sm">
          <Card.Body>
            <Card.Title style={{fontSize: '2rem'}}>{product.name}</Card.Title>
            <Button
              type="submit"
              variant="primary"
              onClick={
                this.props.user.id
                  ? () => this.handleAddToCart(product)
                  : () => this.props.addToCart(product)
              }
            >
              Add to Cart
            </Button>
            <Card.Text>{product.description}</Card.Text>
            <DropdownButton
              id="dropdown-basic-button"
              variant="secondary"
              title="Quantity"
            >
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.singleProduct,
  user: state.user
})

const mapDispatch = dispatch => ({
  loadProduct: id => dispatch(fetchProduct(id)),

  getCart: () => dispatch(fetchLoggedInCart()),
  getLoggedInItems: () => dispatch(fetchLoggedInItems()),
  addToCart: product => dispatch(addProduct(product)),
  addItemToCart: product => dispatch(addItemToCart(product))
})

export default connect(mapState, mapDispatch)(SingleProduct)
