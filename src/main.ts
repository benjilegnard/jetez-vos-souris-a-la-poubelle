import "reveal.js/reveal.css";
import "./style.scss";

import "reveal.js/plugin/highlight/monokai.css";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Notes from "reveal.js/plugin/notes";
import Highlight from "reveal.js/plugin/highlight";

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
