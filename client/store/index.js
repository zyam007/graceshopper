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

const reducer = combineReducers({
  user,
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  singleCategory: singleCategoryReducer,
  allCategories: allCategoriesReducer,
  cartItems: cartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
