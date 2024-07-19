import styles from "@/styles/Menu.module.css";

export default function Menu(props) {
  return (
    <div className={`${styles.containerMenu} limit`}>
      <i className="bi bi-file-code"></i>

      <button className={styles.menu} onClick={props.funcao}>
        <i className="bi bi-menu-button"></i>
      </button>
    </div>
  );
}
