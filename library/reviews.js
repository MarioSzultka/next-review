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
