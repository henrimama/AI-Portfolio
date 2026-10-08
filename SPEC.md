# SPEC.md: Henri Maman portfolio

## What the site is
A personal architecture portfolio for Henri Maman, a B.Arch student at the University of Miami. It shows his studio work, professional work and built work. The message in the first ten seconds: a designer who understands the business. Design leads; each project also shows he understands program, site and how a project works.

## Who it is for
Architecture firms and real estate development firms that might offer Henri an internship or job, now or in the future, and anyone else who wants to see his work.

## Pages

login.html (never gated)
- Purpose: the front door. Sign up or log in.
- Content: "Henri Maman", email field, password field, one button, a link to switch between log in and sign up. Nothing else. See DESIGN.md.

index.html (home)
- Purpose: in ten seconds, show a confident, precise designer who understands the business.
- Content: menu; "Henri Maman" with the word "Portfolio" directly beneath it; a toolbar that filters the projects by type (All, Studio Work, Professional Work, Built Work) and shows a count; the project icons, stacked in a single column, each linking to its project page and each with the project's name and short description (shown only on hover or while the project is open; on phones, only while it is open); links to Contact and About. See DESIGN.md, "Home page".
- Clicking a project on the home page expands it in place (it does not leave the page):
  - The project grows to the full width of the grid with a smooth fade and scale, and pushes the projects below it down.
  - Inside, the project's images sit side by side in one continuous strip that scrolls sideways seamlessly. It does not stop on each image and there are no separate pages. Swipe on phones; drag, or the left and right arrow keys, on desktop. There are no buttons inside an open project.
  - Under each drawing or render: its title on the left, and on the opposite side a text box with Henri's description of that image [ADD: a description for each drawing and render, from Henri].
  - Photos of physical models have a title only, with no description text box. In R+EC these are: site model, site model 2, section model 1, 2 and 3.
  - Every image in a project's strip can be enlarged: clicking it opens a larger view over the whole screen, and moving the mouse over it shows different parts of the drawing in more detail (see DESIGN.md, "Home page"). Placeholders and click-through images are the exceptions.
  - A project's icon moves, and its name and description show, only when the icon image itself is hovered or clicked, not the space beside it (see DESIGN.md, "Home page").
  - Where drawings are stacked in pairs, the titles and descriptions of the upper drawings line up with each other from pair to pair, and so do those of the lower drawings (see DESIGN.md, "Home page").
  - A click-through image stops at its ends: from the last image the only way is back, and from the first the only way is forward. The pointer is a small chevron (two diagonal strokes, no line) showing the direction a click will go (see DESIGN.md, "Home page").
  - Every click-through image (an image that changes to another in the same place when clicked) has a small text box above it that says "Click Me" (see DESIGN.md, "Home page").
  - A thin bar under the header of every page (below "Henri Maman", About, Contact and Log out) shows how far down the page the visitor has scrolled (see DESIGN.md, "Movement").
  - Every word of every title starts with a capital letter (project names and image titles alike).
  - Only one project is open at a time. Clicking a different project closes the open one back to its original size and opens the new one the same way. Clicking the open project again, or the Escape key, closes it. Clicking any white space above or under the open project also closes it.
  - It works the same for all six projects. A project with no images yet shows grey [ADD: image of ...] boxes in the viewer, except Building Ecologies, which has no viewer at all for now: no images and no captions open beneath it.
  - Built Work uses the same strip as every other project. Its images, in order: (1) the pergola cover image, bw-pergola-cover-image-01; (2) one click-through image holding three process photos, bw-pergola-process-02, 03 and 04: clicking it changes to the next photo in the same place (right side for the next, left side for the one before), and the title and description change with it; (3) a second click-through image, the same way, holding process photos bw-pergola-process-05, 06 and 07; (4) the finished pergola, bw-pergola-finished-08.
  - Built Work titles and descriptions, in Henri's words: cover image: "Pergola", "Hand-built pergola above the valley"; photo 02: "Clearing Site", "Initial site clearing, and layout"; photo 03: "Pouring Concrete", "concrete footings poured by hand"; photo 04: "Concrete Setting", "Posts set and leveled"; photo 05: "Bracing Columns", "Posts set and leveled"; photo 06: "Beams", "Primary frame established"; photo 07: "Support Columns", "Additional support added"; photo 08: "Finish Product", "Ready for use". Then, after a wider gap, the garage door: bw-garage-door-finished-0.8, "Garage Door", "Hand-built timber garage doors".
  - Built Work's icon is the photo bw-pergola-icon-image-09 (images/icons/built.jpg). Henri's original photos are in images/bw; the site shows web-sized copies from images/bw/web.
  - Order on the home page: R+EC, Deering Estate, Ramp & Reel Fishing Market, Mercy University, Built Work, and Building Ecologies last.
  - Building Ecologies's icon is, for now, the "Under Construction" image images/rf/rf-01-under-construction.jpg [ADD: Building Ecologies's own icon and images].
  - The full project pages are reached from the Projects page. Without JavaScript, clicking a project on the home page goes straight to its project page.
  - Elevations and sections are scaled to fit the visible width, never cropped, and stacked in pairs: North Elevation above South Elevation, East Elevation above West Elevation, Long Section above Short Section (see DESIGN.md, "Home page"). If a project is missing one drawing of a pair, the one it has stays in place.
  - R+EC's cover drawing is its icon on the home page, in the box beside the project's name and description (images/icons/rec.jpg). It is not repeated in the strip of images.
  - In every project, photos of physical models come last in the strip, after all the drawings and renders. They keep their order among themselves, and every other image keeps its order.
  - R+EC images, in order: First Floor Plan (rec-16-floor-plan), Second Floor Plan (rec-19-seconf-floor-plan), Enlarged Gym Section (rec-17-enlarged-gym-section, which replaces the earlier enlarged section), Gym Wall Detail (rec-15-gym-wall-detail, which replaces the earlier long wall section), Building/Walkway Wall Detail (rec-18-building-wall-detail), then one click-through image holding Program Diagram (rec-20-program-diagram-jpg) and Active/Passive Diagram (rec-21-active-passive-diagram-jpg), lined up so the drawing and the bottom square of the key sit in the same place in both, then one click-through image holding the three mechanical plans, each titled Mechanical Plans (rec-22-mep1, rec-23-mep2, rec-24-mep3), then Mechanical RCP Gym (rec-25-mechanical-rcp-gym) on its own, then one click-through image holding the two water management drawings, both titled Water Management (rec-26-water-management, rec-27-water-management2), then the three pairs (north and south elevations, east and west elevations, long and short sections, titled "Longitudinal Section" and "Cross Section"), then the model photos: site model, site model 2, section model 1, 2 and 3. R+EC has all six drawings. No other project has elevations or sections yet.
  - R+EC titles and descriptions, in Henri's words: First Floor Plan: "Central skatepark linked by circulation spine"; Second Floor Plan: "Gym linked by covered walkway"; Enlarged Gym Section: "Double-height gym with clerestory light"; Gym Wall Detail: "Layered assembly"; Building/Walkway Wall Detail: "Covered spine opening into classrooms"; Mechanical Plans: "First Floor", "Second Floor", "Third Floor" (rec-22, 23, 24 in that order); Mechanical RCP Gym: "Supply, return, and lighting layout"; North Elevation: "Planters and palms line the street"; South Elevation: "Vertical aluminum fins shade the gym"; East Elevation: "Arrival through a planted courtyard"; West Elevation: "Quiet service side along alley"; Longitudinal Section: "Section revealing the indoor skatepark"; Cross Section: "Courtyard built around existing tree". Program Diagram, Active/Passive Diagram and the two Water Management drawings have a title only, with no description text box. The descriptions of Gym Wall Detail and Building/Walkway Wall Detail sit on the same line as their titles.
  - Ramp & Reel Fishing Market's icon on the home page is its vendor render, rr-09-vender-render (images/icons/ramp-reel.jpg). Its images, in order: (1) one click-through image holding the two existing site photos (rr-14, rr-15), both titled "Existing Site"; (2) Vendor Diagram (rr-01); (3) Building Diagram (rr-13); (4) one click-through image holding First Floor Plan, Second Floor Plan and Third Floor Plan (rr-06, 07, 08), lined up so the plans sit in exactly the same place; (5) East Elevation (rr-05); (6) Longitudinal Section (rr-03); (7) Cross Section (rr-04); (8) Section Perspective Collage (rr-10-p-section-collage); (9) Transect (rr-12); (10) the renders: Roof Render (rr-02), Vendor Render (rr-09), Exterior Render (rr-11). Its sections and elevation are squarer than long panels, so they are ordinary images, not stacked pairs. Titles are taken from Henri's file names. Vendor Diagram and Building Diagram are step diagrams (see DESIGN.md, "Home page"): Vendor Diagram has five parts and Building Diagram has four, and hovering a part fades the others to 50% and shows that part's title and description. At rest they read "Vendor Diagram" and "Building Diagram", a title only, with no description text box; a description appears only while a part is hovered. The two existing site photos also have a title only. Each part's description sits on the same line as its title. The parts, in Henri's words. Vendor Diagram: 1 (top left) "Massing", "Create a simple rectangular block"; 2 (middle left) "Linear Segments", "Divided into five linear segments"; 3 (bottom left) "Displacement", "Displaced to organize space and flow"; 4 (top right) "Circulation", "Connecting vertical circulation between layers"; 5 (bottom right) "Planters", "Integrating landscape elements to soften experience". Building Diagram: 1 (top left) "Massing", "Create a base form that adheres to the site"; 2 (top right) "Circulation", "Introduce continuous ramps and stairs for public flow"; 3 (bottom left) "Pull", "Raise volume edges to define height"; 4 (bottom right) "Program", "Introduce restaurant, vendor, and loading program". [ADD: a description for each image, from Henri]
  - Mercy University's icon on the home page is mercy-01-icon-image (images/icons/mercy.jpg). Its images, in order: (1) mercy-02-render, titled "Exterior Render", description "Material expression and human scale", with an impact note above the image at its top left: "Impact: Created SketchUp model, added materiality, worked on render". (2) mercy-03-big-demo-plan, titled "Ground Floor Demo Plan", description "Selective interior demolition for renovation", no impact note. (3) mercy-04-enlarged-demo-plan, titled "Enlarged Ground Floor Demo Plan", no description, with the impact note "Impact: Worked with Design Team to decide what needed demolition, traced the whole ground floor plan from existing X-Ref, added annotations, room names, created page layout"; this note is long, so it wraps within the image's width. (4) mercy-05-big-proposed-first-floor, "Proposed First Floor Plan", description "Reconfigured layout across all wings", and (5) mercy-06-enlarged-proposed-first-floor, "Enlarged Proposed First Floor Plan"; (6) mercy-07-big-second-floor-rcp, "Second Floor RCP", description "Ceiling grid and fixture layout", and (7) mercy-08-enlarged-second-floor-rcp, "Enlarged Second Floor RCP". These four follow the format of the two demo plans: the whole-floor drawing has a title and a description, the enlarged drawing has a title and an impact note above it. Their titles are taken from Henri's file names. The two descriptions are in Henri's words. [ADD: an impact note for images 5 and 7, from Henri] The titles, descriptions and impact notes of images 1 to 3 are in Henri's words.
