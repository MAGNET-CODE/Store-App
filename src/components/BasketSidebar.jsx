import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

import styles from "./BasketSidebar.module.css";


function BasketSidebar() {

  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
        <div>
            <TbChecklist />
            <p>Total:</p>
            <span>{state.totalPrice} $</span>
        </div>
        <div>
            <FaHashtag />
            <p>Quantity:</p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
            <BsPatchCheck />
            <p>Status:</p>
            <span>{!state.checkout && "pending"}</span>
        </div>
        <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  )
}

export default BasketSidebar