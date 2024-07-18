import Footer from "./Components/Footer";
import Header from "./Components/Header";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <section className={`${styles.container} limit`}>
        <h1 className={styles.title}>Sobre mim</h1>
        <div className={styles.linha}></div>
        <p>
          Sou desenvolvedor Front-End e estudante de Análise e Desenvolvimento
          de Sistemas. Também sou servidor público estatutário em Santos,
          atuando na área de saúde como Agente Comunitário de Saúde. Possuo
          graduação em Tecnologia em Logística pela FATEC Rubens Lara e sou
          pós-graduado em Gestão de Estratégia em Saúde da Família pela FAVENI.
          Atualmente, estou no 4º semestre do curso de Análise e Desenvolvimento
          de Sistemas.
        </p>
      </section>
      <Footer />
    </>
  );
}
