import Image from "next/image";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");
  return (
    <div className="w-full h-[300vh] px-5 bg-orange-200">
      <div className="w-full relative h-screen bg-green-200">
        <div className="absolute w-[40%] bg-pink-200 p-2 flex flex-col gap-4">
          <h2 className="text-[5rem] tracking-tighter font-bold text-white leading-[0.9]">{home.data.banner_home_title} </h2>
          <p className=" flex leading-[0.8] items-end text-[1.2rem] font-medium text-white">{home.data.parrafo} </p>
        </div>
        <div className="w-full h-screen overflow-hidden">
          <PrismicNextImage className="w-full object-cover h-full max-h-full " field={home.data.imagen_banner_home} alt="" />
          {/* <Image className="w-full" src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267" quality={100} width={1000} height={1000} alt="foto banner" /> */}
        </div>
      </div>
    </div>
  )
}