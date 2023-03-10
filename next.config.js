/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    env: {
        STORYBLOK_PREVIEW_TOKEN: 'ipd4ZK29SRdlw5PPfmcmNAtt',
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
