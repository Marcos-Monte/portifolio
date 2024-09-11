import Card from "./Components/Card";
import Footer from "./Components/Footer";
import CadastroGestante from "/public/img/cadastro-gestante.png";
import Clinica from "/public/img/clinica.png";
import JornadaPython from "/public/img/jornada-python.png";
import Restaurant from "/public/img/restaurant.png";
import Vd from "/public/img/solicitacaovd.png";
import Thiago from "/public/img/thiagoandrade.png";

import styles from "@/styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section className={`${styles.container} limit`}>
        <h1 className={styles.title}>Portifólio</h1>
        <div className={styles.linha}></div>
        <div className={styles.projects}>
          <Card
            subtitle="Página Institucional"
            title="Thiago Andrade"
            image={Thiago}
            github="https://github.com/Marcos-Monte/thiago-andrade"
            vercel="https://thiago-andrade.vercel.app"
          />

          <Card
            subtitle="Gerador de Visita Domiciliar"
            title="Unidade de Saúde"
            image={Vd}
            github="https://github.com/Marcos-Monte/vd-valongo"
            vercel="https://web-site-clinica-react.vercel.app/"
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
            title="Jornada Python"
            image={JornadaPython}
            github="https://github.com/Marcos-Monte/Teste-Pratico-Hashtag"
            vercel="https://teste-pratico-hashtag.vercel.app/"
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
