import { readdir, readFile } from "node:fs/promises";
import { writeFileSync } from "node:fs";
import qs from "qs";
import matter from "gray-matter";
import { marked } from "marked";
const CMS_URL = "http://localhost:1337";

async function fetchReviews(parameter, collectionName) {
  const query = qs.stringify(parameter, {
    encodeValuesOnly: true, // prettify URL
  });
  const url = `${CMS_URL}/api/${collectionName}?${query}`;
  const response = await fetch(url);
  //console.log(["Odpowiedz response:"], response.ok);

  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for url ${url}`);
  }
  const { data } = await response.json();
  //console.log("[To jest data]", data);

  // Zapisywanie danych do pliku aby miec podglad szybki i ladny
  const formatted = await JSON.stringify(data, null, 2);
  const file = "scripts/strapi-response.json";
  writeFileSync(file, formatted);

  return data;
}

function toReview(item) {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "xxxx-xx-xx".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}

export async function getReview(slug) {
  const data = await fetchReviews(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ["title", "publishedAt", "body"],
      populate: { image: { fields: ["url"] } },
    },
    "reviews"
  );

  const item = data[0];

  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
}

export async function getReviews() {
  const data = await fetchReviews(
    {
      fields: ["slug", "title", "publishedAt"],
      populate: { image: { fields: ["url"] } },
      pagination: { pageSize: 6 },
      sort: ["publishedAt:desc"],
    },
    "reviews"
  );

  return data.map(toReview);
}

export async function getSlugs(collectionName) {
  const response = await fetchReviews(
    {
      fields: ["slug"],
      pagination: { pageSize: 400 },
    },
    collectionName
  );

  const slugs = response.map((item) => {
    const { attributes } = item;
    return { slug: attributes.slug };
  });

  return slugs;
}
