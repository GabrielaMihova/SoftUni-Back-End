const Handlebars = require("handlebars");

Handlebars.registerHelper("renderStars", function (rating) {
  const numStars = parseInt(rating, 10);
  if (isNaN(numStars) || numStars < 1 || numStars > 5) {
  }
  return "&#x2605;".repeat(numStars);
});
