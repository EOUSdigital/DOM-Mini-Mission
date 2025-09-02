"use strict";
//TODO: DOM Practice

//TODO  Step 1

//  # Mini Mission: “what is the DOM?” (prove it to yourself)

//  what you need

//* any web page open (even this one)
//* open **DevTools → Console** (right-click page → Inspect → Console)

//  do exactly these 4 lines, one at a time

//? 1. read the page title

//  document.title

//  * you should see some text (the tab’s title).
//  * this proves: `document` lets you *read* what’s on the page.

//? 2. change the page title

document.title = "I am changing the page right now"

//* your browser tab text should change immediately. 🎉
//* this proves: the page you see is a **live object** you can change. that live object is the **DOM**.

//? 3. add a new line of text to the page

const p = document.createElement('p');
p.textContent = "I added this with JavaScript.";
document.body.append(p);

//* a new paragraph appears at the bottom of the page.
//* this proves: you can **create** things and **attach** them to the live page (the DOM).

//? 4. reload the page

//* press refresh. the paragraph you added disappears.
//* why? the **HTML file** (the original recipe) didn’t change. only the **DOM** (the live dish) changed. reload rebuilds the DOM from the HTML.

//  the takeaway (one sentence)

//* HTML = the recipe you wrote.
//* DOM = the live dish the browser made from it that you can still poke, taste, and change.


//TODO  Step 2 — six tiny things you can read (and one you can change)

//  Open DevTools → Console on any page. Paste each line and look at the result.

//? 1. The page’s address

//  document.URL

//  You will see the full address (like `https://...`).
//  Think: “where am I?”

//? 2. The page’s title (read → change → read again)

//  document.title
//  document.title = "Learning the DOM 🧠"
//  document.title

//  You just edited the tab text. That’s you changing the DOM.

//? 3. Is the page done parsing?

//  document.readyState

//  It will say one of:

//* `"loading"` → still parsing HTML
//* `"interactive"` → HTML parsed, sub-files (images, css) may still be loading
//* `"complete"` → everything finished

//? 4. How many links are on the page?

//  document.links.length

//  This counts `<a href="...">` links. (Just a number—simple.)

//? 5. How many images?

//  document.images.length

//? 6. Three “big” elements you can grab quickly

//  document.documentElement.tagName  // "HTML"
//  document.head.tagName             // "HEAD"
//  document.body.tagName             // "BODY"

//  one-button version (prints a tiny summary)

//! Paste this whole block; it just logs a neat summary so you don’t have to run lines one by one:

(() => {
    const log = console.log;
    log("URL:", document.URL);
    log("Title:", document.title);
    log("Ready state:", document.readyState);
    log("Links:", document.links.length);
    log("Images:", document.images.length);
    log("<html>/<head>/<body>:", 
        document.documentElement?.tagName, 
        document.head?.tagName, 
        document.body?.tagName);
})();

//  optional 60-second experiment (proves “live” collections)

//? 1. Check the image count:

//  document.images.length

//? 2. Add a tiny placeholder image to the page:

// const img = document.createElement('img');
// img.src = 'https://via.placeholder.com/40';
// img.alt = 'demo';
// document.body.append(img);

//? 3. Check the count again:

//  document.images.length

// It went up—because `document.images` is live (it updates as the page changes).
//* (If you want to undo, run `img.remove()` while the same tab is open.)

//? Quick sanity check (answer in your own words)

//  1. What does `document.title = "..."` prove about the DOM?
//! Answer: The `document.title = "..."` proves the DOM can be updated and modified with new code.

//  2. What’s the difference between `"interactive"` and `"complete"` for `document.readyState`?
//! Answer: The `"interactive"` may still be loading the files, and `"complete"` has everything finished.

//  3. Which property gave you the number of links on the page?
//! Answer: The document.links.length provide me with the number of links on the page.

//  ‼️ Feedback

//  You nailed those answers 👍
//  • Q1: Exactly—changing document.title shows the page is a live object you can update (that live object = the DOM).
//  • Q2: Yep—"interactive" = HTML parsed; "complete" = everything (images/CSS/etc.) finished.
//  • Q3: Correct — document.links.length gives the count.


