import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProduckContext"
import styles from "./ProductsPage.module.css"
function ProductsPage() {
    const products = useProducts()

  return (
    <div className={styles.container}>
        <div className={styles.products}>
            {!products.length && <Loader />}
            {products.map((p) => (
            <Card key={p.id} data={p} />
            ))}
        </div>
        <div className={styles.sidebar}>sidebar</div>
    </div>
  )
}

export default ProductsPage