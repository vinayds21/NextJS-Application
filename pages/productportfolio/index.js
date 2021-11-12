import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductPortfolio = () => {
  return (
    <div className={styles.container2}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            This is product portfolio page!
        </h1>
        <ul>
          <li>
            <Link href="/productportfolio/de-33-12-hng-21">Some Product</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ProductPortfolio;
