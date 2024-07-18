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
        <div className={styles.card}>
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
        </div>
        <div className={styles.about}>
          <h1 className={styles.title}>Sobre mim</h1>
          <div className={styles.linha}></div>

          <p className={styles.text}>
            Sou desenvolvedor Front-End e estudante de Análise e Desenvolvimento
            de Sistemas. Também sou servidor público estatutário em Santos,
            atuando na área de saúde como Agente Comunitário de Saúde. Possuo
            graduação em Tecnologia em Logística pela FATEC Rubens Lara e sou
            pós-graduado em Gestão de Estratégia em Saúde da Família pela
            FAVENI. Atualmente, estou no 4º semestre do curso de Análise e
            Desenvolvimento de Sistemas.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
