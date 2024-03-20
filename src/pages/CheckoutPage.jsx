import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import { useSelector } from "react-redux";

import styles from "./CheckoutPage.module.css"

function CheckoutPage() {

  const state = useSelector((store) => store.cart);

  if(!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <p>The shopping cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar/>
      <div className={styles.products}>
        {
          state.selectedItems.map((product) => 
            <BasketCard key={product.id} data={product}
          />)
        }
      </div>
    </div>
  )
}

export default CheckoutPage