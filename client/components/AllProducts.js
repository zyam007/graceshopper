import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/reducers/allProducts'
import {Card, Button} from 'react-bootstrap'

export class AllProducts extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allProducts = this.props.allProducts || []

    return (
      <div id="productsView">
        <h2 id="all-prod-text">All Products</h2>
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
                    src={product.imageUrl}
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
                    <Card.Text>${product.price}</Card.Text>
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

function handleClick() {}

const mapState = state => {
  return {
    allProducts: state.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts()),
    addToCart: product => dispatch({type: 'ADD_TO_CART', product})
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
