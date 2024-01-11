import Image from "next/image";
import bgCafe from "../public/images/bg-cafe.jpg";

export default function Home() {
  return (
    <main>
      <Image
        src={bgCafe}
        alt="background image"
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover", position: "absolute", zIndex: "-10" }}
        id="bg-image"
      />
    </main>
  );
}
