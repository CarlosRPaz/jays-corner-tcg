import Image from "next/image"

function Socials() {
    return (
        <section id="socials-section" className="bg-primary-dark pb-10">
            <h1 className="text-text-primary-light text-center">Follow us on</h1>
            <div className="grid grid-cols-2 gap-y-10 mx-auto max-w-xs sm:grid-cols-4 sm:max-w-lg">
                <div className="relative w-16 h-16 mx-auto">
                    <Image
                        src="/tiktok_svg.svg"
                        alt="Tik Tok Icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-16 h-16 mx-auto">
                    <Image
                        src="/twitter_svg.svg"
                        alt="Twitter Icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-16 h-16 mx-auto">
                    <Image
                        src="/youtube_svg.svg"
                        alt="Youtube Icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-16 h-16 mx-auto">
                    <Image
                        src="/ig_svg.svg"
                        alt="Instagram Icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Socials