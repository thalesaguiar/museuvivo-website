import Image, { StaticImageData } from "next/image";
import CardImg1T from "../../../public/1 Tablet.png";
import CardImg2T from "../../../public/2 Tablet.png";
import CardImg3T from "../../../public/3 Tablet.png";
import CardImg4T from "../../../public/4 Tablet.png";
import CardImg5T from "../../../public/5 Tablet.png";
import CardImg6T from "../../../public/6 Tablet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  ImageFile: StaticImageData;
  Title: string;
  Description: string;
  Size: string;
};

export default function ImageCarrousel({
  ImageFile,
  Description,
  Title,
  Size,
}: Props) {
  return (
    <div
      className={`flex flex-col flex-shrink-0 max-sm:max-w-md lg:max-w-${Size} p-5`}
    >
      <Image
        alt="CardImage"
        src={ImageFile}
        quality={70}
        style={{ borderRadius: 5 }}
      />
      <Link href={"/IndiosBotocudos"}>
        <h3 className="font-bold text-4xl mt-6 mb-2">{Title}</h3>
      </Link>
      <p className="text-2xl md:text-3xl">{Description}</p>
    </div>
  );
}
