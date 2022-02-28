import Link from "next/link";
import Image from "next/image";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";

function Header() {
  return (
    <header className="flex justify-between px-5 max-w-7xl w-full mx-auto bg-blue-300">
      <div className="flex space-x-6">
        <div className="relative w-16 h-16 cursor-pointer">
          <Link href="/">
            <Image
              src="/JCTCG_logotext.png"
              alt="Jay's Corner TCG Text Logo"
              layout="fill"
              objectFit="contain"
              className=" bg-red-300"
            />
          </Link>
        </div>
        <div className="items-center hidden md:flex space-x-6">
          <Link href="#shop-section">
            <a className="">Shop</a>
          </Link>
          <Link href="#socials-section">
            <a className="">Socials</a>
          </Link>
          <Link href="/contact">
            <a className="">About Us</a>
          </Link>
        </div>
      </div>

      <div>cart</div>
      {/*
      <div className="py-3 lg:py-5 flex items-center">
        <Link href="/">
          <a title="Return to ChopChop">Shop</a>
        </Link>
        <span className="pr-1">,</span>
        <CartSummary />
      </div>

      <Link href="/">
        <a title="Return to ChopChop">
          <LogoSVG className="w-full" />
        </a>
      </Link>
      */}
    </header>
  );
}

export default Header;
