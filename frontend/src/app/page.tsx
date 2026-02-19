import Image from "next/image";

import './globals.css';

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
          <div className={styles.collectionContainer}>
              <div className={styles.imageContainer}>
                  <Image className={styles.image}
                         src="/photos/TSA01164.jpg"
                         alt="Description of photo"
                         fill={true}
                  />
              </div>
              <div className={styles.imageContainer}>
                  <Image className={styles.image}
                         src="/photos/TSA00907.jpg"
                         alt="Description of photo"
                         fill={true}
                  />
              </div>
              <div className={styles.imageContainer}>
                  <Image className={styles.image}
                         src="/photos/TSA01157.jpg"
                         alt="Description of photo"
                         fill={true}
                  />
              </div>
              <div className={styles.imageContainer}>
                  <Image className={styles.image}
                         src="/photos/TSA01167.jpg"
                         alt="Description of photo"
                         fill={true}
                  />
              </div>
          </div>
      </main>
    </div>
  );
}
