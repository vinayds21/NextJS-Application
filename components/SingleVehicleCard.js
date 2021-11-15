import Image from "next/image";
import styles from "../styles/Home.module.css";

const SingleVehicleCard = ({ launch }) => (
  <div className={styles.card}>
    <div className={styles.body}>
      <div className={styles.img}>
        {/* <img src={launch.links.mission_patch_small} alt={launch.mission_name} /> */}
        <Image
          loader={() => launch.links.mission_patch_small}
          src={launch.links.mission_patch_small}
          alt={launch.mission_name}
          width={160}
          height={160}
          unoptimized={false}
        />
      </div>
      <label className={styles.label}>
        {`${launch.mission_name} #${launch.flight_number}`}
      </label>
      <div className={styles.missions}>
        <strong>Mission ID: </strong>
        {launch.mission_id.length ? (
          <span>{launch.mission_id.map((id, i) => id)}</span>
        ) : (
          <span> NA</span>
        )}
      </div>
      <div>
        <strong>Launch Year: </strong>
        <span>{launch.launch_year}</span>
      </div>
      <div>
        <strong>Successful Launch: </strong>
        <span>{launch.launch_success ? "true" : "false"}</span>
      </div>
      <div>
        <strong>Successful Landing: </strong>
        {/* <span>{ launch.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}</span> */}
        <span>
          {launch.rocket.first_stage.cores.length
            ? launch.rocket.first_stage.cores[0].land_success
              ? "true"
              : launch.rocket.first_stage.cores[0].land_success === false
              ? "false"
              : "Not Available"
            : "Not Available"}
        </span>
      </div>
    </div>
  </div>
);

export default SingleVehicleCard;
