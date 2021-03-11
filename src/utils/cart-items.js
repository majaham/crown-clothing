export const addCartItems = (cartItems, newCartItem) =>{
    const cartItem = cartItems.find( cartItem => cartItem.id === newCartItem.id);
   
    if(cartItem){
        return cartItems.map(item => item.id === newCartItem.id?
            {...item,quantity: item.quantity + 1}: item);
    }
    return [...cartItems, newCartItem];
}