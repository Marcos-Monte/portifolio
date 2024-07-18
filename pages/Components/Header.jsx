import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} limit`}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/projects">
          Projetos
        </Link>
        <Link className={styles.link} href="/contacts">
          Contatos
        </Link>
      </nav>
    </header>
  );
}
