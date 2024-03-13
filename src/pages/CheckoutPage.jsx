import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";


function CheckoutPage() {
  const [state, dispach] = useCart();

  const clickHandler = (type, payload) => {
    dispach({type, payload})
  }
  console.log(state)
  return (
    <div>
      <div>
        {
          state.selectedItems.map((product) => 
            <BasketCard key={product.id} data={product} clickHandler={clickHandler} 
          />)
        }
      </div>
    </div>
  )
}

export default CheckoutPage