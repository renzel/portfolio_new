---
name: Rensel
description: "An assembly manual for AI that works inside real software: one black ink on manual paper, isometric line drawings, and part orange for the part going in."
colors:
  part: "#ff5a1f"
  part-left: "#e84d14"
  part-right: "#c9410f"
  on-part: "#141414"
  paper: "#f4f4f1"
  ink: "#141414"
  ink-soft: "#4a4a45"
  line: "#8c8c86"
  rule: "#cfcfc9"
  face-left: "#e7e7e3"
  face-right: "#d6d6d1"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  display-name:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline-contact:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.15
  title-part:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.55
  action-small:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.55
  small:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.55
  table-head:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.55
  tag:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
  wordmark:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 900
    letterSpacing: "-0.03em"
rounded:
  control: "3px"
  photo: "4px"
  film: "6px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  grid-gap: "24px"
  link-gap: "28px"
  section: "clamp(72px, 12vh, 140px)"
  header: "64px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.part}"
    textColor: "{colors.on-part}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.part-left}"
    textColor: "{colors.on-part}"
  tab:
    backgroundColor: "{colors.part}"
    textColor: "{colors.on-part}"
    typography: "{typography.action-small}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "40px"
  tab-hover:
    backgroundColor: "{colors.part-left}"
    textColor: "{colors.on-part}"
  text-link:
    textColor: "{colors.ink}"
  masthead:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "{spacing.header}"
  wordmark:
    textColor: "{colors.ink}"
    typography: "{typography.wordmark}"
  part-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.round}"
    size: "24px"
  fact-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.small}"
  step-number:
    textColor: "{colors.line}"
    typography: "{typography.numeral}"
  step-number-current:
    textColor: "{colors.part-right}"
    typography: "{typography.numeral}"
  step-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  spec-head:
    textColor: "{colors.ink}"
    typography: "{typography.table-head}"
  helpline:
    backgroundColor: "{colors.part}"
    textColor: "{colors.on-part}"
    typography: "{typography.headline}"
  helpline-email:
    textColor: "{colors.on-part}"
    typography: "{typography.headline-contact}"
  film:
    rounded: "{rounded.film}"
  portrait:
    rounded: "{rounded.photo}"
---

# Design System: Rensel

## Overview

**Creative North Star: "The Assembly Manual"**

The site is printed like the manual in a flat-pack box: uncoated paper, one black ink and a single process orange. Anything that explains is drawn as 30° isometric line art, with circled part letters, dashed explosion lines, a detail circle and click marks. Anything that reads is set in one Norwegian grotesk, blunt at 900 and plain at 400. Orange appears only where something is happening: on the part going in, and at the place to act.

The system is flat and literal. There are no cards, boxes, shadows or visible gradients. Only the manual's own devices frame content: 2px ink rules, circled letters on leader lines, the detail circle and the ink fact strip. Depth exists only inside the drawings, where every solid has three face tones. Explanation gets air and proof gets packed: drawings sit alone on the dot lattice, while facts run in a dense ink strip and the work is listed in a ruled spec table. Motion is mechanical. A part slides along its explosion line on an exponential ease-out and lands with a click mark that switches on in a single frame.

The page stays on paper in every OS theme; the dark theme was removed in review and is not part of the world. The system refuses the developer-portfolio defaults (a dark hero, skill-icon grids, equal project cards) and, as a brand commitment, AI-hype imagery: glowing gradients, robots, neural-network visuals.

**Key Characteristics:**
- Manual Paper and one Manual Ink; the page never goes dark.
- Part Orange only on the part being added and the place to act.
- 30° isometric line drawings with three face tones, circled part letters, dashed explosion lines, a detail circle and click marks.
- One family, Schibsted Grotesk 400–900, ranked by weight, with heavy tabular numerals.
- Flat: no cards, boxes, shadows or visible gradients.
- Mechanical motion: slide along the explosion line, then click.

