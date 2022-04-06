import Header from "../components/Header";
import Image from "next/image";

import PokeballSVG from "../svg/1.svg";

function about() {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="bg-secondary-dark">
                <div className="max-w-4xl mx-auto p-6">
                    <div className="relative w-full h-96">
                        <Image
                            src="/pokegang.png"
                            alt="About Us Image"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>
                    <div className="relative">
                        <PokeballSVG
                            className="absolute h-64 w-64 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            fill="white"
                            fill-opacity="0.1"
                        />
                        <h1 className="text-text-primary-light pb-4">About Us</h1>
                        <p className="text-text-primary-light Poppins font-medium text-lg">
                            Jay's Corner TCG started as a passion for collecting. Whether it be Pokemon, sneakers, or other collectibles the brand stays true to its roots. The growth and support I've received from the community has been tremendous, we continue to grow and evolve. I'm happy to welcome everyone to my new website, here we can continue to grow! Thank you to anyone and everyone that supports!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about