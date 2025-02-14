"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterate = transliterate;
const transliteration_1 = require("transliteration");
function transliterate(text) {
    return (0, transliteration_1.transliterate)(text);
}
