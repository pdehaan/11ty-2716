/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("huh", function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob("src/pages/*.md");
    return [...pages];
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
