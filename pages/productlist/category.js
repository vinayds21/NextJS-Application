import Link from "next/link";
import styles from "../../styles/Home.module.css";

const CategoryPage = () => {
  return (
    <div className={styles.container3}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Level-2 - Static Route 
        </h1>
        <ul>
          <li>
            <Link href="/productlist">Back to level-1 static route</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default CategoryPage;
