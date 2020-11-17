import axios from 'axios'
//Action Types

const SET_CART_SESSION = 'SET_CART_SESSION'

export const setCart = orderId => ({
  type: SET_CART_SESSION,
  orderId
})

export const fetchLoggedInCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/order')
      dispatch(setCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = 0

const loggedInCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_SESSION: {
      return action.orderId
    }
    default:
      return state
  }
}

export default loggedInCartReducer
