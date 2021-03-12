export const addCartItem = (cartItems, newCartItem) =>{
    const cartItem = cartItems.find( cartItem => cartItem.id === newCartItem.id);
   
    if(cartItem){
        return cartItems.map(item => item.id === newCartItem.id?
            {...item,quantity: item.quantity + 1}: item);
    }
    return [...cartItems, newCartItem];
}

export const removeCartItem = (cartItems, cartItem) => {
    const foundItem = cartItems.find(item => item.id === cartItem.id);
    if(!foundItem) return [...cartItems];
    if(foundItem.quantity > 1){
        return cartItems.map(item => (item.id === foundItem.id)? 
            {...item, quantity: item.quantity-1}: item);
    }
    return cartItems.filter(item => item.id !== cartItem.id);
}