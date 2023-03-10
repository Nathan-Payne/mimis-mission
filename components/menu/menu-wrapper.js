import { StoryblokComponent } from "@storyblok/react"

const MenuWrapper = ({ blok }) => {

    return (
        <div className='m-2 p-2 md:mt-16 xl:m-20 xl:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-neutral-600'>
            {blok.body.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    )
}

export default MenuWrapper

