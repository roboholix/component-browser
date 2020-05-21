require("isomorphic-fetch");

const GITHUB_REPO_DISPATCH_URL =
  "https://api.github.com/repos/roboholix/component-browser/dispatches";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  throw new Error(
    "Missing GITHUB_TOKEN. Please set a GITHUB_TOKEN ENV variable and try again."
  );
}

fetch(GITHUB_REPO_DISPATCH_URL, {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: `token ${GITHUB_TOKEN}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: JSON.stringify({ event_type: "autochangelog" }),
})
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from GitHub server");
    }

    return response.text();
  })
  .then(console.log) // eslint-disable-line no-console
  .catch(console.error); // eslint-disable-line no-console
