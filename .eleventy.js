/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("huh", function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob("src/pages/*.md");
    return [...pages];
  });

  eleventyConfig.addFilter("inspect", require("node:util").inspect);
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
