import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {fetchCategory} from '../store/reducers/singleCategory'
import {Card, Button} from 'react-bootstrap'
import {
  addItemToCart,
  fetchLoggedInCart,
  fetchLoggedInItems
} from '../store/reducers/loggedInCart'

export class SingleCategory extends Component {
  constructor() {
    super()
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSpecificProduct(id)
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id)
      this.props.getLoggedInItems()
    }
  }

  handleAddToCart(product) {
    this.props.addItemToCart(product)
  }

  render() {
    const allProducts = this.props.singleCategory.products || []

    return (
      <div id="categoryView">
        <h2 id="singlecat-text">Products From This Category:</h2>
        <Fade bottom cascade>
          <div className="singlecat">
            {allProducts.map(product => {
              return (
                <Card
                  key={product.id}
                  className="singlecat-shadow-sm"
                  style={{margin: '1rem'}}
                >
                  <img
                    variant="top"
                    src={product.imageUrl[0]}
                    alt={product.name}
                    className="image-singlecat"
                  />
                  <Card.Body>
                    <Card.Text>
                      <Link
                        to={`/listing/${product.id}`}
                        className="singlecat-name"
                      >
                        {product.name}
                      </Link>
                    </Card.Text>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <Button
                      type="submit"
                      variant="secondary"
                      onClick={
                        this.props.user.id
                          ? () => this.handleAddToCart(product)
                          : () => this.props.addToCart(product)
                      }
                    >
                      add to cart
                    </Button>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </Fade>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleCategory: state.singleCategory,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getSpecificProduct: id => dispatch(fetchCategory(id)),
    addToCart: product => dispatch({type: 'ADD_TO_CART', product}),
    getCart: () => dispatch(fetchLoggedInCart()),
    addItemToCart: product => dispatch(addItemToCart(product)),
    getLoggedInItems: () => dispatch(fetchLoggedInItems())
  }
}

export default connect(mapState, mapDispatch)(SingleCategory)
