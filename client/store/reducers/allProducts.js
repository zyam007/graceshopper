import axios from 'axios'

const SET_AllPRODUCTS = 'SET_ALLPRODUCTS'

export const setAllProducts = allProducts => {
  return {
    type: SET_AllPRODUCTS,
    allProducts
  }
}

export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/allproducts')
      console.log('data:', data)
      dispatch(setAllProducts(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []
const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AllPRODUCTS: {
      return [...action.allProducts]
    }
    default: {
      return state
    }
  }
}

export default allProductsReducer
