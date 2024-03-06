import { FaListUl } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProduckContext";
import { searchProducts, filterProducts, createQueryObject, getInitialQuery } from "../helper/helper";

import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";

function ProductsPage() {
    const products = useProducts()

    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products);
        setQuery(getInitialQuery(searchParams))
    }, [products]);

    useEffect(() => {
       setSearchParams(query);
       setSearch(query.search || "")
       let finalProducts = searchProducts(products, query.search);
       finalProducts = filterProducts(finalProducts, query.category)
       setDisplayed(finalProducts)
    }, [query]);
    
    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));

        if(tagName !== "LI") return;
    }
  return (
    <>
        <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
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