"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = removeStopWords;
const STOP_WORDS = new Set(["the", "a", "an", "in", "on", "at", "with", "and", "or", "but"]);
function removeStopWords(text) {
    return text
        .split(" ")
        .filter(word => !STOP_WORDS.has(word))
        .join(" ");
}