- Home page descriptions, in Henri's words:
  - R+EC: "A youth recreation and learning center in North Miami Beach made up of a skate park and gym, an entrepreneurship building, and a public commercial building. A timber circulation spine links the three, while vertical fins and deep overhangs work with active cooling to cut energy use."
  - Building Ecologies: "A modular campus canopy that provides shade and collects rainwater without any excavation. Its aluminum frame and fabric roof drain into concrete base blocks that store the water for campus irrigation."
  - Ramp & Reel Fishing Market: "Ramp & Reel is a fish market on the Miami River that turns an industrial edge into an active public waterfront. Continuous ramps make the entire building accessible and guide visitors through the market toward the river."
  - Mercy University: "As a Project Design Intern at Clarke Caton Hintz, I produced demolition plans, proposed floor plans, and reflected ceiling plans for Mercy University. I also built the project's SketchUp model and helped render it in Lumion."
  - Deering Estate: "A small academic complex at the Deering Estate that treats thresholds as architecture, linking classrooms, a lab, a lecture hall, and a gallery through breezeways and shaded patios. Louvers, deep overhangs, and exposed timber control light and airflow while keeping the buildings open to the landscape." No info line beneath it on the home page.
  - Built Work: "Some ideas are best tested with your own hands. These projects, a reclaimed-timber pergola in southern France and a wood and steel garage door in Princeton, came from a simple drive to make things myself and to see a drawing become something solid, useful, and lasting."

