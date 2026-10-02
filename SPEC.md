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
- Content: menu; "Henri Maman" with the word "Portfolio" directly beneath it; a toolbar that filters the projects by type (All, Studio Work, Professional Work, Built Work) and shows a count; the project icons, stacked in a single column, each linking to its project page and each with the project's name and short description (shown on hover with a mouse, always shown on phones); one full-bleed lead image [ADD: image of Henri's strongest project]; links to Projects and About. See DESIGN.md, "Home page".
- Clicking a project on the home page expands it in place (it does not leave the page):
  - The project grows to the full width of the grid with a smooth fade and scale, and pushes the projects below it down.
  - Inside, the project's images sit side by side in one continuous strip that scrolls sideways seamlessly. It does not stop on each image and there are no separate pages. Swipe on phones; drag, or the left and right arrow keys, on desktop. There are no buttons inside an open project.
  - Under each image: its title on the left, and on the opposite side a text box with Henri's description of that image [ADD: a description for each image, from Henri].
  - Only one project is open at a time. Clicking a different project closes the open one back to its original size and opens the new one the same way. Clicking the open project again, or the Escape key, closes it.
  - It works the same for all five projects. A project with no images yet shows grey [ADD: image of ...] boxes in the viewer.
  - The full project pages are reached from the Projects page. Without JavaScript, clicking a project on the home page goes straight to its project page.
  - Elevations and sections are scaled to fit the visible width, never cropped, and stacked in pairs: North Elevation above South Elevation, East Elevation above West Elevation, Long Section above Short Section (see DESIGN.md, "Home page"). If a project is missing one drawing of a pair, the one it has stays in place.
  - R+EC images, in order: cover image, enlarged section, long wall section, model, section model 1, 2 and 3, then the three pairs: north and south elevations, east and west elevations, long and short sections. R+EC has all six drawings. No other project has elevations or sections yet. Titles are taken from Henri's file names [ADD: titles in Henri's words, if he wants different ones].
  - Mercy University keeps its three-part caption: the credit "Clarke Caton Hintz" and the summary of the image on the left, Henri's contribution on the opposite side.
- Home page descriptions, in Henri's words:
  - R+EC: "A youth recreation and learning center in North Miami Beach made up of a skate park and gym, an entrepreneurship building, and a public commercial building. A timber circulation spine links the three, while vertical fins and deep overhangs work with active cooling to cut energy use."
  - Rain Field: "A modular campus canopy that provides shade and collects rainwater without any excavation. Its aluminum frame and fabric roof drain into concrete base blocks that store the water for campus irrigation."
  - Ramp & Reel Fishing Market: "Ramp & Reel is a fish market on the Miami River that turns an industrial edge into an active public waterfront. Continuous ramps make the entire building accessible and guide visitors through the market toward the river."
  - Mercy University: "As a Project Design Intern at Clarke Caton Hintz, I produced demolition plans, proposed floor plans, and reflected ceiling plans for Mercy University. I also built the project's SketchUp model and helped render it in Lumion."
  - Built Work: [ADD: short description]. Until then it shows its name only.

projects.html
- Purpose: every project in one place.
- Content: projects grouped under three headings. Each entry shows its icon, title, context (course or firm), year, one line of description and one framed image. Every value comes from Henri.
  - Studio Work: R+EC, Rain Field, Ramp & Reel Fishing Market.
  - Professional Work: Mercy University (Clarke Caton Hintz).
  - Built Work: Pergola and Garage Door, on one shared page.

Project pages

Studio Work
- project-rec.html: R+EC, ARC 306, Prof. Carie Penabad. [ADD: year, description, images, project facts]
- project-building-ecologies.html: Rain Field (formerly called Building Ecologies Canopy; the file name is unchanged), ARC 407, a modular shade and rainwater canopy on campus. [ADD: year, description, images, project facts]
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
- After log-in, go to index.html and play the intro screen once (see DESIGN.md, "Intro screen"). The intro plays only right after log-in, never on a refresh or any other page load.
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
- Files: index.html, login.html, projects.html, about.html, contact.html, project-rec.html, project-building-ecologies.html, project-fishing-market.html, project-mercy-university.html, project-built-work.html, styles.css, auth.js (session check, redirects, log out), supabase-config.js (project URL and anon key only), motion.js (scroll and hover movement, phone menu), home.js (home page toolbar: filter), images folder with an icons folder inside it.
- Inter is loaded from Google Fonts.
- It must work on a phone.
- It is published from GitHub to Vercel.
- Every page has a title, a one-line description and a share image so the link looks good when texted: images/share.jpg [ADD: share image].

## Images
- Henri's files go in a folder called images. Project icons go in images/icons as SVG, one per project page (five in total, one shared icon for Built Work).
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
- [ ] The menu reaches every page.
- [ ] Sign up works.
- [ ] Log in works and lands on index.html.
- [ ] Log out works from every page.
- [ ] Typing a page address (ending .html) while signed out sends me to login.html.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