//TODO  Step 3 — find exactly the element you want (selectors)

//  We will use just two methods:
//  • document.querySelector('CSS selector') → the first match (or `null`);
//  • document.querySelectorAll('CSS selector') → all matches as a static list;

//  • “CSS selector” means the same kinds of things you’d use in CSS: `#id`, `.class`, `tag`, `[attr=value]`, etc.

// Try these (paste in Console, one by one)

//? 1. Grab a single thing

//  document.querySelector('h1')                    // first <h1> on the page (often exists)

//? 2. Grab many things

//  document.querySelectorAll('a').length           // how many links (similar to document.links.length)

//? 3. By class / id / attribute

//  document.querySelector('.primary')              // first element with class="primary" (if it exists)
//  document.querySelector('#title')                // id="title" (if it exists)
//  document.querySelector('[data-id="2"]')         // attribute match

//? 4. Scope your search inside a container

const nav = document.querySelector('nav');          // maybe null if no <nav> on this page
nav?.querySelectorAll('a').length                   // links only inside the nav

//? 5. See your selection visually (harmless highlight)

//  document.querySelector('img')?.style.outline = '2px solid red'; // outline first image
document.querySelectorAll('a').forEach(a => a.style.outline = '1px dashed orange'); // outline all links

//  > If some selectors return `null`, that’s okay—maybe your page does not have those elements. Optional: use your small playground file from earlier, or tell me and I will give you a 1-line snippet that injects a tiny test layout.

//* Mini-exercise (2–5 minutes)

//? 1. Select the first paragraph on the page.
//! Anser: <p class="tnb-services-headlines">

//? 2. Select all images and log how many you found.
//! Answer: 9

//? 3. Select any element with `data-id="2"` (if your page has none, try `[target="_blank"]` instead).
//! Answer: <a class="user-anonymous tnb-certi…top ga-top-certificates" target="_blank" href="https://campus.w3schools…llections/course-catalog" title="W3Schools Certificates" aria-label="W3Schools Certificates" style="outline: orange dashed 5px;">

//? 4. If there’s a `nav`, count how many links are inside it (scoped query).
//! Answer: 4

//* Quick check (answer in your own words)

//? 1. What’s the difference between `querySelector` and `querySelectorAll`?
//! Answer: The document.querySelector will select the first match (or `null`), and document.querySelectorAll will match all elements as a static list;

//? 2. Write a selector to target an element with `data-id="2"`.
//! Answer: document.querySelector('[data-id="2"]');

//? 3. Why is scoping (`container.querySelector(...)`) helpful?
//! Answer: The scoping (`container.querySelector(...)`) is helpful because it returns all the elements that are included in the specified group of selectors.

//  ‼️ Feedback
//  Q1: Correct: querySelector → first match (or null), querySelectorAll → all matches as a static list.
//  Q2: Perfect: document.querySelector('[data-id="2"]').
//  Q3: Small fix: scoping means you search inside a specific container only.
//      Example: nav.querySelectorAll('a') finds links in that nav, avoiding false matches elsewhere, keeping selectors shorter, and often faster.


//TODO  📄 Step 4 — Move around the page (parents, children, siblings)

//* The three moves
//  • Parent: el.parentElement
//  • Children (elements only): el.firstElementChild, el.lastElementChild, el.children
//  • Siblings (elements only): el.previousElementSibling, el.nextElementSibling
//  Tip: use the Element versions (with “Element” in the name) to avoid landing on whitespace text.

//! Open DevTools → Console and try these one by one. If something returns null, that’s fine—move to the next line.

//? 1. Pick the first link, then outline its PARENT (green box)

const link = document.querySelector('a');
link?.parentElement?.style.outline = '2px solid lime';

//? 2. Mark the FIRST and LAST element inside <body>

document.body.firstElementChild?.style.outline = '2px solid blue';
document.body.lastElementChild?.style.outline  = '2px solid red';

//? 3. From a selected element (like the first <p>), hop to its NEXT sibling

const p = document.querySelector('p');
p?.nextElementSibling?.style.outline = '2px dashed orange';

//? 4. Count ONLY element children inside <body> (ignores text/whitespace)

document.body.childElementCount;

