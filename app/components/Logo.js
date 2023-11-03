import Image from "next/image";
const Logo = ({location}) => {
  return (
    <div className="relative w-32 h-5 ">
      <Image
        src={location === "footer" ? "/footer-logo.svg" : "/Logo.svg"}
        fill
        alt="Eazybank logo "
        className='object-contain'
      />
    </div>
  );
};

export default Logo;
