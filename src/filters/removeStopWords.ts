const STOP_WORDS = new Set(["the", "a", "an", "in", "on", "at", "with", "and", "or", "but"]);

export default function removeStopWords(text: string): string {
  return text
    .split(" ")
    .filter(word => !STOP_WORDS.has(word))
    .join(" ");
}
