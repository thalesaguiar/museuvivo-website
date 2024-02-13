import Image from "next/image";
import style from "./InfoCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapLocationDot,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faClock} />;
export default function InfoCard() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div style={{ margin: "20px" }}>
          <FontAwesomeIcon
            icon={faClock}
            width={20}
            height={30}
            color="#1C3162"
          />
        </div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ fontSize: "2rem", margin: 0 }}>
            Abrimos Sexta, Sábado, Domingo e feriados.
          </h4>
          <p style={{ fontSize: "1.8rem", margin: 0 }}>
            Horários: Sexta 18:30 as 21:00 <br /> Sábado e Domingo 8:00 as 12:00
            e 14:00 as 18:00.
          </p>
        </div>
      </div>
      <div className={style.infoContainer}>
        <div style={{ margin: "20px" }}>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            width={20}
            height={30}
            color="#1C3162"
          />
        </div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ fontSize: "2rem", margin: 0 }}>Localização </h4>
          <p style={{ fontSize: "1.8rem", margin: 0 }}>
            Rua água potável 398 A <br />
            Bairro das Fontes, Ipatinga-MG <br /> Telefone: +55(31)98607-6883
          </p>
        </div>
      </div>
      <div className={style.infoContainer}>
        <div style={{ margin: "20px" }}>
          <FontAwesomeIcon
            icon={faTicket}
            width={20}
            height={30}
            color="#1C3162"
          />
        </div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ fontSize: "2rem", margin: 0 }}>Ingressos</h4>
          <p style={{ fontSize: "1.8rem", margin: 0 }}>
            Meia: R$20,00
            <br />
          </p>
          <p
            style={{
              textDecoration: "line-through",
              fontSize: "1.8rem",
              margin: 0,
            }}
          >
            Inteira: R$40,00
          </p>
          <p
            style={{
              fontSize: "1.8rem",
              margin: 0,
            }}
          >
            {/* <strong>
              (Preço promocional para o ano de 2024, ano do anivérsário de
              Ipatinga.Todos pagam meia entrada.)
            </strong> */}
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Menores de 18 anos entram apenas acompanhados pelos pais ou
            professores
          </p>
        </div>
      </div>
      <iframe
        className={style.googleMaps}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10641.448325583577!2d-42.57336236099158!3d-19.44175948527179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaffe39c0d87ad5%3A0xf24ac6fa718acde8!2sMUSEU%20VIVO%20-%20Museu%20Metropolitano%20do%20Vale%20do%20A%C3%A7o!5e0!3m2!1spt-BR!2sbr!4v1707594235971!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></iframe>
    </div>
  );
}
