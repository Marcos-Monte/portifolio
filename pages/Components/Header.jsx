import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} limit`}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          Sobre
        </Link>
        <Link className={styles.link} href="/projects">
          Projetos
        </Link>
      </nav>
    </header>
  );
}
