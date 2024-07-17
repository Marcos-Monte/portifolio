import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={`${styles.assignature} limit`}>
        Desenvolvido por
        <a
          className={styles.anchor}
          href="https://www.linkedin.com/in/montemarcos/"
        >
          @Marcos-Monte
        </a>
      </span>
    </footer>
  );
}
