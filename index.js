"use strict";
module.exports = function escapeInvisibles(line) {
  return line
    .replace(/\t/g, "<tab>")
    .replace(/\r/g, "<CR>")
    .replace(/\n/g, "<LF>\n");
};
