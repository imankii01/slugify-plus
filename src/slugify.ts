import { transliterate } from "./filters/transliterate";
import removeStopWords from "./filters/removeStopWords";

interface SlugOptions {
  separator?: string;
  removeStopWords?: boolean;
  maxLength?: number;
}

export function slugify(text: string, options: SlugOptions = {}): string {
  let separator = options.separator || "-";
  let slug = transliterate(text.toLowerCase().trim());

  if (options.removeStopWords) {
    slug = removeStopWords(slug);
  }

  slug = slug.replace(/\s+/g, separator).replace(/[^a-z0-9-_]/g, "");

  if (options.maxLength) {
    slug = slug.substring(0, options.maxLength).replace(new RegExp(`${separator}$`), "");
  }

  return slug;
}
