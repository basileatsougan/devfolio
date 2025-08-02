import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-[80vh] ">
      <div className="text-gray-100">Basile Portfolio</div>
      <Hero />
    </div>
  );
}
