import Image from "next/image";
import Logo from "../../../public/lgmv.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
export function FooterSection() {
  return (
    <>
      <div className="bg-slate-700 flex w-full sm:h-[250px] p-10 flex-col gap-5">
        <div className='max-sm:flex max-sm:justify-center'>
          <Image alt="museum logo" src={Logo} className='w-72 max-sm:w-64' />
        </div>
        <div className="flex w-full items-center justify-center gap-10 mt-16">
          <div className="cursor-pointer">
            <a href="https://www.instagram.com/museuvivomg/" target="_blank">
              <BsInstagram color="#ffff" size={25} />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="https://pt-br.facebook.com/MuseuVivoMG/" target="_blank">
              <BsFacebook color="#ffff" size={25} />
            </a>
          </div>

          <div className="cursor-pointer">
            <a href="https://www.youtube.com/@museuvivo5120" target="_blank">
              <BsYoutube color="#ffff" size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full h-20 flex text-2xl max-sm:text-xl text-gray-50 items-center justify-center">
        &copy; Associação Cultural Museu Vivo - {new Date().getFullYear()}
      </div>
    </>
  );
}
