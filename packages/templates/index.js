const {readFile} = require("fs");
const {resolve} = require("path");

/**
 *
 * @param {'issue'} template
 * @returns {string} resolved path
 */
function toResolvedPath(template) {
  return resolve(__dirname, `${template}.ejs`);
}

/**
 * @param {'issue'} template
 * @returns {Promise<string>} template content
 */
function getTemplate(template) {
  const resolvedPath = toResolvedPath(template);
  return new Promise((resolve, reject) => {
    readFile(resolvedPath, "utf-8", (err, data) =>
      err ? reject(err) : resolve(data),
    );
  });
}

module.exports = {
  getTemplate,
};
