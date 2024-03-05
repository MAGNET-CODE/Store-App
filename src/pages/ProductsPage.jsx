import Card from "../components/Card"
import { useProducts } from "../context/ProduckContext"
import styles from "./ProductsPage.module.css"
function ProductsPage() {
    const products = useProducts()

  return (
    <div className={styles.container}>
        <div className={styles.products}>
            {!products.length && <p>loading...</p>}
            {products.map((p) => (
            <Card key={p.id} data={p} />
            ))}
        </div>
        <div className={styles.sidebar}>sidebar</div>
    </div>
  )
}

export default ProductsPage