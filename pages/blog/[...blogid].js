import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const BlogPostPage = () => {
  const [showRouteValue, setshowRouteValue] = useState(false);
  const router = useRouter();
  console.log('router.query', router.query);
  return (
    <div className={styles.container5}>
      <main className={styles.main}>
        <h1 className={styles.title}>This page URL looks like a blog URL!</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
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
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPostPage;
