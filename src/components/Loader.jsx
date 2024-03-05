import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css"
function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines
            visible={true}
            height="100px"
            width="100px"
            strokeColor="#fe5d42"
            strokeWidth="3"
            animationDuration="0.75"
        />
    </div>
  )
}

export default Loader