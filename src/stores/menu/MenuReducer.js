export const menuActionType = {
  SET_PRODUCTS_BY_CATEGORY: 'SET_PRODUCTS_BY_CATEGORY',
  SELECT_ALL_PRODUCTS: 'SELECT_ALL_PRODUCTS'
};

export const menuReducer = (state, action) => {
  switch (action.type) {
    case menuActionType.SET_PRODUCTS_BY_CATEGORY:
      return { 
        ...state,
        products: [...action.payload]
      };
    case menuActionType.SELECT_ALL_PRODUCTS:
      return {}
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}