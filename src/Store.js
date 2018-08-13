import { createStroe } from 'redux'
import reducer from './reducers/reducers.js'

const store = createStroe(reducer)
export default store