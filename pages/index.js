import Head from "next/head";
import {
    useStoryblokState,
    StoryblokComponent,
} from "@storyblok/react";
import { getStory } from "@/utils/storyblok";
import { Shantell_Sans as ShantellSans, Oxygen } from 'next/font/google'
import Nav from "@/components/nav/nav";

const shantell = ShantellSans({ subsets: ['latin'], variable: '--font-shantell' })
const oxygen = Oxygen({
    subsets: ['latin'],
    variable: '--font-oxygen',
    weight: ['400', '700'],
})

// todo: add og titles for social media https://nextjs.org/learn/seo/rendering-and-ranking/metadata
const metadata = {
    title: 'Mimis mission',
    description: 'Community center, cafe, youth activities',
}

export default function Home({ story }) {
    story = useStoryblokState(story);
    console.log('story', story)

    return (
        <div className={`${shantell.variable} ${oxygen.variable}`}>
            <Head>
                <title>{metadata.title}</title>
                <meta
                    name="description"
                    content={metadata.description}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-screen h-screen flex flex-col overflow-x-hidden bg-orange-50 font-shantell text-xl'>
                <Nav />
                <StoryblokComponent blok={story.content} />
            </div>

        </div>
    );
}

export async function getStaticProps() {
    const story = await getStory("home")

    return {
        props: {
            story: story ?? false,
            key: story?.id ?? false,
        },
        revalidate: 3600,
    };
}
