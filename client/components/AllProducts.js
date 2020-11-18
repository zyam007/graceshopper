import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/reducers/allProducts'
import {Card, Button} from 'react-bootstrap'
import {addProduct} from '../store/reducers/cartManager'
import {
  fetchLoggedInCart,
  fetchLoggedInItems
} from '../store/reducers/loggedInCart'

export class AllProducts extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allProducts = this.props.allProducts || []
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id)
      this.props.getLoggedInItems()
    }

    return (
      <div id="productsView">
        <h1 id="all-prod-text">Our Products</h1>
        <Fade bottom cascade>
          {/* <Fade appear="true"> */}
          <div className="all-products">
            {allProducts.map(product => {
              return (
                <Card
                  key={product.id}
                  className="shadow-sm"
                  style={{margin: '1rem'}}
                >
                  <img
                    variant="top"
                    src={product.imageUrl[0]}
                    alt={product.name}
                    className="image-products"
                  />
                  <Card.Body>
                    <Card.Text>
                      <Link
                        to={`/listing/${product.id}`}
                        className="product-name"
                      >
                        {product.name}
                      </Link>
                    </Card.Text>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <Button
                      type="submit"
                      variant="secondary"
                      onClick={() => this.props.addToCart(product)}
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
    allProducts: state.allProducts,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts()),
    addToCart: product => dispatch(addProduct(product)),
    getLoggedInItems: () => dispatch(fetchLoggedInItems()),
    getCart: () => dispatch(fetchLoggedInCart())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
