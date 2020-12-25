import "./index.css";

// only use hmr if development
/* if (process.env.NODE_ENV === "development") {
  const { applyPolyfill } = require("custom-elements-hmr-polyfill");
  applyPolyfill();
} */

// load element, so we are sure we have latest before setting root
import("./app-root").then(() => {
  if (document.body) {
    document.body.innerHTML = "<app-root></app-root>";
  }
});
