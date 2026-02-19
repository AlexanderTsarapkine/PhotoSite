import Image from "next/image";
import styles from "./page.module.css"

export default function Page() {
  return (
    <div>
      <main>
          <div className={styles.imageContainer}>
              <Image className={styles.image}
                  src="/photos/TSA01164.jpg"
                     // src="/photos/TSA00907.jpg"
                  alt="Description of photo"
                  fill={true}
              />
          </div>

      </main>
    </div>
  );
}
