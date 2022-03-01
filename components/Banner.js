import Image from "next/image";

function Banner() {
    return (
        <div className="relative w-full h-64">
            <Image
                src="/JCTCG_banner.jpeg"
                alt="Jay's Corner TCG Banner"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}

export default Banner;
