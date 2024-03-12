import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";


const ProductContext = createContext(); 

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fethProducts = async () => {
            try {
                const response = await api.get("/products");
                setProducts(response);
            } catch (error) {
                console.log(error.message);
            }
        };
        fethProducts();
    }, []);
  return (
    <ProductContext.Provider value={products} >
        {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => {
    const products = useContext(ProductContext);
    return products;
}
const useProductDetails = (id) => {
    const products = useContext(ProductContext);
    const result = products.find((product) => product.id === id);
    return result;
}

export default ProductsProvider;
export { useProducts, useProductDetails };