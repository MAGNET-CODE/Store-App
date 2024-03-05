import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProduckContext";
import styles from "./ProductsPage.module.css";
import { searchProducts, filterProducts, createQueryObject } from "../helper/helper"
import { useSearchParams } from "react-router-dom";
function ProductsPage() {
    const products = useProducts()

    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products)
    }, [products]);

    useEffect(() => {
        setSearchParams(query)
       let finalProducts = searchProducts(products, query.search);
       finalProducts = filterProducts(finalProducts, query.category)
       setDisplayed(finalProducts)
    }, [query]);
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
    }
    
    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));

        if(tagName !== "LI") return;
    }
  return (
    <>
        <div>
            <input 
                type="text"
                placeholder="Search..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <button onClick={searchHandler}>
                <ImSearch />
            </button>
        </div>
        <div className={styles.container}>
            <div className={styles.products}>
                {!displayed.length && <Loader />}
                {displayed.map((p) => (
                <Card key={p.id} data={p} />
                ))}
            </div>
            <div className={styles.sidebar}>
                <div>
                    <FaListUl />
                    <p>Categories</p>
                </div>
                <ul onClick={categoryHandler}>
                    <li>All</li>
                    <li>Electronics</li>
                    <li>Jewelery</li>
                    <li>Men's Clothing</li>
                    <li>Women's Clothing</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProductsPage