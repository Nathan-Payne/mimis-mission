/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    env: {
        STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.storyblok.com',
            },
        ],
    },
}

module.exports = nextConfig
