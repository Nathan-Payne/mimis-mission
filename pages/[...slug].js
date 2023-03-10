import Head from "next/head";
import {
    useStoryblokState,
    StoryblokComponent,
} from "@storyblok/react";
import { getLinks, getStory } from "@/utils/storyblok";
import { Shantell_Sans as ShantellSans, Merriweather } from 'next/font/google'
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

const shantell = ShantellSans({ subsets: ['latin'], variable: '--font-shantell' })
const merriweather = Merriweather({
    subsets: ['latin'],
    variable: '--font-merri',
    weight: ['400', '700'],
})

// todo: add og titles for social media https://nextjs.org/learn/seo/rendering-and-ranking/metadata
const metadata = {
    title: 'Mimis mission',
    description: 'Community center, cafe, youth activities',
}

export default function Page({ story }) {
    story = useStoryblokState(story);
    console.log('story slugggg', story)

    return (
        <div className={`${shantell.variable} ${merriweather.variable}`}>
            <Head>
                <title>{metadata.title}</title>
                <meta
                    name="description"
                    content={metadata.description}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-screen h-screen flex flex-col overflow-x-hidden bg-orange-50 font-shantell text-lg'>
                <Nav />
                <StoryblokComponent blok={story.content} slug={story.slug} />
                <Footer />
            </div>

        </div>
    );
}

export async function getStaticProps({ params }) {
    let slug = params.slug ? params.slug.join("/") : "home";

    const story = await getStory(slug)

    return {
        props: {
            story: story ?? false,
            key: story?.id ?? false,
        },
        revalidate: 3600,
    };
}

export async function getStaticPaths() {
    const links = await getLinks()
    let paths = [];

    Object.keys(links).forEach((linkKey) => {
        if (links[linkKey].is_folder || links[linkKey].slug === "home") {
            return;
        }

        const slug = links[linkKey].slug;
        let splittedSlug = slug.split("/");

        paths.push({ params: { slug: splittedSlug } });
    });

    return {
        paths: paths,
        fallback: false,
    };
}
