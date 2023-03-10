import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/page/page";
import PageHeader from "@/components/page/page-header";
import Hero from "@/components/hero/hero";
import Heading from "@/components/text/heading";
import MenuWrapper from "@/components/menu/menu-wrapper";
import MenuSection from "@/components/menu/menu-section";
import MenuItem from "@/components/menu/menu-item";

import './globals.css'
import BigImage from "@/components/image/big-image";

const storyblokToken = process.env.STORYBLOK_PREVIEW_TOKEN

storyblokInit({
    accessToken: storyblokToken,
    use: [apiPlugin],
    components: {
        page: Page,
        "page-header": PageHeader,
        hero: Hero,
        heading: Heading,
        "menu-wrapper": MenuWrapper,
        "menu-section": MenuSection,
        "menu-item": MenuItem,
        "big-image": BigImage,
    },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
