# DESIGN.md: Henri Maman

## Concept
A black and white portfolio where the only colour comes from the work itself, and every project is introduced by its own hand-drawn symbol. It should read in seconds as a confident, precise designer who also understands what makes a project work.

## References

BIG (Bjarke Ingels Group) website
Borrowed, as a system only:
- Projects are entered through a simple symbol or icon, not only a photo.
- A bold, confident attitude: few words, large statements, no hedging.
- Large imagery, and project pages that flow as one continuous scrolling story.
- A dark, minimal front door.
Not borrowed: BIG's name, logo, icons, fonts, text, images, colours or page layouts. Every icon on this site is drawn by Henri for his own projects. Because this site has a small number of projects, it does not use an archive-style mass grid.

## Colour palette
The interface is black and white. Colour comes only from the drawings.

- Ink #0A0A0A: all text on white, the log-in page background, the phone menu overlay, icons at rest.
- Paper #FFFFFF: main page background, text on Ink.
- Graphite #5C5C5C: secondary text such as captions, the home subtitle and labels in the project facts block. Passes contrast on Paper.
- Hairline #E3E3E3: dividers and input borders on white pages.
- Placeholder #D9D9D9: grey image boxes, labelled in Ink.
- Error #C62828: background strip for form errors only, with Paper text.

Project accents: one colour per project, sampled by Henri from that project's own drawings. Used only for the project's icon on hover or tap, and thin accents on that project's page (the rule above the facts block, link underlines). Never used for body text unless it passes 4.5:1 contrast on its background.
- R+EC: [ADD: hex sampled from drawings]
- Deering Estate: [ADD: hex sampled from drawings]
- Building Ecologies: [ADD: hex sampled from drawings]
- Ramp & Reel Fishing Market: [ADD: hex sampled from drawings]
- Mercy University: [ADD: hex sampled from drawings]
- Built Work: [ADD: one hex sampled from the pergola or garage door photos]

## Typefaces
One family, free from Google Fonts: Inter, weights 400, 500 and 600. Contemporary, quiet, clean.
- Display (project titles, and "Henri Maman" on the home page): 64px desktop, 40px phone, weight 600, line height 1.05, letter spacing -0.02em.
- Home subtitle ("Portfolio"): Heading 3 size, weight 400, Graphite, directly under the name.
- Heading 2: 32px desktop, 26px phone, weight 600, line height 1.15.
- Heading 3: 20px desktop, 18px phone, weight 500.
- Body: 18px desktop, 17px phone, weight 400, line height 1.55, lines no longer than about 68 characters.
- Captions and labels: 15px, weight 400 or 500, Graphite.
- Menu: 16px, weight 500.
- "Henri Maman" in the top bar: 20px, weight 600.
- Text links outside the menu: Heading 3 size, weight 500, underlined. The underline is removed on hover.
- Nothing on the site is smaller than 15px.

## Layout and grid
- Hidden grid: 12 columns on desktop (max width 1440px, outer margin 48px, gutter 24px), 8 columns on tablet, 4 columns on phone (outer margin 20px, gutter 16px).
- Loose feel, precise underneath: images are placed at varied widths (for example 5, 7, 8 or 12 columns) and offset left or right, but always start and end on a grid column. Nothing floats off the grid.
- Airy spacing on a fixed scale: 8, 16, 24, 40, 64, 120px. Major sections are separated by 120px on desktop, 64px on phone.
- Pages scroll vertically. The page itself never scrolls sideways.

