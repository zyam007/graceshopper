import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {fetchAllCategories} from '../store/reducers/allCategories'
import {
  fetchLoggedInCart,
  fetchLoggedInItems
} from '../store/reducers/loggedInCart'

export class AllCategories extends Component {
  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    const allCategories = this.props.allCategories || []
    const user = this.props.user
    if (user.id) {
      this.props.getCart(user.id)
      this.props.getLoggedInItems()
    }

    return (
      <div id="categoriesView">
        <h1 id="all-cat-text">Artisan Keycaps For Everyone.</h1>
        <Fade bottom cascade>
          <div className="all-categories">
            {allCategories.map(category => {
              return (
                <div key={category.id} className="single-category-card">
                  <h6 className="category-name">{category.name}</h6>
                  <img
                    src={category.imageUrl}
                    alt="no image"
                    className="image-categories"
                  />
                  <div>
                    <p className="link-category">
                      <Link to={`/${category.id}`}>View Keycaps</Link>
                    </p>
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
    allCategories: state.allCategories,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getAllCategories: () => dispatch(fetchAllCategories()),
    getCart: () => dispatch(fetchLoggedInCart()),
    getLoggedInItems: () => dispatch(fetchLoggedInItems())
  }
}

export default connect(mapState, mapDispatch)(AllCategories)
