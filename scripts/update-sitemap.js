const fs = require("fs");
const path = require("path");

const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");

function getUtcDate() {
  return new Date().toISOString().slice(0, 10);
}

function updateSitemapLastmod() {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  if (!/<lastmod>[^<]*<\/lastmod>/.test(xml)) {
    console.warn("No <lastmod> tag found in sitemap.xml; no changes made.");
    return;
  }

  const updated = xml.replace(
    /<lastmod>[^<]*<\/lastmod>/,
    `<lastmod>${getUtcDate()}</lastmod>`
  );

  if (updated !== xml) {
    fs.writeFileSync(sitemapPath, updated, "utf8");
    console.log(`Updated sitemap lastmod to ${getUtcDate()}`);
    return;
  }

  console.log(`Sitemap lastmod already ${getUtcDate()}`);
}

updateSitemapLastmod();
