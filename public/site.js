// Assembles the drawing in "How it fits together" as each step scrolls past.
// Without JavaScript the drawing simply shows the finished assembly.
const ASSEMBLED = {
  0: [],
  1: ["e"],
  2: ["e", "c"],
  3: ["e", "c", "b", "a"],
  4: ["e", "c", "b", "a", "d"],
  5: ["e", "c", "b", "a", "d"]
};
const NEWEST = {0: [], 1: ["e"], 2: ["c"], 3: ["b", "a"], 4: ["d"], 5: []};

// The step that counts as current is the one crossing this band. On phones the
// drawing sticks to the top, so the band sits in the text area below it.
const PHONE = window.matchMedia("(max-width: 900px)");
const BAND = {phone: "-74% 0px -24% 0px", wide: "-45% 0px -45% 0px"};

const drawing = document.querySelector(".kit-assembly");
const steps = document.querySelectorAll(".step");

if (drawing && steps.length && "IntersectionObserver" in window) {
  const pieces = drawing.querySelectorAll("[data-part]");
  const extras = drawing.querySelectorAll("[data-from]");

  const show = step => {
    for (const piece of pieces) {
      const part = piece.dataset.part;
      piece.classList.toggle(
        "in",
        part === "e" || ASSEMBLED[step].includes(part)
      );
      if (piece.classList.contains("part")) {
        piece.classList.toggle("new", NEWEST[step].includes(part));
      }
    }
    for (const extra of extras) {
      extra.classList.toggle("on", step >= Number(extra.dataset.from));
    }
    for (const item of steps) {
      item.classList.toggle("is-current", Number(item.dataset.step) === step);
    }
  };

  drawing.classList.add("is-live");
  show(0);

  let observer;
  const observe = () => {
    observer?.disconnect();
    observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(Number(entry.target.dataset.step));
        }
      },
      {rootMargin: PHONE.matches ? BAND.phone : BAND.wide}
    );
    steps.forEach(item => observer.observe(item));
  };

  observe();
  PHONE.addEventListener("change", observe);
}
