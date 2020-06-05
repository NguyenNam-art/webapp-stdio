import * as types from './../Constants/Actiontypes'
var data = JSON.parse(localStorage.getItem('HEADER'));

var initialState =  data ? data : [];
const header = (state = initialState,action) =>{
    var {product,keyword,quantity} = action;
    var index = -1;
    switch(action.type){
        case types.SEARCH :
            index = findProductInCart(state, product);
            if (index !== -1) {
                
            }
            return [...state]
        default : return [...state];
    }
        
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}   
export default header;