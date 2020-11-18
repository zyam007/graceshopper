/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Footer} from './footer'
export {default as AllProducts} from './AllProducts'
export {default as AllCategories} from './Home'
export {default as SingleCategory} from './singleCategory'
export {default as SingleProduct} from './singleProduct'
export {default as Cart} from './cart'
export {default as CheckoutForm} from './CheckoutForm'
