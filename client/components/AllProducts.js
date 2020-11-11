import React, {Component} from 'react'
import {connect} from 'react-redux'

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
      <div className="all-products">
        {allProducts.map(product => {
          return (
            <div key={product.id}>
              <img src={product.imageUrl} alt="no image" />
              <h2>{product.name}</h2>
            </div>
          )
        })}
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
const ConnectedAllProducts = connect(mapState, mapDispatch)(AllProducts)
//export default connect(mapState, mapDispatch)(Home)
export default ConnectedAllProducts
