#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = require("../src/slugify");
const args = process.argv.slice(2);
const input = args.join(" ");
console.log((0, slugify_1.slugify)(input, { removeStopWords: true }));