//? 5. (If a <nav> exists) Add a tiny data index to each link INSIDE that nav

const nav = document.querySelector('nav');
nav?.querySelectorAll('a').forEach((a, i) => a.dataset.index = String(i));

//  Tip: prefer the Element versions: firstElementChild, nextElementSibling.
//  The plain firstChild/nextSibling can land on Text nodes (whitespace).

//* Quick check (answer briefly)

//? 1. Why might firstChild give you a Text node, and how do you avoid that?
//! Answer: The reason firstChild might give a Text node is because it returns the first node of any type—including text, comment, or element—within a parent, and whitespace (including spaces, tabs, and newlines) between elements in HTML is represented in the DOM as text nodes.

//? 2. What’s the difference between el.nextSibling and el.nextElementSibling?
//! Answer: The nextElementSibling always returns an element, and the nextSibling can return any node.

//? 3. Write one line that adds class "active" to the element right after .current.
//! Answer: const adds = document.getElementById('.current');
//  adds.classList.add('active');

//? 4. How do you count only element children?
//! Answer: document.body.childElementCount;

//  ‼️ Feedback
//  Q1: perfect: whitespace becomes Text nodes, so firstChild can hit those. use firstElementChild when you want an element.
//  Q2: correct: nextSibling = any node; nextElementSibling = elements only.
//  Q3: tiny fix: the task was “element after .current”. also, .current is a class, not an id. one-liner:

document.querySelector('.current')?.nextElementSibling?.classList.add('active');

//  Q4: correct: element.childElementCount counts elements only.


//TODO  📝 Step 5 — add stuff to the page (create & insert)

//* Super small, hands-on. paste these in the Console one by one.

//? 1. Make something and add it to the end.

const p = document.createElement('p');
p.textContent = 'Hello from JavaScript';
document.body.append(p);                        //  goes to the end of <body>

//? 2. Add something to the top.

const note = document.createElement('div');
note.textContent = 'Text notice';
note.className = 'notice';
document.body.prepend(note);                    //  first child of <body>

//? 3. Insert next to an existing element (before/after).

const h1 = document.querySelector('h1') || document.body.firstElementChild;
const badge = document.createElement('span');
badge.textContent = ' NEW';
h1?.after(badge);                               //  places badge right after the heading

//? 4. moving vs copying
//  Appending an existing node moves it (doesn’t copy).

document.body.append(note);                     // the same 'note' moves from top to bottom

// To copy:

const copy = badge.cloneNode(true);             // deep clone
h1?.before(copy);                               // same text, separate node

//? 5. remove & replace quickly

badge.remove();                                 // delete the badge

// replace all children with one call
document.body.replaceChildren(h1, p, note);     // keeps <body> but swaps its contents

//! rule of thumb: prefer textContent (safe, no HTML parsing). only use innerHTML for trusted strings.

//* Mini-exercise (2–5 min)

//  Try these on your page (or your small playground):
//  1. Append a new paragraph at the end that says: “Added at the end.”
//! Solution:

const newParagraph = document.createElement("p");
newParagraph.textContent = "Added at the end.";
container.appendChild(newParagraph);

//  2. Prepend a paragraph at the top that says: “Added at the top.”
//! Solution: 

const paragraph = document.createElement("p");
paragraph.textContent = "Added at the top.";
container.prepend(paragraph);

//  3. After the first heading on the page, insert a small <em> element with the text Hot (build it with createElement + textContent, then after()).
//! Solution: 

const heading = document.querySelector("h1, h2, h3, h4, h5, h6");
const em = document.createElement("em");
em.textContent = "Hot";
heading.after(em);

//  4. Clone that <em> and insert the clone before the heading.
//! Answer: 

const cloneEm = em.cloneNode(true);
heading.before(cloneEm);

//  (If your page does not have a heading, use document.body.firstElementChild instead.)

//  ‼️ Feedback

//  You are doing great. Here’s tight, practical feedback on each task with tiny safety tweaks.

//? 1. Append “Added at the end.”

//  Works if `container` is a real element you defined earlier. If not, you will get a `ReferenceError`.
//* Prefer the modern, symmetric `append` (pairs nicely with `prepend`).

//  Robust version

