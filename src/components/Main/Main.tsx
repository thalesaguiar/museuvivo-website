import { DropDownMenu } from "../Dropdown Menu/DropdownMenu";
import ImageCard from "../ImageCard/ImageCard";
import InfoCard from "../InfoCard/InfoCard";
import { LateralMenu } from "../LateralMenu/LateralMenu";
import style from "./Main.module.css";
export default function MainSection() {
  return (
    <>
      <div className={style.container}>
        <DropDownMenu />
        <div>
          <InfoCard />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "20px",
            marginTop: "50px",
          }}
        >
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            Em exposição
          </p>
        </div>
        <ImageCard />
      </div>
    </>
  );
}
