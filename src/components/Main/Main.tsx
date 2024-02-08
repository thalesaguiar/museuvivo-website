import ImageCard from "../ImageCard/ImageCard";
import style from "./Main.module.css";
export default function MainSection() {
  return (
    <section className={style.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "30px",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: "2rem" }}>
          Em <br />
          Exposição
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Veja todas as exposições
        </p>
      </div>
      <div>
        <ImageCard />
      </div>
    </section>
  );
}
