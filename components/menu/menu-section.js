import { StoryblokComponent } from "@storyblok/react"

const MenuSection = ({ blok }) => {

    return (
        <div className="mr-8 lg:mr-0 xl:mr-16">
            <h2 className="font-bold italic text-2xl pb-4">
                {blok.section_title}
            </h2>
            <div className="font-merri">
                {blok.menu_items.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    )
}

export default MenuSection
