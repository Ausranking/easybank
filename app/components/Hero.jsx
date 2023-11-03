import ActionBtn from "./ActionBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative w-full h-[90vh] max-lg:flex flex-col-reverse grid grid-cols-2 place-items-center auto-cols-fr auto-rows-fr bg-white ">
      <div
        className="max-sm:text-center grid max-lg:place-items-center md:ml-9 lg:ml-28
      "
      >
        <h1 className="text-5xl lg:text-7xl max-sm:text-4xl  text-dark-blue py-3">
          Next generation <br /> digital banking
        </h1>
        <p className="text-xl mt-2 text-grayish_blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mb-10"></div>
        <ActionBtn />
      </div>
      <div className="relative w-full h-full  bg-intro bg-cover">
        <div className="relative h-full w-full">
          <Image
            src="/mockups.png"
            alt="App mockup"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
