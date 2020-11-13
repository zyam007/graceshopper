import axios from 'axios'

const SET_ALLCATEGORIES = 'SET_ALLCATEGORIES'

export const setAllCategories = allCategories => {
  return {
    type: SET_ALLCATEGORIES,
    allCategories
  }
}

export const fetchAllCategories = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/allcategory')
      dispatch(setAllCategories(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []
const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALLCATEGORIES: {
      return [...action.allCategories]
    }
    default: {
      return state
    }
  }
}

export default allCategoriesReducer
