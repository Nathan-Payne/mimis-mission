import { storyblokInit, apiPlugin } from "@storyblok/react";
import Hero from "@/components/hero/hero";
import Page from "@/components/page/page";

import './globals.css'

const storyblokToken = process.env.STORYBLOK_PREVIEW_TOKEN

storyblokInit({
    accessToken: storyblokToken,
    use: [apiPlugin],
    components: {
        page: Page,
        hero: Hero,
    },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
