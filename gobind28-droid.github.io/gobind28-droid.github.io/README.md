# Gobind Singh — Mechatronics Portfolio

Live site: **https://gobind28-droid.github.io**

The whole site is built from one file: `data/content.js`. To change text, add a project or add photos, you only edit that file and upload images. You never need to touch `app.js`, `style.css` or `index.html`.

---

## 1. First-time setup (once)

1. Sign in to GitHub as **gobind28-droid**.
2. Click **+** (top right) → **New repository**.
3. Name it exactly **`gobind28-droid.github.io`**. Set it to **Public**. Click **Create repository**.
4. On the empty repo page, click **uploading an existing file**.
5. Unzip the portfolio folder on your computer. Open it, select **everything inside it** (not the folder itself) and drag it into the browser. Folders upload with their contents.
6. Click **Commit changes**.
7. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**. Save.
8. Wait 1–2 minutes, then open **https://gobind28-droid.github.io**.

> The `.nojekyll` file is hidden on most computers. If it doesn't upload, it doesn't matter.

---

## 2. Adding photos to a project

1. Name the photos `1.jpg`, `2.jpg`, `3.jpg`, … (the first one becomes the project's cover).
2. On GitHub, open `assets/images/`, click **Add file → Upload files**. To create a new folder, type the folder name followed by `/` in the file-name box, for example `hexapod/`, or simply drag a folder named `hexapod` from your computer.
3. Open `data/content.js` → click the ✏️ pencil → find the project → add lines to its `media` list:

```js
media: [
  { type: "image", src: "assets/images/hexapod/1.jpg", caption: "Leg assembly in SolidWorks" },
  { type: "image", src: "assets/images/hexapod/2.jpg", caption: "First printed leg" }
]
```

4. Click **Commit changes**. The site updates in about a minute.

**Tips:** keep photos under 1–2 MB (1600 px wide is plenty). Landscape photos look best.

## 3. Adding a video

- **Short clips under 25 MB:** upload the `.mp4` to `assets/videos/` and add
  `{ type: "video", src: "assets/videos/orient-balance.mp4", caption: "Ball recovering from a push" }`
- **Longer videos:** upload to YouTube (Unlisted is fine). From a link like `https://www.youtube.com/watch?v=AbC123xYz`, copy the part after `v=` and add
  `{ type: "youtube", id: "AbC123xYz", caption: "Rev C balance test" }`

## 4. Adding a rotatable 3D model

1. Export the model as **.glb** (SolidWorks/Creo → STL or STEP → convert to GLB in Blender, or with an online STEP-to-GLB converter). Keep it under 25 MB; simplify the mesh if needed.
2. Upload to `assets/models/`.
3. Add to the project's media: `{ type: "model", src: "assets/models/orient.glb", caption: "Rev C assembly" }`

## 5. The CAD library

The **CAD library** menu item appears by itself once the `cad: [ ]` list in `content.js` has an entry:

```js
cad: [
  { title: "Brake pedal, 7:1", software: "SolidWorks", image: "assets/cad/brake-pedal.png", model: "assets/models/brake-pedal.glb" },
  { title: "Orient Rev C joint", software: "SolidWorks", image: "assets/cad/orient-joint.png" }
],
```

`model` and `files` (a link to the source files) are optional. A screenshot alone is fine.

**Source files:** keep the actual `.SLDPRT` / `.SLDASM` / `.prt` / `.STEP` files in a separate repository (for example `cad-library`) so this site stays fast, and link to them with `files: "https://github.com/gobind28-droid/cad-library/tree/main/brake-pedal"`.

## 6. Adding a new project

Copy an existing project block in `content.js` (from `{` to `},`), paste it below, and change the `id` (lowercase, no spaces), `dwg` number, title and text. `category` must match one of the names in `categories`.

## 7. Profile photo and résumé

- Upload a square headshot to `assets/images/profile/` and set `avatar: "assets/images/profile/gobind.jpg"`.
- Upload a PDF résumé to `assets/` and set `resume: "assets/Gobind-Singh-Resume.pdf"`. A Résumé button appears automatically.

## If the site goes blank after an edit

A comma or quote is missing in `content.js`. Open the file's **History** on GitHub to see what changed, or compare with the examples above. Every list item ends with a comma, and all text is inside `"double quotes"`. Use `\"` for a quote mark inside text, or use ’ instead of '.
