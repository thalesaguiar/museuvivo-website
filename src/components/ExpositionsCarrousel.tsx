import styles from "../styles/components/ExpositionCarrousel.module.css";

export default function Main() {
  return (
    <section className={styles.container}>
      <h2>Em exposição</h2>
      <div className={styles.carroussel}>
        <div>
          <img className={styles.currentImage} src="/indiosexp.png" />
        </div>
        <div>
          <img className={styles.nextImage} src="/carvoeirocarrousel.png" />
        </div>
        <button>
          {" "}
          <img src="/arrow.png" alt="navigation image button" />
        </button>
      </div>
    </section>
  );
}
