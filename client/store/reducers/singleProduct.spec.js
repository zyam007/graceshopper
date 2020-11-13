/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProduct} from '../reducers/singleproduct'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {singleproduct: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('setProduct', () => {
    it('eventually dispatches the SET PRODUCT action', async () => {
      const fakeProduct = {
        id: 1,
        name: 'Yoda Cap',
        description: 'Baby Yoda at your finger',
        price: 19.99,
        numOfSales: 0,
        quantity: 1,
        categoryId: 1
      }
      mockAxios.onGet('/api/allproducts/1').replyOnce(200, fakeProduct)
      await store.dispatch(fetchProduct(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('SET_PRODUCT')
    })

    it('return the product requested', async () => {
      const fakeProduct = {
        id: 1,
        name: 'Yoda Cap',
        description: 'Baby Yoda at your finger',
        price: 19.99,
        numOfSales: 0,
        quantity: 1,
        categoryId: 1
      }
      mockAxios.onGet('/api/allproducts/1').replyOnce(200, fakeProduct)
      await store.dispatch(fetchProduct(1))
      const actions = store.getActions()
      expect(actions[0].product).to.be.deep.equal(fakeProduct)
    })
  })
})
