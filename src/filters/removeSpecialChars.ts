export function removeSpecialChars(text: string): string {
    return text.replace(/[^a-zA-Z0-9\s-]/g, "");
  }
  