## Home page
The home page works like a small browser for the work. From top to bottom:
- "Henri Maman" at Display size with "Portfolio" beneath it, on the left edge of the grid, 120px below the top bar (64px on phone).
- Toolbar: four filter buttons on the left: All, Studio Work, Professional Work, Built Work. Beneath them, a count in caption type, for example "3 of 5 projects: Studio Work".
- The six project icons in a single vertical column, stacked one under the other and centred on the page at rest, on desktop and phone alike. Each icon is four columns wide (grid columns 5 to 8 on desktop, 3 to 6 on tablet, the full width on phone). The white space between them is generous and even: 120px between one project and the next on desktop, 64px on phone.
- Each icon carries the project's name and a short description. The name is Heading 3 size, weight 500, Ink; the description is 15px, Graphite, line height 1.55, lines no longer than about 68 characters.
  - They are hidden at rest and never sit on top of the icon. When the pointer is directly over the icon image (not the empty space beside it), when the project has keyboard focus, and for as long as the project is open (clicked or tapped), the icon glides from the centre to the left edge of the grid (columns 1 to 4) over 400ms, keeping its size, and the name and description fade in to its right. The icon stays moved for as long as the pointer is over the icon itself or over the place in the centre where it rests; once the pointer is off both, a closed project's icon glides back to the centre and the text fades out. Only the icon image opens and closes a project when clicked. The empty space to the left and right of the icons is plain white space: hovering there does nothing, and clicking there closes an open project like any other empty space. On a touch screen, where there is no hover, this happens only when the project is tapped open.
  - On desktop and tablet they sit to the right of the moved icon, left-aligned, with the text block centred vertically to the icon's height. There is a clear gap between icon and text: one empty grid column on desktop (the text runs on columns 6 to 11), 40px on tablet (the text runs on columns 5 to 8). If a long description is taller than the icon on a narrow screen, the icon and the text stay centred on each other.
  - On phones, where there is no room beside the icon and no hover, the icon does not move and they appear directly below it, 16px beneath it, only while the project is open (tapped). A closed project shows its icon alone, with no empty space held for the text.
  - A project with no description yet shows its name only.
