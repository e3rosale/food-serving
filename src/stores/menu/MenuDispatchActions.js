import { menuActionType } from "./MenuReducer"

export const setProductsByCategory = (productsByCategory) => {
  return { 
    type: menuActionType.SET_PRODUCTS_BY_CATEGORY, 
    payload: productsByCategory?.data ?? [] 
  }
}