## Colors

One black ink on uncoated paper, a short ladder of warm greys for construction and faces, and one process orange that means "this part" or "act here".

### Primary
- **Part Orange** (#ff5a1f): the place to act (the primary button, the masthead tab, the full-bleed helpline band) and the top face of the part being added in an assembly drawing. It also highlights text selection.
- **Part Orange, Left Face** (#e84d14): the left face of the part being added; it doubles as the hover fill of orange controls.
- **Part Orange, Right Face** (#c9410f): the right face of the part being added, and the numeral of the current step, where the part's shaded tone holds 4.5:1 on paper.
- **Ink on Part** (#141414): all text, links and focus rings on orange. Ink, not white: it measures 5.9:1 on Part Orange and 4.8:1 on the hover face.

### Neutral
- **Manual Paper** (#f4f4f1): the page ground in every OS theme (light color-scheme, matching theme-color). It is also the top face of every solid and the fill behind circled letters, the detail circle and the done tick, so the drawings print on the same sheet.
- **Manual Ink** (#141414): text, every drawn outline, sockets and ports, the 2px section and table-head rules, the focus ring, leader dots, and the ground of the fact strip.
- **Soft Ink** (#4a4a45): secondary reading text (part and step descriptions, captions, the year and built-with columns, the colophon) at 8.1:1 on paper; dashed hidden lines inside the detail circle; the rules of the wrapped fact strip.
- **Construction Grey** (#8c8c86): dashed explosion lines and their arrowheads, the numerals of steps that are not current, the dots between facts, the scrollbar thumb. It measures 3.1:1 on paper.
- **Lattice Grey** (#cfcfc9): the isometric dot lattice, table-row hairlines, and the rule under the sticky drawing on phones.
- **Left Face** (#e7e7e3) and **Right Face** (#d6d6d1): the side faces of isometric solids, one and two steps down from paper.

### Named Rules
**The Two Places Rule.** Part Orange marks exactly two things: the part being added, and the place to act. Links, headings, icons, rules and decoration are never orange; text selection borrows it as a highlight.

**The Current Part Rule.** In a step sequence, the current step's numeral turns from Construction Grey to Part Orange, Right Face: the shaded tone of the part going into the drawing, at 4.5:1 on paper. Part Orange itself never sets text on paper.

**The Paper Edition Rule.** There is one edition, printed on paper. No dark theme and no dark-mode variant; the fact strip is the only band printed on an ink ground.

## Typography

**Display Font:** Schibsted Grotesk, self-hosted variable woff2 (400–900, preloaded, font-display swap) (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Schibsted Grotesk, the same file (with Helvetica Neue, Arial, sans-serif)

**Character:** One Norwegian grotesk used as a single voice. At 900 with tight tracking it is blunt and mechanical; at 400 it reads plainly. Hierarchy comes from weight and size, never from a second face, capitals or letter-spacing.

### Hierarchy
- **Display** (900, clamp(3.25rem, 6.6vw, 6rem), 0.9, -0.04em): the role line of the cover title. **Display Name** (700, clamp(1.375rem, 2.2vw, 1.875rem), 1.1, -0.01em) sits 12px above it and completes the lockup.
- **Numeral** (900, clamp(4rem, 7vw, 6rem), 0.85, -0.04em, tabular figures): step numbers.
- **Headline** (800, clamp(2rem, 4.2vw, 3.5rem), 1, -0.03em, balanced): section headings, the helpline question included.
- **Headline Contact** (800, clamp(1.75rem, 5vw, 4rem), 1.05, -0.03em): the email address on the helpline, underlined 3px at 0.14em.
- **Title** (800, 1.5rem, 1.15): step titles. **Title Part** (800, 1.25rem, 1.2, -0.015em): part names in the parts tray.
- **Lead** (400, clamp(1.125rem, 1.5vw, 1.3125rem), 1.45): the promise under the cover title, max 30ch.
- **Body** (400, 1.0625rem, 1.55): reading text. Part descriptions run to 30ch, step text to 34ch and captions to 70ch; the helpline sentence steps up to 1.125rem at 44ch.
- **Action** (700, 1.0625rem) and **Action Small** (700, 0.9375rem): the primary button and the masthead tab.
- **Label** (600, 0.9375rem): navigation links. The same 15px step carries the legend at 500, and captions and table text at 400.
- **Small** (500, 0.875rem): facts in the ink strip. The colophon uses it at 400 in Soft Ink.
- **Table Head** (700, 0.8125rem, sentence case): spec-table column and group heads.
- **Tag** (700, 0.75rem): the letter in a circled part tag. Inside drawings the tag letters are 700 at 16 drawing units.
- **Wordmark** (900, 1.375rem, -0.03em): "Rensel" in the masthead.

### Named Rules
**The Weight Ladder Rule.** One family, ranked by weight: 900 for display, numerals and the wordmark; 800 for headings and titles; 700 for actions, tags and table heads; 600 for navigation; 400 and 500 for reading. No second face, no uppercase, no tracked-out labels.

**The Heavy Numeral Rule.** Sequence numbers are huge, black-weight, tightly tracked and tabular. They show state by colour alone, never by size.

## Layout

Content sits in one centred column, min(100% - 2 × gutter, 1320px), with a fluid gutter. Wide compositions use a 12-column grid with 24px gaps. Sections take clamp(72px, 12vh, 140px) of block padding, and where one paper section follows another, a 2px ink rule divides them. The masthead is a 64px sticky strip, and anchor jumps clear it by 16px.

The isometric dot lattice (1px Lattice Grey dots on a 34.64 × 20px tile with a half offset, which gives a 20px pitch along the 30° axes) lies behind the surfaces that carry drawings: the cover, the parts tray and the sticky assembly figure. It is drawing paper, not a layout grid; blocks sit on the 12 columns. Work, the helpline and the colophon are plain paper.

- **Parts tray:** four columns (48px between rows, 40px between columns), with every second part dropped 72px so the parts lie loose. Two columns at 1080px and below with a 56px drop; one column at 640px and below with no drop, and drawings capped at 170px instead of 220px.
- **Assembly sequence:** the steps take five columns, each at least 72svh tall so scrolling paces the build. The drawing takes seven and sticks 24px under the masthead, filling the rest of the viewport less 24px at each end. At 900px and below the drawing sticks directly under the masthead at 44svh on a paper fill with a 1.5px Lattice Grey rule beneath, and the steps shrink to 32svh.
- **Helpline:** the copy takes seven columns and the portrait the last four, aligned to the bottom. Both stack at 900px and below, with the portrait capped at 360px.
- **Breakpoints (max-width):** at 1359px the fact strip turns from one line into a ruled three-column grid; at 1080px the tray goes to two columns; at 900px the contents links hide and two-column compositions stack; at 640px the strip goes to two columns and spec-table rows stack.

### Named Rules
**The Five-and-Seven Rule.** Where words and a drawing share a row, the words take five columns and the drawing takes seven.

**The Drawing Board Rule.** The lattice belongs to drawings. It appears only behind surfaces that carry them, and it never sets out the blocks.

## Elevation & Depth

The system is flat. Nothing casts a shadow, floats or glows, and there is no shadow vocabulary. Layers that overlap content are separated by rules: the sticky masthead by a 2px ink rule, the sticky phone drawing by a 1.5px Lattice Grey rule. Depth exists only inside the drawings, as isometric volume: each solid is outlined in ink and filled with three face tones, and sockets and ports are solid ink.

### Named Rules
**The Three-Face Rule.** Every solid is drawn in three tones with light from the upper left: the top face is Manual Paper, the left face Left Face, the right face Right Face. The part being added swaps all three for Part Orange and its two shade faces; nothing else about it changes.

**The No-Cast-Shadow Rule.** Nothing casts a shadow: not the controls, not the photograph, not the drawings. Depth comes from face tone and ink outline only.

## Shapes

Corners are nearly square: 3px on orange controls, 4px on the printed portrait, 6px on the film frame, 2px on focus rings. Circles belong to the manual's marks: circled part letters (24px with a 1.5px ink ring on paper), the detail circle, the done tick, the leader dots, and the 4px dots between facts. Rules carry structure: 2px ink under the masthead, above sections and under table heads, and 1px Lattice Grey hairlines between table rows. Dashes mean movement or concealment, never decoration. Explosion lines dash 5/6 in Construction Grey and end in a filled arrowhead; hidden lines dash 5/3 in Soft Ink.

Drawings run on 30° isometric axes (edges climb 1 : √3), with round joins and round caps. Their strokes are set in drawing units and scale with the drawing: outlines 1.6 in assembly drawings and 2 for single parts, interior detail 1.2, handles 3, leaders 1–1.5, click marks 2.6, the detail ring 2, and the done tick a 2.4 ring around a 4-unit check. Leader dots have a 3-unit radius.

### Named Rules
**The Manual Devices Rule.** Only the manual's own devices frame content: ink rules, circled letters on leader lines, the detail circle and the ink fact strip. No cards, boxes, outlined panels or pills.

## Components

### Buttons
Blunt orange blocks that read as the place to act.
- **Shape:** nearly square (3px).
- **Primary:** Part Orange with Ink on Part text in Action type, 16px 22px padding, and a drawn arrow (18px inline SVG, round 2-unit stroke) 12px after the label.
- **Hover / Focus:** the fill shifts to Part Orange, Left Face over 0.2s and the arrow slides 4px toward the action over 0.35s. A press drops the button 1px. Focus is a 2px ink outline set 3px out.
- **Tab:** the same control at 40px tall, with 0 18px padding in Action Small, at the right end of the masthead. It stays visible at every width.
- **Text link (secondary action):** ink, 600, underlined, 28px beside the primary button.

### Links
- Links inherit ink and stay underlined: 1.5px at 0.2em in text, 1px in table rows, 3px at 0.14em for the helpline email. Navigation links are the exception: no underline at rest, underline on hover.

### Navigation
- **Masthead:** a 64px sticky strip on Manual Paper over a 2px ink rule. The wordmark sits at the left, the contents links (Label, 28px apart) and the tab at the right, with 32px between groups. At 900px and below the contents links hide and no menu replaces them; the wordmark and the tab remain.

### Chips (part tags)
- **Style:** a 24px circle with a 1.5px ink ring on paper, holding one letter in Tag type. In drawings the same tag is a 15-unit circle on a 1-unit leader line to its part.
- **Legend:** a circled letter plus the part name at 500 weight, centred under the drawing with 8px by 22px gaps.

### Fact strip
- A full-bleed Manual Ink band with paper text in Small, the facts separated by 4px Construction Grey dots with 16px either side. Below 1360px it becomes a grid ruled with 1px Soft Ink lines: three columns, and two at 640px and below.

### Parts tray item
- An isometric part (220px max, 170px on phones) with a leader line that starts at an ink dot on the part's base corner and runs down to the title. The title is in Title Part and the description in Body, Soft Ink. No container.

### Spec table
- Ruled, never boxed. Column heads in Table Head sit over a 2px ink rule; rows are split by 1px Lattice Grey hairlines; cells are padded 14px 20px 14px 0. Years are tabular in Soft Ink, project names bold in ink, and the built-with column in Soft Ink. A row group (such as Education) restarts after 40px with its own 2px rule. At 640px and below each row stacks into a block, and the column heads are hidden visually but kept for screen readers.

### Media
- **Film:** the only full-colour element. It is 16:9 with 6px corners and native controls, captioned below at 0.9375rem in Soft Ink with the title bold in ink.
- **Portrait:** printed, not pasted: grayscale at 1.1 contrast, multiplied onto Part Orange so it prints in ink on orange, with 4px corners.

### Helpline
- The place to act at section scale: a full-bleed Part Orange band that holds the Headline question, the email in Headline Contact, one sentence at 1.125rem, and LinkedIn and GitHub as 700-weight links 28px apart. Text, focus rings and selection invert to ink on orange.

### Assembly sequence (signature)
A sticky drawing builds itself as its steps scroll past.
- **States:** each part is either out on its explosion line or seated, and the newest part is orange. The detail circle and the done tick switch on at their steps. A narrow band decides the current step: a 10% band at mid-screen on wide screens, and a 2% band at 74% down on phones, where the drawing covers the top of the screen.
- **Motion:** a part slides into its seat in 0.9s on cubic-bezier(0.16, 1, 0.3, 1). Its explosion line switches off as the slide begins, and its faces change colour over 0.3s. 0.75s after the slide starts, its click mark (three short ink strokes at the joint) switches on in one frame.
- **Detail circle:** a 78-unit circle (a 2-unit ink ring on paper) with a 1-unit leader to the joint. It shows the joint at 2.2× with non-scaling strokes; hidden pins show as dashed Soft Ink lines, and the newest part keeps its orange inside the circle.
- **Fallbacks:** without JavaScript the drawing shows the finished assembly with the detail circle and the tick. Under reduced motion every state appears at once, without movement.

**The Slide-and-Click Rule.** Parts move one way only: along their own explosion line, into their seat, on the exponential ease-out. Marks of state switch on in a single frame once the slide lands, and nothing fades in from invisible.

## Do's and Don'ts

### Do:
- **Do** keep the page on Manual Paper (#f4f4f1) and print everything that states something in Manual Ink (#141414).
- **Do** keep Part Orange (#ff5a1f) for the part being added and the place to act, with ink text and ink focus rings on it.
- **Do** draw every illustration as 30° isometric line art: ink outlines (1.6 drawing units in assemblies, 2 for single parts), three face tones lit from the upper left, round joins, and circled letters on leader lines.
- **Do** frame content only with the manual's devices: 2px ink rules, circled part letters, the detail circle and the ink fact strip.
- **Do** rank type by Schibsted Grotesk's weights (900 display and numerals, 800 headings, 700 actions, 400 reading) and stay in the one family.
- **Do** move parts by sliding them along their dashed explosion lines on cubic-bezier(0.16, 1, 0.3, 1), and switch marks of state on in a single frame once the slide lands.
- **Do** show every state without movement under reduced motion, and show the finished assembly when JavaScript is off.
- **Do** print photographs in ink on orange (grayscale, 1.1 contrast, multiply), and let only the film play in full colour.

### Don't:
- **Don't** add cards, boxes, outlined panels, drop shadows or visible gradients such as glows and colour ramps. The lattice's hard-stop dots are a pattern, not a gradient.
- **Don't** ship a dark theme or a dark-mode variant; the page stays on paper in every OS theme.
- **Don't** use Part Orange for decoration, links, headings or icons, or for any text on paper (2.8:1); text that marks the current part takes Part Orange, Right Face.
- **Don't** set Construction Grey (#8c8c86) text below display size; it measures 3.1:1 on paper.
- **Don't** use AI-hype imagery: glowing gradients, robots, neural-network visuals.
- **Don't** put kickers or eyebrow labels over headings, set labels in uppercase or tracked caps, or add a second typeface.
- **Don't** fade elements in from invisible or let them overshoot; state changes slide or switch.
- **Don't** use glyph characters or icon fonts as icons; the manual's marks (arrow, click, tick) are drawn strokes in inline SVG.
- **Don't** round corners past 6px or use pills; circles are kept for the manual's marks.
