import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {fetchCategory} from '../store/reducers/singleCategory'
import {Card, Button} from 'react-bootstrap'

export class SingleCategory extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    console.log('checking ID', id)
    this.props.getSpecificProduct(id)
  }

  render() {
    // console.log("CHECKING",this.props.singleCategory)
    const allProducts = this.props.singleCategory.products || []

    return (
      <div id="categoryView">
        <h2 id="singlecat-text">Products From This Category:</h2>
        <Fade bottom cascade>
          {/* <Fade appear="true"> */}
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

const mapState = state => {
  return {
    singleCategory: state.singleCategory
  }
}

const mapDispatch = dispatch => {
  return {
    getSpecificProduct: id => dispatch(fetchCategory(id)),
    addToCart: product => dispatch({type: 'ADD_TO_CART', product})
  }
}

export default connect(mapState, mapDispatch)(SingleCategory)
