import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import styles from "@/styles/Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <section className={`${styles.container} limit`}>
        <div className={`${styles.redes}`}>
          <h1 className={styles.title}>Redes</h1>
          <div className={styles.linha}></div>

          <p className={styles.text}>
            Interessado em discutir um projeto ou tem alguma pergunta? Entre em
            contato comigo e vamos conversar!
          </p>

          <div className={styles.box}>
            <Contact
              url="https://www.linkedin.com/in/montemarcos/"
              urlLogo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />

            <Contact
              url="https://github.com/Marcos-Monte"
              urlLogo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
              alt="GitHub"
            />

            <Contact
              url="https://vercel.com/marcosmontes-projects"
              urlLogo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
              alt="Vercel"
            />
          </div>
          <div className={styles.box}>
            <Contact
              url="tel:+5513996398240"
              urlLogo="https://www.svgrepo.com/show/469477/phone-out.svg"
              alt="+5513996398240"
            />
            <Contact
              url="mailto:marcos.monte.junior@gmail.com"
              urlLogo="https://www.svgrepo.com/show/464889/email-open.svg"
              alt="marcos.monte.junior@gmail.com"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
