import { Link } from 'react-router-dom';
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { shortenText, productQuantity } from '../helper/helper';
// import { useCart } from "../context/CartContext";
import styles from "./Card.module.css";

function Card({data}) {
   const {id, title, image, price} = data;

//    const [state, dispach] =  useCart();

//    const quantity = productQuantity(state, id);
   const quantity = 0;

   const clickHandler = (type) => {
        // dispach({type, payload: data})
   }
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>${price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
                <TbListDetails />
            </Link>
            <div>
                {
                    quantity === 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM")}>
                        <MdDeleteOutline />
                        </button>
                    )
                }
                {
                    quantity > 1 && (
                        <button onClick={() => clickHandler("DECREASE")}>-</button>
                    )
                }
                {!!quantity && (<span>{quantity}</span>)}
                {
                    quantity === 0 ? (
                        <button onClick={() => clickHandler("ADD_ITEM")}>
                        <TbShoppingBagCheck />
                        </button>
                    ) : (
                        <button onClick={() => clickHandler("INCREASE")}>+</button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Card