projects.html
- Purpose: every project in one place.
- Not linked from anywhere: the Projects link was removed from the menu and from the home page footer. The page and the project pages behind it still exist and open by typing their address. [ADD: Henri to decide whether to keep, re-link or remove them]
- Content: projects grouped under three headings. Each entry shows its icon, title, context (course or firm), year, one line of description and one framed image. Every value comes from Henri.
  - Studio Work: R+EC, Deering Estate, Building Ecologies, Ramp & Reel Fishing Market.
  - Professional Work: Mercy University (Clarke Caton Hintz).
  - Built Work: Pergola and Garage Door, on one shared page.

Project pages

Studio Work
- project-rec.html: R+EC, ARC 306, Prof. Carie Penabad. [ADD: year, description, images, project facts]
- project-deering-estate.html: Deering Estate. Listed second, directly under R+EC, on the home page and the Projects page. Context line: "University of Miami, Cardona Studio. Partner: Myzel Hatchette. Miami, FL." Description: the same text as on the home page. [ADD: year, images, project facts]
- project-building-ecologies.html: Building Ecologies (first called Building Ecologies Canopy, then Rain Field), ARC 407, a modular shade and rainwater canopy on campus. [ADD: year, description, images, project facts]
- project-fishing-market.html: Ramp & Reel Fishing Market, ARC 204, Prof. Pablo Duenas, 2nd year studio. [ADD: calendar year, description, images, project facts]

