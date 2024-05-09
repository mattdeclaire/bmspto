import { contentfulClient } from "../lib/contentful";
import { getPageFromEntry } from "./page";

export async function getSettings() {
    const entries = await contentfulClient.getEntries({
        content_type: 'settings',
    });

    const settings = entries.items[0].fields;

    return {
        homepage: getPageFromEntry(settings.homepage),
    };
}