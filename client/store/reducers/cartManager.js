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

const initialState = {cartItems: [], total: 0, quantity: {}}

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
          total: newTotal
        }
      } else {
        //adding the same product
        state.quantity[product.id]++
        newTotal = state.total + action.product.price
        return {
          ...state,
          total: newTotal
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
        total: newTotal
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
      return {...state, cartItems: updatedCart, total: newTotal}
    }
    case INCREASE_CART_ITEM: {
      state.quantity[action.product.id]++
      let newTotal = state.total + action.product.price

      return {...state, total: newTotal}
    }
    default: {
      return state
    }
  }
}

export default cartReducer
