const fs = require("fs");

const quotes = JSON.parse(fs.readFileSync("quotes.json", "utf8"));
const day = Math.floor(Date.now() / 86400000);
const q = quotes[day % quotes.length];

const block = `<!--QUOTE_START-->
> "${q.quote}"
>
> — *${q.author}*
<!--QUOTE_END-->`;

const readme = fs.readFileSync("README.md", "utf8");
const updated = readme.replace(
  /<!--QUOTE_START-->[\s\S]*?<!--QUOTE_END-->/,
  () => block
);

fs.writeFileSync("README.md", updated);
