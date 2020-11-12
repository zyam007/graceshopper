import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchAllProducts} from '../store/reducers/allProducts'


// try to leave console logs and commented out code in your branches and remove them before merging to main
// be careful here - I think images is an array and on line 24 we are expecting it to be a plain string
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
