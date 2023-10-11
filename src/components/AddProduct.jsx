import { addToCart } from "../stores/cart/CartReducer";
import { useCartState } from "../stores/cart/CartStateContext"

export const AddProduct = ({ product }) => {
  const [, cartDispatch] = useCartState();

  const addProduct = (product) => {
    cartDispatch(addToCart(product))
  }

  return (
    <div className="flex justify-end">
      <button onClick={() => addProduct(product)} className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg">
        <span>+</span>
      </button>
    </div>
  )
}