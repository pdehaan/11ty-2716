/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("pages_by_page_date", function (collectionApi) {
    const pages = collectionApi.getFilteredByTag("pages");
    return [...pages].sort((a, b) => b.data.page.date - a.data.page.date);
  });

  eleventyConfig.addCollection("pages_by_published_date", function (collectionApi) {
    const pages = collectionApi.getFilteredByTag("pages");
    return [...pages].sort((a, b) => b.data.publishedDate - a.data.publishedDate);
  });

  // eleventyConfig.addFilter("inspect", require("node:util").inspect);
  eleventyConfig.addFilter("iso_date", date => date.toISOString());

  eleventyConfig.addShortcode("time", function (datetime = new Date()) {
    const isoDateFn = eleventyConfig.getFilter("iso_date");
    return `<time datetime="${isoDateFn(datetime)}">${datetime.toLocaleDateString()}</time>`;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
