import Link from "next/link";
import styles from "../styles/Home.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container6}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          404!
        </h1>
        <h2>Oops! This page is empty.</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default PageNotFound;
