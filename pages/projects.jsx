import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Thiago from "/public/img/andrade.png";
import CadastroGestante from "/public/img/cadastro-gestante.png";
import Clinica from "/public/img/clinica.png";
import JornadaPython from "/public/img/jornada-python.png";
import Restaurant from "/public/img/restaurant.png";

import styles from "@/styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Header />
      <section className={`${styles.container} limit`}>
        <h1 className={styles.title}>Portifólio</h1>
        <div className={styles.projects}>
          <Card
            subtitle="Página Institucional"
            title="Thiago Andrade"
            image={Thiago}
            github="https://github.com/Marcos-Monte/thiago-andrade"
            vercel="https://thiago-andrade.vercel.app/manifesto"
          />
          <Card
            subtitle="Menu Interativo"
            title="Restaurant"
            image={Restaurant}
            github="https://github.com/Marcos-Monte/next-restaurant"
            vercel="https://next-restaurant-ecru.vercel.app/"
          />
          <Card
            subtitle="Landing Page"
            title="Jornada Python"
            image={JornadaPython}
            github="https://github.com/Marcos-Monte/Teste-Pratico-Hashtag"
            vercel="https://teste-pratico-hashtag.vercel.app/"
          />
          <Card
            subtitle="Página de Cadastro"
            title="Controle de Gestantes SUS"
            image={CadastroGestante}
            github="https://github.com/Marcos-Monte/cadastro-gestantes"
            vercel="https://cadastro-gestantes.vercel.app/"
          />
          <Card
            subtitle="Landing Page"
            title="Clínica Médica CM Life"
            image={Clinica}
            github="https://github.com/Marcos-Monte/WebSite-Clinica-React"
            vercel="https://web-site-clinica-react.vercel.app/"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
