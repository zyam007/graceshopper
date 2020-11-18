import axios from 'axios'
//Action Types

const SET_USER = 'SET_USER'
const SET_CART_ITEMS = 'SET_CART_ITEMS'
const RESET_CART = 'RESET_CART'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const INCREASE_CART = 'INCREASE_CART'
const DECREASE_CART = 'DECREASE_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

//Action Creators
export const resetCart = () => ({
  type: RESET_CART
})

export const setCart = orderId => ({
  type: SET_USER,
  orderId
})

export const setCartItems = cartItems => ({
  type: SET_CART_ITEMS,
  cartItems
})

const addToCart = cartItem => ({
  type: ADD_ITEM_TO_CART,
  cartItem
})

const increaseCart = updatedProduct => ({
  type: INCREASE_CART,
  updatedProduct
})

const decreaseCart = updatedProduct => ({
  type: DECREASE_CART,
  updatedProduct
})

const removeFromCart = id => ({
  type: REMOVE_ITEM,
  id
})

//Thunk Creators
export const fetchLoggedInCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/order')
      const orderId = data
      dispatch(setCart(orderId.id))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchLoggedInItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')
      const cartItems = data
      console.log('in thunk for cart', cartItems)
      dispatch(setCartItems(cartItems))
    } catch (err) {
      console.log(err)
    }
  }
}

export const addItemToCart = cartItem => async dispatch => {
  try {
    const {data} = await axios.post('/api/cart', cartItem.id)
    dispatch(addToCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const increaseQuantity = (product, productDetail) => async dispatch => {
  try {
    const total = productDetail.productQuantity + 1
    const {data} = await axios.put('/api/cart', {
      productQuantity: total,
      productId: product.id
    })
    dispatch(increaseCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const decreaseQuantity = (product, productDetail) => async dispatch => {
  try {
    const total = productDetail.productQuantity - 1
    const {data} = await axios.put('/api/cart', {
      productQuantity: total,
      productId: product.id
    })
    dispatch(decreaseCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteItem = id => async dispatch => {
  try {
    await axios.delete(`/api/cart/${id}`)
    dispatch(removeFromCart(id))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  cartItems: [],
  //added for checkout purposes-Kade
  orderId: 0
}

//Reducer
const loggedInCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_CART: {
      return {
        cartItems: [],
        orderId: 0
      }
    }
    case SET_USER:
      return {
        ...state,
        orderId: action.orderId
      }
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem]
      }
    case INCREASE_CART:
      state.cartItems.forEach(item => {
        if (item.productId === action.updatedProduct.productId) {
          item.productQuantity += 1
        }
      })
      return {
        ...state
      }
    case DECREASE_CART:
      state.cartItems.forEach(item => {
        if (item.productId === action.updatedProduct.productId) {
          item.productQuantity -= 1
        }
      })
      return {
        ...state
      }
    case REMOVE_ITEM: {
      const updatedItems = state.cartItems.filter(item => item.id !== action.id)
      return {
        ...state,
        cartItems: updatedItems
      }
    }
    default:
      return {
        cartItems: [],
        orderId: 0
      }
  }
}

export default loggedInCartReducer
