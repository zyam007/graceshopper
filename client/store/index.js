import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allProductsReducer from './reducers/allProducts'
import singleProductReducer from './reducers/singleproduct'
import singleCategoryReducer from './reducers/singlecategory'
import allCategoriesReducer from './reducers/allCategories'
import cartReducer from './reducers/cartManager'
import loggedInCartReducer from './reducers/loggedInCart'

function saveToLocalStorage(state) {
  try {
    const savedState = JSON.stringify(state)
    localStorage.setItem('cart', savedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const savedState = localStorage.getItem('cart')
    if (savedState === null) return undefined
    return JSON.parse(savedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const reducer = combineReducers({
  user,
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  singleCategory: singleCategoryReducer,
  allCategories: allCategoriesReducer,
  cart: cartReducer,
  loginCart: loggedInCartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, loadFromLocalStorage(), middleware)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
export * from './user'
