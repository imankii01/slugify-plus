"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSpecialChars = removeSpecialChars;
function removeSpecialChars(text) {
    return text.replace(/[^a-zA-Z0-9\s-]/g, "");
}
