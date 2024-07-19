import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "@/styles/Header.module.css";
import Menu from "./Menu";

export default function Header() {
  const visible = "visible";
  const hidden = "hidden";

  const [visibility, setVisibility] = useState(false);
  function handleMenu() {
    setVisibility(!visibility);
  }

  // variável router recebe as funções do módulo useRouter()
  const router = useRouter();
  // Váriável de estado
  const [selectedLink, setSelectedLink] = useState(null);

  // useEffect -> para executar sempre que o 'router.pathname' (rota) mudar
  useEffect(() => {
    // Objeto que mapeia cada rota para um índice correspondente
    const caminhoPorIndice = {
      "/": 0,
      "/projects": 1,
      "/contacts": 2,
    };
    // Atualiza o estado 'selectedLink' com o índice que corresponde a rota 'atual'
    setSelectedLink(caminhoPorIndice[router.pathname]);
  }, [router.pathname]);

  return (
    <header className={styles.header}>
      <Menu funcao={handleMenu} />

      <nav
        className={`${styles.nav} limit 
        ${styles[visibility === false ? hidden : visible]}`}
      >
        <Link
          className={`${styles.link} ${
            selectedLink === 0 ? styles.selected : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${
            selectedLink === 1 ? styles.selected : ""
          }`}
          href="/projects"
        >
          Projetos
        </Link>
        <Link
          className={`${styles.link} ${
            selectedLink === 2 ? styles.selected : ""
          }`}
          href="/contacts"
        >
          Contatos
        </Link>
      </nav>
    </header>
  );
}
