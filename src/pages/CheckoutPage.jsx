import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
// import { useCart } from "../context/CartContext";
import styles from "./CheckoutPage.module.css"

function CheckoutPage() {
  // const [state, dispach] = useCart();

  // const clickHandler = (type, payload) => {
  //   dispach({type, payload})
  // }

  // if(!state.itemsCounter) {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.empty}>
  //         <p>The shopping cart is empty</p>
  //       </div>
  //     </div>
  //   );
  // }
  console.log(state)
  return (
    <div className={styles.container}>
      {/* <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {
          state.selectedItems.map((product) => 
            <BasketCard key={product.id} data={product} clickHandler={clickHandler} 
          />)
        }
      </div> */}
    </div>
  )
}

export default CheckoutPage