module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ 
    "./_tmp/style.css": "./style.css",
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    "src/_assets": "./assets"
  });
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  
  return {
    dir: {
        input: "src/",
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};