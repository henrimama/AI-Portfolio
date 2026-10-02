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
- Building Ecologies Canopy: [ADD: hex sampled from drawings]
- Fishing Market: [ADD: hex sampled from drawings]
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
- Toolbar. On the left, four filter buttons: All, Studio Work, Professional Work, Built Work. On the right, a joined pair of view buttons: Icons, List. Beneath them, a count in caption type, for example "3 of 5 projects: Studio Work". On tablet and phone the view buttons sit under the filters, on the left.
- Icons view (shown first): the field of five project icons. Each icon is two columns wide and every second icon is stepped down 40px. Icons outside the chosen filter stay in place, fade to 20% opacity and cannot be clicked, so the groups read at a glance.
- List view: a plain table with Hairline rules and three columns: Project (a text link), Type, Context. Projects outside the chosen filter are removed from the list. On phone each project stacks into one block: name, then type and context in Graphite caption type.
- One full-bleed lead image, 21:9 on desktop and 4:3 on phone, 120px below the field or list.
- Text links to Projects and About, 64px below the image.
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

## Image treatment
- Full-bleed, edge to edge: only images strong enough to hold the full screen width, usually the lead image of a project.
- Framed: drawings, plans, sections, diagrams and process images sit inside the grid with white space around them. Drawings are shown whole, never cropped.
- Images keep their own colour. No filters, no forced black and white. One exception: Henri's portrait on the About page is shown in black and white, to match the interface.
- Captions sit under images in Graphite, 15px. On the Mercy University page, each caption stacks three lines: the firm credit, a brief summary of the image, and Henri's specific contribution.
- Missing images: a Placeholder grey box with the label [ADD: image of ...] in Ink.

## Project icons
- One icon per project page (five in total), drawn by Henri, based on that project's form or main idea.
- Simple, single line weight, Ink on Paper, saved as SVG in images/icons.
- On hover or tap: the icon takes on the project accent colour and lifts 4px over 200ms, and the project name appears beneath it.
- Icons appear on the home page (as the icon field, see Home page), on the projects page and beside the title of each project page.

## Movement
Expressive but light. Plain CSS and a small amount of plain JavaScript. No animation libraries.
- Icons react on hover and tap, as above.
- Images fade in and rise 24px into place when they first enter the screen (400ms, ease-out), once only.
- Full-bleed images move slightly slower than the scroll, never more than 40px of offset.
- The phone menu overlay fades in over 250ms.
- On the home page, icons outside the chosen filter fade to 20% opacity over 400ms. This shows which projects belong to each type of work.
- If a visitor's device is set to reduce motion, all movement is switched off and everything simply appears in place.
- Test for every movement: does it help someone understand a project? If it is only decoration, it is cut.

## The log-in page
- Full-screen Ink background.
- "Henri Maman" in Paper, Inter 600, top left, in the same position as the name on every other page.
- A centred form, maximum width 360px: email and password fields with Paper backgrounds, Ink text, square corners, 48px tall, labels in Paper at 15px above each field.
- One primary button: Paper background, Ink text. On hover or focus it inverts to Ink with a 1px Paper border.
- Below the button, a small text switch in Paper, underlined: "No account? Sign up" or "Have an account? Log in".
- No explanatory text, no images, no icons, no footer.
- Errors appear under the form as Paper text on an Error strip.

## Menu and buttons
- Top bar on every gated page: "Henri Maman" on the left (links to index.html); Projects, About, Contact and Log out on the right. Paper background, Ink text. A 1px Hairline line appears under the bar once the page is scrolled.
- On phones: name on the left, the word "Menu" on the right. It opens a full-screen Ink overlay with the links in Paper at Heading 2 size, Log out last.
- The current page is marked with an underline.
- Buttons: rectangular, square corners, 1px Ink border, Ink text, 16px weight 500. On hover or focus they invert. Every tap target is at least 44px tall.
- Filter and view buttons (home page toolbar): the same button style, 44px tall. The chosen button stays inverted (Ink background, Paper text).
- Keyboard focus is always visible: a 2px Ink outline (Paper on Ink backgrounds).

## Tone of voice
First person, plain and short. Say what the project is, what it does and why, then the facts. Confident, never boastful. No stacks of architecture jargon. Numbers and facts appear only when Henri has supplied them. Contribution captions use specific verbs ("drafted", "detailed", "produced") and never vague ones ("assisted with", "helped on").

## Five never rules
1. Never add colour to the interface beyond this palette. Colour comes from the work.
2. Never use pop-ups, cookie walls, auto-playing video or sound.
3. Never set text smaller than 15px or below 4.5:1 contrast with its background.
4. Never add animation that does not help someone understand a project, that needs a library, or that slows the page down.
5. Never copy BIG's or anyone else's icons, logo, fonts, text or images.
