import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductList = () => {
  return (
    <div className={styles.container1}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Level-1 - Static Route
        </h1>
        <ul>
          <li>
            <Link href="/productlist/category">Nested Static Route</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
