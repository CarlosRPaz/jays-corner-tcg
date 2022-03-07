import Link from "next/link";
import Image from "next/image"

import LogoSVG from "../svg/logo.svg";
import CommerceJsSVG from "../svg/commercejs.svg";

function Footer() {
  return (
    <footer className="py-6 lg:py-12 bg-primary-dark">
      <div className="container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <div className="relative w-24 h-24 mx-auto">
            <Link href="/">
              <a title="Return to ChopChop">
                <Image
                  src="/JCTCG_logo.png"
                  alt="Tik Tok Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex items-center md:justify-center">
          <a
            href="/"
            title="Visit Jay's Corner TCG website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors mx-auto"
          >
            <span className="text-text-primary-light font-medium">Jay's Corner TCG</span>
          </a>
        </div>

        <div className="w-full md:w-1/3 flex items-center">
          <div className="md:text-right space-x-1 text-text-primary-light flex mx-auto font-medium">
            <Link href="#shop-section">
              <a>Shop</a>
            </Link>
            ,
            <Link href="#socials-section">
              <a>Socials</a>
            </Link>
            ,
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
