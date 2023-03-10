import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
    console.log('pagecontent', blok)

    return (
        <main className='pt-20 flex-1' {...storyblokEditable(blok)}>
            {blok.body.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>

    )
}

export default Page
