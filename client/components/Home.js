import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'

import {fetchAllCategories} from '../store/reducers/allCategories'

export class AllCategories extends Component {
  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    const allCategories = this.props.allCategories || []

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
    allCategories: state.allCategories
  }
}

const mapDispatch = dispatch => {
  return {
    getAllCategories: () => dispatch(fetchAllCategories())
  }
}

export default connect(mapState, mapDispatch)(AllCategories)
