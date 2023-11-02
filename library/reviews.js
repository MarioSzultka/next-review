import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`);

  const {
    content,
    data: { title, date, image },
  } = matter(text);

  const body = marked(content);

  return { title, date, image, body };
}

export async function getReviews() {
  const items = await readdir("./content/reviews");
  const files = items
    .filter((item) => item.endsWith(".md"))
    .map((item) => item.slice(0, -".md".length));
  return files;
}

export async function getSlugs(folderName, extension) {
  const documents = await readdir(folderName);
  const files = documents
    .filter((items) => items.endsWith(extension))
    .map((fileName) => {
      fileName.slice(0, -extension.length);
    });

  return files;
}

export function getNewestReview(array) {
  return array.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
  });
}
