import Image from "next/image";

import styles from "@/styles/Contact.module.css";

export default function Contact(props) {
  return (
    <div className={styles.link}>
      <a href={props.url} target="_blank">
        <Image
          className={styles.logo}
          src={props.urlLogo}
          width="100"
          height="100"
          alt={`Logo do ${props.alt}`}
        />
      </a>
      <p className={styles.name}>{props.alt}</p>
    </div>
  );
}
