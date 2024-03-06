import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";
import styles from "./SearchBox.module.css";

function SearchBox({search, setSearch, setQuery}) {
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
    }
  return (
    <div className={styles.searchbox}>
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
  )
}

export default SearchBox