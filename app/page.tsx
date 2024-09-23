/* eslint-disable react/jsx-sort-props */
import Image from "next/image";

import Image1 from "../public/1.png";
import Image2 from "../public/2.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-4 py-8 md:py-10">
      <div className="relative h-full w-full lg:w-1/2">
        <Image src={Image1} alt="test-1" />
      </div>
      <div className="relative h-full w-full lg:w-1/2">
        <Image src={Image2} alt="test-2" />
      </div>
    </section>
  );
}
