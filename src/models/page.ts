import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export async function getPages() {
    const entries = await contentfulClient.getEntries({
        content_type: 'page',
    });

    return entries.items.map(page => ({
        ...page.fields,
        body: documentToHtmlString(page.fields.body),
    }));
}