import { readdir, readFile, writeFileSync } from "node:fs/promises";
import qs from "qs";
import matter from "gray-matter";
import { marked } from "marked";
const CMS_URL = "http://localhost:1337";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`);

  const {
    content,
    data: { title, date, image },
  } = matter(text);

  const body = marked(content);

  return { title, date, image, body, slug };
}

export async function getReviews() {
  const query = qs.stringify({
    fields: ["slug", "title", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 6 },
    sort: ["publishedAt:desc"],
  });
  const url = `${CMS_URL}/api/reviews?${query}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const reviews = [];
  data.map((item) => {
    const element = {
      slug: item.attributes.slug,
      title: item.attributes.title,
      date: item.attributes.publishedAt.slice(0, "xxxx-xx-xx".length),
      image: CMS_URL + item.attributes.image.data.attributes.url,
    };
    reviews.push(element);
  });
  console.log(reviews);
  return reviews;
}

export async function getSlugs(folderName, extension) {
  const documents = await readdir(folderName);
  //console.log(["Documents to", documents]);
  const files = documents
    .filter((items) => {
      //console.log(["Items to", items]);
      return items.endsWith(extension);
    })
    .map((fileName) => {
      return fileName.slice(0, -extension.length);
    });
  //console.log(["Files to", files]);
  return files;
}
