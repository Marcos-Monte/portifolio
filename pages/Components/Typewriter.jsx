import { useEffect, useRef } from "react";
import Typewriter from "t-writer.js";

import styles from "@/styles/Type.module.css";

export default function Type() {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const subtitleElement = subtitleRef.current;

    // Certifique-se de que o elemento alvo está vazio
    if (subtitleElement) {
      subtitleElement.innerHTML = "";

      const writer = new Typewriter(subtitleElement, {
        loop: true,
        deleteSpeed: 200,
        typeColor: "#28a745",
      });

      writer
        .type(" Web")
        .rest(800)
        .remove(3)
        .type("Front-End")
        .rest(500)
        .remove(9)
        .type("React")
        .rest(500)
        .remove(5)
        .type("JavaScript")
        .rest(500)
        .clear()
        .start();
    }
  }, []);

  return (
    <div className={styles.containerType}>
      {/* Texto fixo na aplicação */}
      <span className={styles.typeStyle}>Desenvolvedor_</span>
      {/* Texto Dinamico na aplicação */}
      <span className={styles.typeStyle} ref={subtitleRef}></span>
    </div>
  );
}
