# Trevor Sakwa — Portfolio Site

A static site with a toggle between two profiles — **Mechanical** and **Finance** — sharing one
page, one codebase, and one hosting setup.

## Folder structure

```
portfolio-site/
├── index.html              ← page structure (rarely needs editing)
├── css/style.css           ← all visual styling
├── js/
│   ├── content-data.js     ← bios, skills lists (per profile)
│   ├── projects-data.js    ← project list — EDIT THIS to add/update projects
│   └── script.js           ← toggle + rendering logic (rarely needs editing)
└── assets/
    ├── resume/             ← the two CV PDFs, already in place
    └── projects/           ← put per-project images/small files here
```

**Day to day, you'll only ever touch `js/projects-data.js`, and occasionally `js/content-data.js`
for bio/skills wording.**

## Adding a new project

1. Open `js/projects-data.js`.
2. Copy one of the existing `{ ... }` entries and paste it into the array.
3. Edit the fields:
   - `mode`: `"mech"` or `"fin"`
   - `title`, `tag`, `summary`, `tools`
   - `thumb`: path to a small preview image (optional — see below)
   - `links`: `report`, `files`, `repo`, `viewer` — set only the ones you have. Each is just a URL.
4. Save the file. Refresh the page — no build step needed.

### Where do the actual files go?

- **Small files** (thumbnails, short PDFs, code) → put them in `assets/projects/<project-name>/`
  in this repo, then point `thumb`/`links` at that path.
- **Large files** (CAD models, Fluent/ANSYS cases, big Excel workbooks) → **don't** put these in
  the repo. GitHub has practical limits (individual files ~100MB, repos best kept under ~1GB), and
  a bloated repo makes the site slower to deploy over time. Instead:
  1. Upload the file to Google Drive (or Dropbox).
  2. Set sharing to "anyone with the link."
  3. Paste that link into the project's `links.files` field.

This keeps the live site itself small and fast forever, no matter how many heavy project files you
accumulate — the repo only ever holds the lightweight presentation layer.

### Adding photos or a demo video to a project

Each project can show a small gallery on its card — project photos, or a video of a working
prototype. In `js/projects-data.js`, add a `media` array to the project:

```js
media: [
  { type: "video", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
  { type: "image", src: "assets/projects/sure-formula-student/car-1.jpg" },
  { type: "image", src: "assets/projects/sure-formula-student/car-2.jpg" }
]
```

If there's more than one item, small arrows appear on the card so a recruiter can click through
photos and the demo video without leaving the page. Leave `media` out (or empty) and the card
just shows a plain placeholder, as it does now for every sample project.

- **Photos**: drop the image files into `assets/projects/<project-name>/` and reference that path.
- **Prototype demo videos**: don't put the video file itself in this repo — upload it to YouTube
  (set to "Unlisted" if you don't want it publicly searchable) and use the video's URL as `src`.
  The site detects a YouTube link automatically and embeds it. Only use a direct video file path
  (`.mp4`) for very short clips; otherwise it will bloat the repo the same way large CAD files would.

### Adding a 3D CAD viewer for a project

The cleanest free option: upload the model to [Sketchfab](https://sketchfab.com) (supports STEP,
STL, OBJ and most CAD exports), then paste the resulting page link into `links.viewer`. No custom
viewer code needed. If you'd rather have it embedded directly in the page (not just linked out),
say so and I'll add a `<model-viewer>`/three.js embed — it's a bigger addition, worth doing once
you have a couple of real models ready.

## Editing bios / skills

Open `js/content-data.js`. Each profile (`mech`, `fin`) has a `bio` string and a `skills` array of
`{ group, items }`. Edit the text directly — no HTML knowledge needed.

## Previewing locally before publishing

Open `index.html` directly in a browser — no server required, everything is static. If you want it
served properly (recommended once you add a viewer or fetch requests), from this folder run:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Linking directly to one project (for your CV)

Every project card has a stable link. Format:

```
https://<your-domain-or-github-pages-url>/?mode=<mech|fin>#<project-slug>
```

- `mode` picks which profile loads (`mech` or `fin`)
- the part after `#` is the project's title, lowercased, with spaces/punctuation turned into
  hyphens — e.g. "SURE Formula Student Vehicle" becomes `sure-formula-student-vehicle`

Example, once deployed:
```
https://trevorsakwa.github.io/portfolio-site/?mode=mech#sure-formula-student-vehicle
```

Opening that link auto-selects the mechanical profile, scrolls straight to that project card, and
briefly highlights it. Put a different one of these next to each project line on your CV instead
of one generic homepage link.

If you rename a project's `title` later, its slug (and any links you've already put on a CV)
will change too — for a project you've already linked from a CV, prefer editing its description in
place rather than renaming the title.

## Publishing to GitHub Pages

1. Create a new GitHub repo (e.g. `trevor-sakwa-portfolio`).
2. Push this folder's contents to the repo's `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch `main`, folder `/root`.
5. Save. Your site goes live at `https://<your-username>.github.io/trevor-sakwa-portfolio/`
   within a minute or two.
6. Any future edit: commit and push (or edit the file directly on github.com and commit) — the
   site rebuilds automatically.

## Adding your custom domain

1. Buy a domain (Namecheap, Google Domains, etc.) — e.g. `trevorsakwa.com`.
2. In the repo, add a file named `CNAME` (no extension) at the root containing just:
   ```
   trevorsakwa.com
   ```
3. At your domain registrar, add these DNS records (for an apex domain like `trevorsakwa.com`):
   - Four `A` records pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - If you'd rather use `www.trevorsakwa.com`, add a `CNAME` record pointing to
     `<your-username>.github.io` instead.
4. Back in **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS** once it's
   available (can take a few hours for the certificate to issue).

That's the whole loop: edit a file → push → live, on your own domain, for free.
