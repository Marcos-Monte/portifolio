import Footer from "./Components/Footer";
import Header from "./Components/Header";

import styles from "@/styles/About.module.css";

import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <section className={`page limit`}>
        <nav className={`${styles.nav} limit`}>
          <Link className={styles.link} href="">
            <i class="bi bi-linkedin"></i>
          </Link>

          <Link className={styles.link} href="">
            <i class="bi bi-display"></i>
          </Link>
          <Link className={styles.link} href="">
            <i class="bi bi-github"></i>
          </Link>
          <Link className={styles.link} href="">
            <i class="bi bi-telephone-x"></i>
          </Link>
          <Link className={styles.link} href="">
            <i class="bi bi-envelope"></i>
          </Link>
        </nav>
      </section>
      <Footer />
    </>
  );
}
