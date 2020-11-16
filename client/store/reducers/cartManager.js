import axios from 'axios'
//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const REDUCE_CART_ITEM = 'REDUCE_CART_ITEM'
const INCREASE_CART_ITEM = 'INCREASE_CART_ITEM'
const GET_ITEMS = 'GET_ITEMS'

//ACTION CREATORS

export const addProduct = product => ({
  type: ADD_TO_CART,
  product
})

export const removeProduct = product => ({
  type: REMOVE_FROM_CART,
  product
})

export const reduceProduct = product => ({
  type: REDUCE_CART_ITEM,
  product
})

export const increaseProduct = product => ({
  type: INCREASE_CART_ITEM,
  product
})

//For logged in user

const GET_USER = 'SET_USER'

const ADD_TO_CART_LOGGIN = 'ADD_TO_CART_LOGGIN'

const RESET_CART = 'RESET_CART'

export const resetCart = () => ({
  type: RESET_CART
})

export const setCart = orderId => ({
  type: GET_USER,
  orderId
})

export const fetchLoggedInCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/order')
      const orderId = data
      console.log('in the thunk', orderId)
      dispatch(setCart(orderId.id))
      // if(orderId.id) {
      //   const {data} = await axios.get('/api/cart')
      //   const cartItems = data
      //   console.log('in thunk for cart', cartItems)
      //   dispatch({
      //     type: ADD_TO_CART_LOGGIN,
      //     product: cartItems
      //   })

      // }
    } catch (err) {
      console.log(err)
    }
  }
}

//Initial State
const initialState = {
  cartItems: [],
  total: 0,
  quantity: {},
  //added for checkout purposes-Kade
  orderId: 0
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let product = action.product
      let newTotal = 0
      //first time adding product
      if (!state.quantity[product.id]) {
        state.quantity[product.id] = 1
        newTotal = state.total + action.product.price
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: Number(newTotal.toFixed(2))
        }
      } else {
        //adding the same product
        state.quantity[product.id]++
        newTotal = state.total + action.product.price
        return {
          ...state,
          total: Number(newTotal.toFixed(2))
        }
      }
    }
    case GET_ITEMS: {
      return {...state}
    }
    case REMOVE_FROM_CART: {
      let newTotal =
        state.total - state.quantity[action.product.id] * action.product.price
      delete state.quantity[action.product.id]
      let updatedCart = state.cartItems.filter(
        prod => prod.id !== action.product.id
      )
      return {
        ...state,
        cartItems: updatedCart,
        total: Number(newTotal.toFixed(2))
      }
    }
    case REDUCE_CART_ITEM: {
      let updatedCart
      state.quantity[action.product.id]--
      let newTotal = state.total - action.product.price
      if (!state.quantity[action.product.id]) {
        updatedCart = state.cartItems.filter(
          prod => prod.id !== action.product.id
        )
      } else updatedCart = state.cartItems
      return {
        ...state,
        cartItems: updatedCart,
        total: Number(newTotal.toFixed(2))
      }
    }
    case INCREASE_CART_ITEM: {
      state.quantity[action.product.id]++
      let newTotal = state.total + action.product.price

      return {...state, total: Number(newTotal.toFixed(2))}
    }
    case RESET_CART: {
      return {
        cartItems: [],
        total: 0,
        quantity: {},
        orderId: 0
      }
    }
    case GET_USER:
      console.log('in the cart Get user')
      return {
        ...state,
        orderId: action.orderId
      }
    // case ADD_TO_CART_LOGGIN: {
    //   let product = action.product
    //   let newTotal = 0
    //   if(!state.quantity[product.productId]) {
    //     state.quantity[product.productId] = product.productQuantity;
    //     newTotal = state.total + action.product.total
    //     return {
    //       ...state,
    //       cartItems: [...state.cartItems, action.product],
    //       total: state.total + Number(newTotal.toFixed(2))
    //     }
    //   }else {
    //      //adding the same product
    //      state.quantity[product.product.id] += product.productQuantity
    //      newTotal = state.total + action.product.total
    //      return {
    //        ...state,
    //        total: Number(newTotal.toFixed(2))
    //      }
    //     }
    // }
    default: {
      return state
    }
  }
}

export default cartReducer
