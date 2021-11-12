import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductDetails = () => {
  const [showRouteValue, setshowRouteValue] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.container4}>
      <main className={styles.main}>
        <h1 className={styles.title}>You are in product details page!</h1>
        <ul>
          <li>
            <Link href="/productportfolio">Back to product portfolio</Link>
          </li>
        </ul>
        <button
          className={styles.button}
          onClick={() => {
            setshowRouteValue(!showRouteValue);
          }}
        >
          Get Route Values
        </button>
        {showRouteValue && (
          <div>
            <div>
              Route Path: <em>{router.pathname}</em>
            </div>
            <div>
              Product Id: <em>{router.query.productid}</em>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetails;
