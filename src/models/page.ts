import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function getPages() {
    const entries = await contentfulClient.getEntries({
        content_type: 'page',
    });

    return entries.items.map(page => ({
        ...page.fields,
        body: documentToHtmlString(page.fields.body, {
            renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
                    `<img src="${fields.file.url}"
                        width="${fields.file.details.image.width}"
                        height="${fields.file.details.image.height}"
                        alt="${fields.title}"
                    />`
            }
        }),
    }));
}