- Clicking a project opens it in place. Its icon stays at the left, its name and description stay on show, and a viewer opens beneath them across all twelve grid columns, pushing the projects below it down.
  - The viewer is one continuous strip: the images sit side by side, all at the same height (a little over half the screen height), each at its own proportions and never cropped, one gutter apart.
  - Elevations and sections are the exception to the shared height. They are never long panels. Each is scaled down, whole and at its own proportions, to the full visible width of the strip, and they are stacked in pairs, one above the other: elevations with elevations and sections with sections. Where a project has them, the pairs are North Elevation above South Elevation; East Elevation above West Elevation; Long Section above Short Section. Otherwise two elevations, or two sections, pair in the order of Henri's file numbers. Each pair takes one screen-width of the strip. Within a project, the pairs line up with one another: every upper drawing's title and description sit on one shared line, and every lower drawing's title and description sit on another, so the text does not jump up or down from one pair to the next. To do this each upper drawing is given the room of the tallest upper drawing in the project (and each lower drawing the room of the tallest lower one) and sits at the bottom of that room, directly above its own text; a shallower drawing simply has white space above it. Pairing is for long, low drawings (four or more times as wide as they are tall). An elevation or section that is squarer than that would fill the whole screen if scaled to the strip's width, so it is shown as an ordinary image at the shared height instead. The two drawings in a pair are 16px apart (measured from the first drawing's caption to the second drawing); pairs are 40px apart on desktop and 32px on phone, slightly more than the gutter between other images. If a project has only one drawing of a pair, it sits alone at the same full width.
  - Order within the strip: drawings and renders first, photos of physical models last. A model photo has its title under it and no description text box.
  - The strip scrolls sideways seamlessly. It never stops or snaps on an image. Swipe on touch screens; with a mouse, drag the strip or use the left and right arrow keys, which move it along by most of a screen. The page itself still never scrolls sideways.
  - Under each image, 8px beneath it: the image's title on the left (15px, weight 500, Ink; every word of a title starts with a capital letter, for example "Long Wall Section") and, on the opposite side, a text box with its description (15px, Graphite, line height 1.55, no wider than about 480px). No border. The caption is exactly as wide as its image, never wider: the title starts at the image's left edge and the description is set flush right, ending at the image's right edge. The description sits on the same line as the title whenever the two fit side by side within the image's width; only when they don't fit does it drop below the title, still flush right. Under an image wider than the screen (possible on phones), the caption is as wide as the screen and stays in view while the image is panned.
  - Impact note: an image can carry a short note directly above it, starting at the image's top left corner, saying what Henri did on it. It begins with the word "Impact:" (15px, weight 500, Ink) followed by the note (15px, Graphite, line height 1.55). It sits 8px above its image. A short note is on one line, and the image beneath it is exactly as wide as the note: it starts where the note starts and ends where the note ends, whole and at its own proportions, so its height follows from that width. This is an exception to the shared height. A long note, one that on a single line would make its image far larger than the others, instead wraps onto several lines within the width of its image, and that image keeps the shared height. In a strip with notes, the images still line up along their top edge: every note sits above that line, with its last line 8px above its own image. On phones, where a line that long cannot fit, the image keeps the shared height and the note wraps within the image's width. No border, no background. Used on professional work.
  - Step diagram: an image made of several separate drawings (the steps of a diagram) can respond part by part. At rest it looks like any other image, with its own title and description. When the pointer is over one of its parts, every other part fades to 50% over 200ms and the title and description under the image change to that part's. Moving off the image brings everything back, and the title and description return to the image's own. Clicking still opens the enlarged view. Under a step diagram the title and description always stay on one line, so the text does not jump between one and two lines as the pointer moves from part to part; on a small window, where that line is longer than the image is wide, the description runs a little past the image's right edge rather than dropping below the title. Room for the longest line is made once, so the images beside it do not shift as the pointer moves between parts. (Phones have no hover, so there the caption wraps as usual.)
  - There are no buttons or links inside an open project: no arrows, no Close, no link to the project page. Nothing sits under the strip.
  - Click-through image: several photos of the same kind can share one place in the strip. They lie on top of one another in one frame, so only one shows at a time and each replaces the last in exactly the same place, at exactly the same size. The frame takes the proportions of the first photo and the same height as every other image; a photo whose proportions differ slightly is trimmed at the edges to fill it, never stretched. Clicking the right half of the image shows the next photo; clicking the left half shows the one before. The set does not go round in a circle: at the last photo there is no next, and the visitor goes back the other way. The pointer shows which way a click will go: a single arrow pointing right over the right half, a single arrow pointing left over the left half (never a two-headed arrow). The arrow is a small, plain chevron: two short diagonal strokes meeting at a point, like ">" for forward and "<" for back, with no line through the middle. It is about 10px tall, drawn in a thin Ink line with a hairline white edge so it shows on any image. On the first photo the whole image shows the right-pointing arrow and a click anywhere on it goes to the next; on the last photo the whole image shows the left-pointing arrow and a click anywhere on it goes back. The change is a 200ms fade. The title and description under the image change with each photo. Above every click-through image, starting at its top left corner and 6px above it, sits a small label reading "Click Me" (12px, three sizes below the 15px description text, Graphite), so a visitor knows the image changes when clicked. The label sits in the space above the strip, so the image itself stays level with its neighbours. When the images sharing one place are drawings of the same thing (the same building seen the same way, or plans of different levels), their web copies are cut onto one shared frame of identical size, placed so that the parts they have in common, and any key, sit in exactly the same spot in each. Clicking then changes only what is different, and nothing appears to jump.
  - Where one strip holds more than one built project, the second project's first image starts after a wider gap: 64px instead of one gutter, so the two read as separate groups.
  - Enlarged view: clicking an image in a project's strip opens it larger, over the whole screen, on a Paper background. The image is shown at its full stored size, usually larger than the screen. Moving the mouse moves the view: pointing at the left of the screen shows the left of the drawing, the bottom shows the bottom, and so on, so any part can be looked at in detail without dragging. On a touch screen the enlarged image is dragged with a finger instead. It opens and closes with a 200ms fade. Clicking the image again, the Close button (filter button style, top right) or Escape closes it. In the strip the pointer shows a magnifying glass over any image that can be enlarged. Grey placeholder boxes cannot be enlarged, and neither can a click-through image, where a click changes the photo.
  - A project with no images yet has no viewer. Clicking it only keeps its icon at the left and its name and description on show until it is clicked again.
  - Only one project is open at a time. Opening another closes the first. Clicking the open project again, or pressing Escape, closes it. So does clicking any empty space outside the open project: the white space above it, beneath it or beside the other projects. Clicking a link, a button or an image elsewhere does what it normally does, and clicking or dragging inside the open project never closes it.
  - After a project opens, the page scrolls just enough to bring the whole viewer into view.
- When a filter is chosen, the projects of that type move to the top of the column, directly under the toolbar, in their usual order. The other projects follow beneath them, faded to 20% opacity, and cannot be clicked. "All" puts every project back in its usual order.
- Text links to Contact and About, 120px below the last project (64px on phone). There is no Projects link. There is no full-bleed image on the home page.
- Nothing changes on its own. The page only changes when a button is pressed.

## About page
- Two columns. Portrait on the left: grid columns 1 to 4 on desktop, 1 to 3 on tablet. Shown whole at its own proportions, in black and white.
- Text on the right, level with the top of the portrait: grid columns 6 to 12 on desktop, 4 to 8 on tablet.
- On screens 1200px and wider, the portrait is as tall as the text beside it: its top is level with "Bio" and its bottom is level with "Download Resume". It keeps its own proportions, so its width follows from that height and it no longer ends on a grid column; it still starts on column 1 and never runs past column 5. This is the one image on the site that is sized by its neighbour instead of by the grid.
- On narrower screens the text is too tall for the portrait to match it without covering it, so the portrait keeps its column width and the two only share a top edge.
- On phone they stack: portrait at full width, then the text 40px beneath it.
- The text is a panel of entries in this order: Bio, Education, From, Software, Honors, Resume. Each entry is a label with its text beneath, and entries are 24px apart.
- Labels: Body size (18px desktop, 17px phone), weight 600, Ink.
- Text: 15px, weight 400, Graphite, line height 1.55, lines no longer than about 68 characters.
- The resume link sits in the panel in the same 15px Graphite text, weight 500, underlined. The underline is removed on hover. It downloads the file and opens it in a new tab.

## Contact page
- The same panel style as the About page: labels (Email, LinkedIn) at Body size, weight 600, Ink; the text beneath at 15px, Graphite; entries 24px apart.
- The email and LinkedIn links look like the resume link: 15px Graphite, weight 500, underlined, underline removed on hover.

## Image treatment
- Full-bleed, edge to edge: only images strong enough to hold the full screen width, usually the lead image of a project.
- Framed: drawings, plans, sections, diagrams and process images sit inside the grid with white space around them. Drawings are shown whole, never cropped.
- Images keep their own colour. No filters, no forced black and white. One exception: Henri's portrait on the About page is shown in black and white, to match the interface.
- Captions sit under images in Graphite, 15px. On the Mercy University page, each caption stacks three lines: the firm credit, a brief summary of the image, and Henri's specific contribution.
- Missing images: a Placeholder grey box with the label [ADD: image of ...] in Ink.

## Project icons
- One icon per project page (six in total), drawn by Henri, based on that project's form or main idea.
- Simple, single line weight, Ink on Paper, saved as SVG in images/icons.
- R+EC is the exception: its icon on the home page is its cover drawing (the line drawing of the three buildings with "R+EC" written on the ground), saved as images/icons/rec.jpg. It is shown whole, at its own proportions, centred in the square icon box, with no grey background.
- Deering Estate is the second exception: its icon on the home page is its section perspective render (de-07-p-section), saved as images/icons/deering.jpg and shown the same way. It is in full colour, which follows the rule that colour comes from the work.
- Ramp & Reel Fishing Market is another: its icon is its vendor render (rr-09-vender-render), saved as images/icons/ramp-reel.jpg and shown the same way, in full colour.
- Built Work is the third exception: its icon on the home page is a photo of the pergola going up (bw-pergola-icon-image-09), saved as images/icons/built.jpg and shown the same way.
- Building Ecologies is a temporary exception: until its own images are ready, its icon on the home page is an "Under Construction" sign (images/rf/rf-01-under-construction.jpg), shown the same way. It is not Henri's drawing and its yellow and black are not colour from the work, so it is to be replaced as soon as Building Ecologies has an image of its own.
- On hover or tap: the icon takes on the project accent colour and lifts 4px over 200ms. On the home page the icon instead glides from the centre to the left over 400ms and the project name and description appear beside it (see Home page).
- Icons appear on the home page (stacked in one column, see Home page), on the projects page and beside the title of each project page.

## Movement
Expressive but light. Plain CSS and a small amount of plain JavaScript. No animation libraries.
- Icons react on hover and tap, as above.
- Images fade in and rise 24px into place when they first enter the screen (400ms, ease-out), once only.
- Full-bleed images move slightly slower than the scroll, never more than 40px of offset.
- Progress bar: a thin Ink line, 2px high, runs along the bottom edge of the header, under "Henri Maman" and the menu links, on every page with a header. It sits on the header's hairline, so the unfilled part of the line stays a faint grey. It starts at the left and grows to the right as the page is scrolled down, reaching the full width at the bottom of the page, so a visitor can see how far down they are. It follows the scroll directly, with no easing. On a page too short to scroll it does not show. It stays on when a device is set to reduce motion, because it only moves when the visitor scrolls.
- The phone menu overlay fades in over 250ms.
- On the home page, projects outside the chosen filter fade to 20% opacity over 400ms. This shows which projects belong to each type of work. The move to the top of the column is immediate, with no animation.
- On the home page, a project's viewer opens over 400ms (ease-out): it grows to its full height while fading in and scaling up from 96%. It closes the same way in reverse. The arrow keys glide the strip of images sideways.
- If a visitor's device is set to reduce motion, all movement is switched off and everything simply appears in place.
- Test for every movement: does it help someone understand a project? If it is only decoration, it is cut. The one exception is the intro screen, below.

## Intro screen
- Shown before the home page on two occasions: right after log-in, and every time "Henri Maman" in the header is clicked, from any page including the home page itself. It is not shown when the home page is refreshed, reached with the browser's back button, or opened by a visitor who was already signed in.
- A full-screen Ink background with "Henri Maman" in Paper at Display size and "Portfolio" in Paper at Heading 3 size beneath it, both centred on the screen.
- About 2.5 seconds in total: the text fades in over 600ms and holds until 1.5 seconds; then the ending plays over 1 second.
- The ending is one continuous motion, not a cut:
  - "Portfolio" fades away over the first 300ms.
  - "Henri Maman" smoothly shrinks and travels from the centre of the screen to the header, landing exactly on the header's "Henri Maman": same position, same size (20px), same letter spacing. It eases in and out over the full second.
  - At the same time the black screen fades away to show the home page beneath.
  - The travelling name starts in Paper on the black screen and ends in Ink on the white page. It switches colour quickly at the midpoint of the fade, so it never sits grey on grey.
  - The header's own "Henri Maman" stays hidden until the travelling name lands on it, then takes its place, so there is never a second copy on screen.
- Nothing can be clicked while it plays, and it cannot be skipped.
- If a visitor's device is set to reduce motion, the intro is skipped and the home page simply appears.

## The log-in page
- Full-screen Ink background.
- "Henri Maman" in Paper, Inter 600, top left, in the same position as the name on every other page.
- A centred form, maximum width 360px: email and password fields with Paper backgrounds, Ink text, square corners, 48px tall, labels in Paper at 15px above each field.
- One primary button: Paper background, Ink text. On hover or focus it inverts to Ink with a 1px Paper border.
- Below the button, a small text switch in Paper, underlined: "No account? Sign up" or "Have an account? Log in".
- No explanatory text, no images, no icons, no footer.
- Errors appear under the form as Paper text on an Error strip.

## Menu and buttons
- Top bar on every gated page: "Henri Maman" on the left (links to index.html, and is the way back to the home page from every page); About, Contact and Log out on the right. There is no Projects link in the menu. Paper background, Ink text. A 1px Hairline line appears under the bar once the page is scrolled.
- On phones: name on the left, the word "Menu" on the right. It opens a full-screen Ink overlay with the links in Paper at Heading 2 size, Log out last.
- The current page is marked with an underline.
- Buttons: rectangular, square corners, 1px Ink border, Ink text, 16px weight 500. On hover or focus they invert. Every tap target is at least 44px tall.
- Filter buttons (home page toolbar): the same button style, 44px tall. The chosen button stays inverted (Ink background, Paper text).
- Keyboard focus is always visible: a 2px Ink outline (Paper on Ink backgrounds).

## Tone of voice
First person, plain and short. Say what the project is, what it does and why, then the facts. Confident, never boastful. No stacks of architecture jargon. Numbers and facts appear only when Henri has supplied them. Contribution captions use specific verbs ("drafted", "detailed", "produced") and never vague ones ("assisted with", "helped on").

## Five never rules
1. Never add colour to the interface beyond this palette. Colour comes from the work.
2. Never use pop-ups, cookie walls, auto-playing video or sound. The enlarged view of an image is not a pop-up: it opens only when the visitor clicks an image.
3. Never set text smaller than 15px or below 4.5:1 contrast with its background.
4. Never add animation that does not help someone understand a project, that needs a library, or that slows the page down. The only exception is the intro screen, shown after log-in and when "Henri Maman" in the header is clicked.
5. Never copy BIG's or anyone else's icons, logo, fonts, text or images.
