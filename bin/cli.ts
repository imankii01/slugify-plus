#!/usr/bin/env node
import { slugify } from "../src/slugify";

const args = process.argv.slice(2);
const input = args.join(" ");
console.log(slugify(input, { removeStopWords: true }));
