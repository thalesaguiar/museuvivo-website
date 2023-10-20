import styles from "../styles/components/MainSection.module.css";

export default function MainSection() {
  return (
    <section className={styles.container}>
      <h2>Localização e Horário</h2>
      <div className={styles.imagesContainer}>
        <div className={styles.cardA}>
          <img className={styles.imageA} src="/entranceA.jpeg" />
          <h3>
            <a href="https://www.google.com/maps/dir/MUSEU+VIVO+-++Museu+Metropolitano%E2%80%A6//@-19.4411368,-42.5668917,17z/data=!4m8!4m7!1m5!1m1!1s0xaffe39c0d87ad5:0xf24ac6fa718acde8!2m2!1d-42.5670639!2d-19.4380546!1m0?entry=ttu">
              Endereço da Associação Cultural Museu Vivo
            </a>
          </h3>
          <div className={styles.information}>
            <h4>Conheça as raizes de Ipatinga</h4>
            <br />
            <p> Terça a Sexta de 9 as 12 e de 14 as 18 </p>
            <p>Sábado e Domingo de 8 as 12 e de 14 as 17</p>
          </div>
        </div>
        <div className={styles.cardB}>
          <img className={styles.imageB} src="/visitors1.jpg" />
        </div>
      </div>
    </section>
  );
}