const container2 = document.querySelector('#container') || document.body;
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Added at the end.';
container2.append(newParagraph);

//? 2. Prepend “Added at the top.”

//  👍 Correct. Same note about making sure `container` exists (see #1).

//  Robust version (reuses the same container variable)

const container = document.querySelector('#container') || document.body;
const paragraph = document.createElement('p');
paragraph.textContent = 'Added at the top.';
container.prepend(paragraph);

//? 3. Insert `<em>Hot</em>` after the first heading

//  • ✅ Solid. This grabs the **first** heading of any level and inserts after it.
//  • Add a guard in case the page has no headings.
//  • Avoid adding a literal space; do spacing via CSS if you need a gap.

//* Safer version

const heading = document.querySelector('h1, h2, h3, h4, h5, h6');
if (heading) {
    const em = document.createElement('em');
    em.textContent = 'Hot';
    heading.after(em);
}

//  *(Optional CSS for spacing)
//  .title em { margin-left: .25rem; }` or simply em { margin-left: .25rem; }

//? 4. Clone that `<em>` and insert the clone before the heading

//  • ✅ Correct cloning and placement—but only if `em` and `heading` are still in scope.
//  • If you run this in a fresh console without the previous step, `em` will be undefined. Safer is to **locate** the just-inserted `<em>` or recreate it.

//* Resilient version

let heading2 = document.querySelector('h1, h2, h3, h4, h5, h6');
if (heading2) {
    // Try to reuse the <em> we inserted after the heading:
    let emAfter = heading2.nextElementSibling;
    if (!emAfter || emAfter.tagName !== 'EM') {
        // If it’s not there, create one so the step still works
        emAfter = document.createElement('em');
        emAfter.textContent = 'Hot';
        heading2.after(emAfter);
    }
    const cloneEm = emAfter.cloneNode(true);
    heading2.before(cloneEm);
}

//* Tiny best-practice recap
//  • Use `append`/`prepend` for symmetry; keep `appendChild` in your toolbox for older patterns.
//  • Always guard DOM lookups (`if (node) { ... }` or `node?.method()`).
//  • Prefer CSS for visual spacing; avoid inserting literal space text nodes.


//* Quick check (answer briefly)

//  1. Does append(existingNode) copy or move that node?
//! Answer: The append(existingNode) method inserts a set of Node objects or strings after the last child of the Element. 

//  2. What is the safest way to insert plain text content?
//! Answer: The safest way to insert plain text content is to use the insertAdjacentText() method of the Element interface, given a relative position and a string, that inserts a new text node at the given position relative to the element it is called from.

//  3. Which two methods put content inside a container at the start or end?
//! Answer: To put content inside a container at the start or end, I will use:
//  1. firstElementChild
//  2. lastElementChild

//  ‼️ Feedback

//! Great effort! Here’s precise feedback and fixed answers—short and clear.

//? 1. Does append(existingNode) copy or move that node?
//  • Correct answer: It moves the existing node (does not copy). If that node is already in the DOM, it’s removed from its old parent and appended to the new one.
//  • Quick demo:

const a = document.querySelector('#itemA');
const list2 = document.querySelector('#list2');
list2.append(a);                        // #itemA moves from its old list to #list2

//? 2) Safest way to insert plain text content?
//  • Your pick insertAdjacentText is safe ✅ (it inserts a Text node; no HTML parsing).
//  • Also safe (and very common):
//      • textContent (best when replacing content inside an element)

el.textContent = 'Hello';               // replaces children with plain text

//  • append('text') (adds a Text node at the end)

el.append(' more text');                // adds plain text to the end


//? 3) Which two methods put content inside a container at the start or end?

//  • Use prepend() (start) and append() (end).
//  Your answer listed firstElementChild/lastElementChild—those are properties to read the first/last child, not methods to insert.
//  • Examples:

container.prepend(newNodeOrString);     // inside, at the beginning
container.append(newNodeOrString);      // inside, at the end

//  Or with precise positions using insertAdjacent*:
//  • start: 'afterbegin'
//  • end: 'beforeend'

container.insertAdjacentText('afterbegin', 'Top text');
container.insertAdjacentHTML('beforeend', '<em>Bottom</em>');







