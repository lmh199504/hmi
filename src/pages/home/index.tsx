import React from 'react';
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";


const Home: React.FC = () => {
  return <>
    <SpotCheck />
    <DetailMap className={styles.hidden} />
  </>
}

export default Home