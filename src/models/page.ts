import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

function render(content) {
    return documentToHtmlString(content, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
                `<img src="${fields.file.url}"
                    width="${fields.file.details.image.width}"
                    height="${fields.file.details.image.height}"
                    alt="${fields.title}"
                />`
        }
    });
}

export function getPageFromEntry(entry) {
    return {
        ...entry.fields,
        body: render(entry.fields.body),
    };
}

export async function getPage(id) {
    const entry = await contentfulClient.getEntry(id);
    return getPageFromEntry(entry);
}

export async function getPages() {
    const entries = await contentfulClient.getEntries({
        content_type: 'page',
    });

    return entries.items.map(getPageFromEntry);
}