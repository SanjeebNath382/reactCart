import CartReducer from './reducers/reducers'

import {createStore} from 'redux'

const store= createStore(CartReducer)

export default store;