import Image from "next/image";
const Card = ({ icon, title, desc }) => {
  return (
    <div className="grid [&>*]:max-sm:text-center place-items-center md:place-items-start h-auto w-auto bg-light_grayish_blue px-4 ">
      <div className="h-auto w-auto">
        <Image src={icon} height={30} width={55} alt="icon" />
      </div>
      <h3 className="my-3 text-dark-blue text-xl font-semibold ">{title}</h3>
      <p className="text-grayish_blue text-sm">{desc}</p>
    </div>
  );
};

export default Card;
