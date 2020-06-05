import {combineReducers} from 'redux'
import products from './products'
import cart from './cart'
import header from './header'
const appReducers = combineReducers({
    products,
    cart,
    header
});
export default  appReducers;