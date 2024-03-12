import { Link } from 'react-router-dom';
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from '../helper/helper';
import { useCart } from "../context/CartContext";
import styles from "./Card.module.css";

function Card({data}) {
    const {id, title, image, price} = data;

   const [state, dispach] =  useCart();

   const clickHandler = () => {
        dispach({type: "ADD_ITEM", payload: data})
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
            <button onClick={clickHandler}>
                <TbShoppingBagCheck />
            </button>
        </div>
    </div>
  )
}

export default Card