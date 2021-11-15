import Link from "next/link";
import { getSpacexShuttles } from "../../helper/api-utils";
import SingleVehicleCard from "../../components/SingleVehicleCard";
import styles from "../../styles/Home.module.css";

const SpaceXShuttles = (props) => {
  const { spaceShuttleList } = props;
  return (
    <div className={styles.container7}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          SpaceX Space Shuttles (SSR | Image Lazy Loading)
        </h1>
        <Link href="/">Back</Link>
        <br />
        <div className={styles.list}>
        {spaceShuttleList.length ? (
          spaceShuttleList.map((launch, i) => (
            <SingleVehicleCard launch={launch} key={`card${i}`} />
          ))
        ) : (
          <div>No data found</div>
        )}
        </div>
      </main>
    </div>
  );
};

// For Server Side Rendering
export async function getServerSideProps(context) {
  //   const { params } = context;
  const response = await getSpacexShuttles();
  console.log("response", response);
  return {
    props: {
      spaceShuttleList: response,
    },
  };
}

export default SpaceXShuttles;
