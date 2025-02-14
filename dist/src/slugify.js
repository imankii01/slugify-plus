"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
const transliterate_1 = require("./filters/transliterate");
const removeStopWords_1 = __importDefault(require("./filters/removeStopWords"));
function slugify(text, options = {}) {
    let separator = options.separator || "-";
    let slug = (0, transliterate_1.transliterate)(text.toLowerCase().trim());
    if (options.removeStopWords) {
        slug = (0, removeStopWords_1.default)(slug);
    }
    slug = slug.replace(/\s+/g, separator).replace(/[^a-z0-9-_]/g, "");
    if (options.maxLength) {
        slug = slug.substring(0, options.maxLength).replace(new RegExp(`${separator}$`), "");
    }
    return slug;
}
