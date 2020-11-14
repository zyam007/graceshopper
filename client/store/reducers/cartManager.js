//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const REDUCE_CART_ITEM = 'REDUCE_CART_ITEM'
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

const initialState = {cartItems: [], total: 0, quantity: {}}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let product = action.product
      let newTotal = 0
      //first time adding product
      console.log('product: ', product)
      if (!state.quantity[product.id]) {
        console.log('i am checking new add')
        state.quantity[product.id] = 1
        newTotal = state.total + action.product.price
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: newTotal
        }
      } else {
        //adding the same product
        console.log('i am checking the same addition')
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
    default: {
      return state
    }
  }
}

export default cartReducer
