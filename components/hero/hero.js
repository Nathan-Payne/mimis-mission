import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ blok }) => {
    console.log('blok hero', blok)

    const renderLandingImageGrid = () => {
        const images = Object.keys(blok).filter((key) => key.includes("landing_image"))

        return images.map((image) => {
            const img = blok[image]

            return (
                <div
                    className="relative block transition-all cursor-pointer scale-100 duration-100 
                               hover:brightness-50 hover:scale-[1.01]"
                    key={img.id}
                >
                    <Link href={`/${img.title}`}>
                        <Image
                            className="object-cover rounded-md"
                            src={img.filename}
                            alt={img.alt}
                            fill={true}
                            sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                                                   33vw"
                            quality={100}
                        />
                    </Link>
                </div>
            )
        })
    }

    return (
        <div
            className="w-full h-1/2 grid grid-cols-4 gap-6 p-8"
            key={blok._uid}
            data-test="hero"
            {...storyblokEditable(blok)}
        >
            <div className="flex flex-col items-start justify-center pb-12">
                <h3 className="text-3xl font-bold">come see what we do</h3>
                <button>cta button with arrow - </button>
            </div>
            {renderLandingImageGrid()}
        </div>
    )
}

export default Hero
