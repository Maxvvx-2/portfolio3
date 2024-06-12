import Image from "next/image";
import Banner from "./_components/_header/Banner";
import Fan from "./_components/_fanapp/fan";
import Servis from "./_components/_servis/servis";
import Skils from "./_components/_skils/skils";


export default function Home() {
  return (
    <>
    <Banner/>
    <Fan/>
    <Servis/>
    <Skils/>

      
    </>
  );
}
