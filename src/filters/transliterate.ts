import { transliterate as tr } from "transliteration";

export function transliterate(text: string): string {
  return tr(text);
}
