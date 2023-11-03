import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import ActionBtn from "./ActionBtn";
import { footerLinks, socialIcons } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-dark-blue w-full ">
      <div className="align-body py-10 grid gap-5  max-sm:place-items-center md:grid-cols-3 [&>*]:max-sm:text-center ">
        <div className="grid gap-5">
          <Logo location="footer" />
          <div className="grid gap-3 grid-flow-col w-max p-1 md:mt-5">
            {socialIcons.map((icon) => (
              <li key={icon.id}>
                <Link href={icon.url}>
                  <Image
                    src={icon.icon}
                    height={20}
                    width={23}
                    alt="social-link"
                    className="hover:scale-110"
                  />
                </Link>
              </li>
            ))}
          </div>
        </div>

        <section className=" grid md:grid-cols-2">
          {footerLinks.slice(0, 3).map((link) => (
            <li
              key={link.id}
              className="py-1 fill-current hover:text-lime-green"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
          {footerLinks.slice(3, 6).map((link) => (
            <li
              key={link.id}
              className="py-1 fill-current hover:text-lime-green"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </section>
        <div className="w-full grid place-items-center gap-5">
          <ActionBtn />
          <p>&copy; Easybank. All Rights Reserved 2023</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
