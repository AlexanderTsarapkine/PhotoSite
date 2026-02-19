import type { Metadata } from "next";
import styles from './nav.module.css';
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alex Tsarapkine",
  description: "My site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          <div className={styles.nav}>
              <div className={styles.title}>Tsarapkine</div>
              <div className={styles.navActions}>
                  <Link href="/">Home</Link>
                  <Link href="https://www.linkedin.com/in/alextsa/">Linkedin</Link>
                  <Link href="/">Admin</Link>
              </div>
          </div>
          <div className={"content"}>
              {children}
          </div>
      </body>
    </html>
  );
}
