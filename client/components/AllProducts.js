import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'

import {fetchAllProducts} from '../store/reducers/allProducts'

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
          <div className="all-products">
            {allProducts.map(product => {
              return (
                <div key={product.id} className="single-product-card">
                  <div style={{textAlign: 'center'}}>
                    <Link
                      to={`/listing/${product.id}`}
                      className="product-name"
                    >
                      {product.name}
                    </Link>
                  </div>
                  <img
                    src={product.imageUrl}
                    alt="no image"
                    className="image-products"
                  />
                  <div className="price-buy">
                    <p id="price">${product.price}</p>
                    <button
                      id="add-cart"
                      onClick={() => this.props.addToCart(product)}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
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
