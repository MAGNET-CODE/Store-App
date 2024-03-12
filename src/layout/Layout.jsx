import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css"

function Layout({children}) {
    const [state] = useCart();
    console.log(state.itemsCounter)
  return (
    <>
        <header className={styles.header}>
            <Link to="/" >MagnetShop</Link>
            <div>
                <Link to="/checkout" >
                    <PiShoppingCartSimpleBold />
                    {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                </Link>
            </div>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by <a href="https://github.com/MAGNET-CODE">MAGNET_CODE</a> with ❤</p>
        </footer>
    </>
  )
}

export default Layout