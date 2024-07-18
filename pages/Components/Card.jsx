import Image from "next/image";

import styles from "@/styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <span className={styles.cardSubtitle}>{props.subtitle} </span>

      <h2 className={styles.cardTitle}>{props.title}</h2>

      <Image
        className={styles.cardImage}
        src={props.image}
        alt={props.subtitle}
      />

      <h3 className={styles.codeTitle}>Links</h3>

      <div className={styles.code}>
        <a className={styles.anchor} href={props.github} target="_blank">
          <i className="bi bi-github"></i>
        </a>

        <a className={styles.anchor} href={props.vercel} target="_blank">
          <i className="bi bi-display"></i>
        </a>
      </div>
    </div>
  );
}
