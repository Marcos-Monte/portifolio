import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "@/styles/Header.module.css";

export default function Header() {
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
      <nav className={`${styles.nav} limit`}>
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
