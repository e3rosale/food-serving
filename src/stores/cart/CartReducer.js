export const cartActionType = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  INCREMENT_PRODUCT_AMOUNT: 'INCREMENT_PRODUCT_AMOUNT',
  DECREMENT_PRODUCT_AMOUNT: 'DECREMENT_PRODUCT_AMOUNT',
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionType.ADD_TO_CART:
      return {
        products: [...state.products, { ...action.payload, amount: 1 }]
      }
    case cartActionType.CLEAR_CART:
      return {
        products: []
      }
    case cartActionType.INCREMENT_PRODUCT_AMOUNT:
      return {
        products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)
      }
    case cartActionType.DECREMENT_PRODUCT_AMOUNT:
      return {
        products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)
      }
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

export const addToCart = (product) => {
  return { type: cartActionType.ADD_TO_CART, payload: product }
}