Professional Work
- project-mercy-university.html: Mercy University, produced at Clarke Caton Hintz. Henri has permission to show it. Henri's role: Project Design Intern. Henri produced demolition plans, proposed plans and reflected ceiling plans (RCPs) in CAD.
  - Every image has a caption with three parts: the credit "Clarke Caton Hintz"; a brief summary of what the image is; and a line stating exactly what Henri did on that drawing. Henri writes all caption text [ADD: per-image summary and contribution text from Henri].
  - No caption may claim more than Henri supplies.
  - [ADD: year, images, project facts]

Built Work
- project-built-work.html: one page showing both built projects, each in its own section with its own heading, images and facts block.
  - Pergola, built by Henri, France. [ADD: year, description, images, materials, size, who it was built for or with]
  - Garage Door, built by Henri, Princeton, New Jersey. [ADD: year, description, images, materials, size]

Every project page follows the same structure:
- Title and icon.
- Context line: course, professor and year; firm and role; or place and year for built work.
- Lead image (full-bleed if strong enough).
- Short description in Henri's voice [ADD].
- Project facts block: program, site, size, role, team, duration (for built work: materials, size, time to build). Only the items Henri supplies are shown; empty items are left out, never guessed.
- Sequence of drawings and images.
- Link to the next project.
- Exception: project-built-work.html repeats the title, lead image, description and facts block once per built project, on one page, with one "next project" link at the bottom.

about.html
- Purpose: who Henri is, in brief.
- Content, from facts Henri has given:
  - Education: "4th Year Architecture Student, University of Miami, Class of 2028", with "Minor in Management" on the line below.
  - From: Princeton, New Jersey.
  - Software: Revit, AutoCAD, Rhino, Grasshopper, Illustrator, Photoshop, InDesign, SketchUp, Lumion.
  - Honors: President's Scholarship; President's Architecture Scholarship; Provost's Honor Roll.
  - Bio, first in the panel: "I'm a fourth-year Bachelor of Architecture student at the University of Miami, minoring in Management. I treat every project as both a design problem and a business problem: a building has to work for the people who use it and for the people who pay for it. I'm drawn to sustainable, community-scale design and am pursuing work at the intersection of architecture and real estate development."
  - Portrait: images/about/headshot.jpg, to the left of the text (above it on phone), shown in black and white. Alt text: "Henri Maman headshot".
  - Resume: a "Download Resume" link to images/about/henri-maman-resume.pdf. It downloads the file and opens it in a new tab.

contact.html
- Purpose: make it easy to reach Henri.
- Content: two entries only.
  - Email: hpm29@miami.edu, as a mailto link.
  - LinkedIn: https://www.linkedin.com/in/henrimaman/, opening in a new tab.
- No phone number, anywhere on the site.
- No contact form.

## The log-in gate
- Visitors can sign up with email and password, and log in, using Supabase Auth.
- The log-in page is login.html and is never gated.
- index.html is the home page.
- Every page except login.html sends signed-out visitors to login.html.
- After log-in, go to index.html and play the intro screen once (see DESIGN.md, "Intro screen"). The intro also plays every time "Henri Maman" in the header is clicked, from any page. It never plays on a refresh or any other page load.
- A visitor who is already signed in and opens login.html goes straight to index.html.
- Log out is on every gated page, in the menu. Logging out returns the visitor to login.html.
- All links are relative.
- Each gated page hides its content until the session check passes, so signed-out visitors never see a flash of the page.
- After sign-up, if Supabase email confirmation is on, show: "Check your email to confirm your account, then log in."
- In Supabase, the Site URL and redirect URLs are set to the live Vercel address [ADD: Vercel URL once it exists].
- Only the Supabase project URL and the public anon (publishable) key go in the site files. The service role key never appears in any file.
- Honest limit: this gate is checked in the browser. It keeps casual visitors out, but files on Vercel can still be reached by anyone who knows their exact address. Nothing private goes on the site.

