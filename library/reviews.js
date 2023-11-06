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

  return { title, date, image, body, slug };
}

export async function getReviews() {
  const slugs = await getSlugs("./content/reviews", ".md");
  //console.log(["Slugs to:", slugs]);

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
  });

  //console.log(["Reviews to:"], reviews);
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
