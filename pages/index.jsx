import Photo from "@/public/img/perfil.jpg";
import Image from "next/image";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <section className={`container limit`}>
        <Image className={styles.photo} src={Photo} alt="Foto de Perfil" />

        <div className={styles.description}>
          <h1 className={styles.title}>Marcos Monte</h1>
          <h2 className={styles.subtitle}>Desenvolvedor Web</h2>
          <div className={styles.tecnologies}></div>

          <button className={styles.button}>
            <i class="bi bi-download"></i>
            Download CV
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
