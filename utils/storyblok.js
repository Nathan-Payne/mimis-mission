import { getStoryblokApi } from "@storyblok/react";

const storyblokApi = getStoryblokApi();

export async function getLinks(params) {
    if (!storyblokApi) {
        return;
    }

    const { data } = await storyblokApi.get(`cdn/links`, { version: 'draft', ...params })

    const links = data ? data.links : null

    return links
}

export async function getStory(slug, params) {
    if (!storyblokApi) {
        return;
    }

    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, { version: 'draft', ...params })

    const story = data ? data.story : null

    return story
}
