//https://www.udemy.com/course/nextjs-by-example/learn/lecture/38660294#questions

import { writeFileSync } from "node:fs";
import qs from "qs";

const query = qs.stringify(
  {
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 6 },
    sort: ["publishedAt:desc"],
  },

  {
    encodeValuesOnly: true, // prettify URL
  }
);

const url = `http://localhost:1337/api/reviews?${query}`;
const response = await fetch(url);
const body = await response.json();
/* body.data.sort((a, b) => {
  const aDate = new Date(a.attributes.publishedAt);
  const bDate = new Date(b.attributes.publishedAt);
  return bDate - aDate;
}); */
const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";

writeFileSync(file, formatted);
