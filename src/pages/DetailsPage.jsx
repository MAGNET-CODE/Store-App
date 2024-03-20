import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  const productDeatils = useSelector((store) =>
     store.product.products.find((i) => i.id === +id)
  );

  // const {title, image, price, description, category} = productDeatils;
  if(!productDeatils) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productDeatils.image} alt={productDeatils.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDeatils.title}</h3>
        <p className={styles.description}>{productDeatils.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDeatils.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDeatils.price} $
          </span>
          <Link to="/" >
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage