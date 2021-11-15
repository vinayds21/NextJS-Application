import Link from "next/link";
import { getAllCurrencies } from "../../helper/api-utils";
import styles from "../../styles/Home.module.css";

const CurrencyList = (props) => {
  const { currencyList } = props;
  const showAllCurrenices = () => {
    if (currencyList && currencyList.length) {
      const tempArr = [];
      currencyList.forEach((el, i) => {
        tempArr.push(
          <tr key={el.id + i}>
            <td>{el.name}</td>
            <td>{el.id}</td>
          </tr>
        );
      });
      return <tbody>{tempArr}</tbody>;
    }
    return null;
  };
  return (
    <div className={styles.container2}>
      <main className={styles.main}>
        <h1 className={styles.title}>Money! Money! Money!</h1>
        <Link href="/">Back</Link>
        <br />
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Cuurency Code</th>
            </tr>
          </thead>
          {showAllCurrenices()}
        </table>
      </main>
    </div>
  );
};

// Pre Rendering
export async function getStaticProps() {
  const curriencies = await getAllCurrencies();
  return {
    props: {
      currencyList: curriencies.data,
    },
    revalidate: 10000,
  };
}

export default CurrencyList;
