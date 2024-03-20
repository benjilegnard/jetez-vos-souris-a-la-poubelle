import "./style.scss";

import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/plugin/highlight/highlight.esm";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Notes from "reveal.js/plugin/notes/notes";
import Highlight from "reveal.js/plugin/highlight/highlight";

let deck = new Reveal({
  plugins: [Markdown, Notes, Highlight],
});

deck.initialize({
  progress: false,
  controls: false,
  slideNumber: "c/t",
  showSlideNumber: "speaker",
  hashOneBasedIndex: true,
  hash: true,
  transition: "none",
  history: true,
});
