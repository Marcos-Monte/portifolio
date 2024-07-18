import Image from "next/image";

import Photo from "@/public/img/perfil.jpg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <section className={`${styles.container} limit`}>
        <Image className={styles.photo} src={Photo} alt="Foto de Perfil" />

        <div className={`${styles.description}`}>
          <h1 className={styles.title}>Marcos Monte</h1>
          <h2 className={styles.subtitle}>Desenvolvedor Web</h2>
          <div className={styles.tecnologies}>
            <Image
              className={styles.tech}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              width="70"
              height="70"
            />

            <Image
              className={styles.tech}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              width="70"
              height="70"
            />

            <Image
              className={styles.tech}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width="70"
              height="70"
            />

            <Image
              className={styles.tech}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              width="70"
              height="70"
            />

            <Image
              className={styles.tech}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              width="70"
              height="70"
            />
          </div>

          <a
            className={styles.button}
            href="/Curriculo-Marcos Monte.pdf"
            target="_blank"
          >
            <i class="bi bi-download"></i>
            Download CV
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
