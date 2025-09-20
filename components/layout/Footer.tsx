import Image from "next/image";
import { LogoWhite } from "@/constants";
import Link from "next/link";
import { NavLinks, ButtomNavLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#222222] font-Quicksand text-[#CACACA] w-full h-186.5 ">
      <div className="bg-colorPrimary h-[29px]"></div>

      <div className="mt-8 px-29">
        <div className="mb-6">
          <Image src={LogoWhite} width={58.73} height={30.6} alt='Logo' />
        </div>

        <div className="mb-10 max-w-md  leading-[26px] text-base">
          ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
        </div>

        <nav className="flex justify-between  w-[792px]">
          {
            NavLinks.map((n, index) => (
              <div key={index}>
                <h4 className="mb-4 text-[25px]">{n.title}</h4>
                <ul className="flex flex-col gap-y-[9px]">
                  {n.links.map((l, index) => (
                    <li><Link key={index} href={l.link}>{l.text}</Link></li>
                  ))}
                </ul>
              </div>
            ))
          }
        </nav>

        <div className="h-[1px] bg-white my-20"></div>

        <div className="flex flex-col gap-y-6 justify-center items-center">
          <h5>Some hotel requires you to cancel more than 24 hours before check-in. Details <Link href={"/"} className="text-colorPrimary">here</Link></h5>
          <ul className="flex gap-x-8">
            {
              ButtomNavLinks.map((b, index) => (
                <li><Link key={index} href={b.link}>{b.text}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
