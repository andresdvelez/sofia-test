/* eslint-disable react/jsx-sort-props */

import { Card, CardFooter, Button, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-4 py-8 md:py-10">
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="/2.png"
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            $200
          </Button>
        </CardFooter>
      </Card>
      {/* <div className="relative h-full w-full lg:w-1/2">
        <Image src={Image2} alt="test-2" />
      </div> */}
    </section>
  );
}