## Content rule
Never invent facts, dimensions, dates or names that Henri has not given. Ask him instead. Anything missing is marked [ADD: ...].

## How it is built
- Plain HTML, CSS and JavaScript files only. No frameworks, no npm, no build step.
- Supabase is loaded from its CDN script tag.
- index.html sits at the top of the folder.
- Files: index.html, login.html, projects.html, about.html, contact.html, project-rec.html, project-deering-estate.html, project-building-ecologies.html, project-fishing-market.html, project-mercy-university.html, project-built-work.html, styles.css, auth.js (session check, redirects, log out), supabase-config.js (project URL and anon key only), motion.js (scroll and hover movement, phone menu), home.js (home page toolbar: filter), images folder with an icons folder inside it.
- Inter is loaded from Google Fonts.
- It must work on a phone.
- It is published from GitHub to Vercel.
- Every page has a title, a one-line description and a share image so the link looks good when texted: images/share.jpg [ADD: share image].

## Images
- Henri's files go in a folder called images. Project icons go in images/icons as SVG, one per project page (six in total, one shared icon for Built Work).
- Deering Estate: Henri's original files are in images/de. The site shows web-sized JPEG copies from images/de/web (longest side 2800px, each under 500 KB). Its icon on the home page is a web-sized copy of the section perspective render (now de-07-p-section.jpg), saved as images/icons/deering.jpg. The originals are not used by any page.
- Deering Estate images, in order: (1) Section Perspective (de-07-p-section, which is also the icon); (2) Existing Site Plan (de-09-existing-sp); (3) Floor Plan (de-15); (4) one click-through image holding Spaces Diagram (de-16), Program Diagram (de-18) and Circulation Diagram (de-17), in that order, lined up so the drawing sits in exactly the same place in all three; (5) South Elevation above East Elevation (de-02-gallery-elevation, titled "East Elevation"); (6) the two sections, de-03-long-section titled "Longitudinal Section" above de-04-long-section-2 titled "Cross Section"; (7) Passive Diagram; (8) Gallery Wall Section, Offices Wall Section, Lab Wall Section (de-12, 13, 14); (9) Transect; (10) the renders: Gallery Render (de-08), Exterior Render (de-10), Exterior Render 2 (de-11). Other titles are taken from Henri's file names.
- Deering Estate descriptions, in Henri's words: Section Perspective: "Exposed timber structure, deep overhangs, operable louvers"; Existing Site Plan: "Coastal grid, buildings, and shoreline"; Floor Plan: "Proposed buildings among existing estate"; South Elevation: "Existing estate meets new hall"; East Elevation: "Transparent facade among mature trees"; Longitudinal Section: "Courtyard framed by new buildings"; Cross Section: "Campus sequence along sloped site"; Passive Diagram: "Solar shading and prevailing breeze"; Gallery Wall Section: "Concrete frame, stone, and glass"; Offices Wall Section: "Structure, envelope, and cladding layers". The Spaces, Program and Circulation diagrams have a title only, with no description text box. [ADD: a description for Lab Wall Section, Transect and the three renders, from Henri]
- R+EC: Henri's original PNG files are in images/rec. The site shows web-sized JPEG copies from images/rec/web (longest side 2800px, each under 500 KB). The originals are not used by any page.
- Where there is no image yet, use a plain grey box labelled [ADD: image of ...].
- Every image has alt text describing what it shows.

## Out of scope
- Payments.
- Storing anything about visitors beyond their log-in.
- Any database tables.
- Contact forms, comments, analytics, pop-ups and cookie banners.

## Done when
- [ ] Works on a phone.
- [ ] The menu reaches About and Contact, and "Henri Maman" in the header returns to the home page from every page.
- [ ] Sign up works.
- [ ] Log in works and lands on index.html.
- [ ] Log out works from every page.
- [ ] Typing a page address (ending .html) while signed out sends me to login.html.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
