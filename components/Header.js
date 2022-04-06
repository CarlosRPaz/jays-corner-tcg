import Link from "next/link";
import Image from "next/image";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";

function Header() {
  return (
    <header className="w-full bg-primary-dark text-text-primary-light py-4">
      <div className="flex justify-between px-5 max-w-7xl w-full mx-auto">
        <div className="flex space-x-6">
          <div className="relative w-16 h-16 cursor-pointer">
            <Link href="/">
              <Image
                src="/JCTCG_logo.png"
                alt="Jay's Corner TCG Text Logo"
                layout="fill"
                objectFit="contain"
                className=""
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
            <Link href="/about">
              <a className="">About Us</a>
            </Link>
          </div>
        </div>

        <div className="py-3 lg:py-5 flex items-center">
          <CartSummary />
        </div>

      </div>
    </header>
  );
}

export default Header;
