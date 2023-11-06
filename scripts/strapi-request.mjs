//https://www.udemy.com/course/nextjs-by-example/learn/lecture/38660294#questions

import { writeFileSync } from "node:fs";

const url =
  "http://localhost:1337/api/reviews?fields[0]=slug&fields[1]=title&fields[2]=subtitle&fields[3]=publishedAt&populate[image]";
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";

writeFileSync(file, formatted);
