import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constants/list";
function Sidebar({ query, setQuery }) {
    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));

        if(tagName !== "LI") return;
    }
  return (
    <div className={styles.sidebar} >
        <div>
            <FaListUl />
            <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
            {categories.map((item) => (
                <li 
                    key={item.id} 
                    className={item.type.toLowerCase() === query.category
                    ? styles.selected 
                    : null} >{item.type}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar