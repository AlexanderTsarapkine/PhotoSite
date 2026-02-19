import Image from "next/image";
import styles from "./page.module.css"

export default function Page() {
  return (
    <div>
      <main>
          <div className={styles.collectionContainer}>

              <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                      <Image className={styles.image}
                             src="/photos/TSA01164.jpg"
                             alt="Description of photo"
                             fill={true}
                      />
                  </div>
                  <p>something something about this</p>
              </div>

              <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                      <Image className={styles.image}
                             src="/photos/TSA00907.jpg"
                             alt="Description of photo"
                             fill={true}
                      />
                  </div>
                  <p>something something about this</p>
              </div>

              <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                      <Image className={styles.image}
                             src="/photos/TSA01157.jpg"
                             alt="Description of photo"
                             fill={true}
                      />
                  </div>
                  <p>something something about this</p>
              </div>

              <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                      <Image className={styles.image}
                             src="/photos/TSA01167.jpg"
                             alt="Description of photo"
                             fill={true}
                      />
                  </div>
                  <p>something something about this</p>
              </div>
          </div>
      </main>
    </div>
  );
}
