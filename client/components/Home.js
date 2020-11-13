import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'

import {fetchAllCategories} from '../store/reducers/allCategories'

export class AllCategories extends Component {
  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    const allCategories = this.props.allCategories || []
    return (
      <div id="categoriesView">
        <h2 id="all-cat-text">All Categories</h2>
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
                  <div className="button-category">
                    <button id="view-category" type="button">
                      View Category
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
