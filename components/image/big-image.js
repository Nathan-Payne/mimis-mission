import Image from "next/image"

const BigImage = ({ blok: { big_image: img } }) => {
    console.log('blok imga', img)

    return (
        <div className="w-full h-1/3 relative px-2 mb-10 border-y-2 border-neutral-800">
            <Image
                className="object-cover"
                src={img.filename}
                alt={img.alt}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1500px ) 100vw"
                quality={90}
            />
        </div>
    )
}

export default BigImage
