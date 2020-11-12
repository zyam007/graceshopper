import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'

import {fetchAllProducts} from '../store/reducers/allProducts'

export class AllProducts extends Component {
  componentDidMount() {
    console.log('mounting')
    this.props.getAllProducts()
    console.log('allproduct: ', this.props.allProducts)
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
                  <h6 className="product-name">{product.name}</h6>
                  <img
                    src={product.imageUrl}
                    alt="no image"
                    className="image-products"
                  />
                  <div className="price-buy">
                    <p id="price">${product.price}</p>
                    <button id="add-cart">add to cart</button>
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

const mapState = state => {
  return {
    allProducts: state.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts())
  }
}
//const ConnectedAllProducts = connect(mapState, mapDispatch)(AllProducts)
export default connect(mapState, mapDispatch)(AllProducts)
//export default ConnectedAllProducts
