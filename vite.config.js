# Beat That

An all-time sports roster-drafting game. Draft a lineup across the eras and chase a perfect season.

---

## How to put this online (for testers) — full walkthrough

You do **not** need to know how to code. Do the one-time setup on a **desktop or laptop** (it's painful on a phone). Budget ~20–30 minutes the first time.

### Step 1 — Make a GitHub account
Go to **github.com** and sign up (free). This is where your code lives.

### Step 2 — Make a Vercel account
Go to **vercel.com**, click **Sign Up**, and choose **Continue with GitHub**. This links the two so Vercel can read your code. Free.

### Step 3 — Put this project on GitHub
1. On **github.com**, click the **+** (top right) → **New repository**.
2. Name it `beat-that`. Leave everything else default. Click **Create repository**.
3. On the new repo page, click the link **"uploading an existing file"** (in the "Quick setup" box).
4. Drag **all the files and folders from this project** into the browser window:
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `vercel.json`
   - `.gitignore`
   - the `src` folder (contains `main.jsx` and `BeatThat.jsx`)
   - the `public` folder
   - this `README.md`
   - **Do NOT upload `node_modules` or `dist` if you see them** — they're not needed.
5. Scroll down, click **Commit changes**.

### Step 4 — Deploy on Vercel
1. In **vercel.com**, click **Add New → Project**.
2. Find your `beat-that` repo in the list and click **Import**.
3. Vercel auto-detects everything (it's a Vite project). Just click **Deploy**.
4. Wait ~1 minute. You'll get a live URL like `beat-that-xyz.vercel.app`.

**That URL is what you text your testers.** Done.

### Step 5 — Updating the game later
When you get an improved `BeatThat.jsx`:
1. Go to your repo on github.com → open the `src` folder → click `BeatThat.jsx`.
2. Click the **pencil (Edit)** icon → delete all → paste the new file → **Commit changes**.
3. Vercel rebuilds the live site automatically within ~1 minute. Nothing else to do.

---

## Notes
- **Saved data** (streaks, stats, team names) is stored per-device in the browser. Each tester's stats live on their own phone.
- **Share & haptics** work best on phones; on desktop, sharing falls back to copying text.
- **Player data** is from memory and should be verified against Basketball-Reference etc. before any public (non-tester) launch.

## Running locally (optional, for developers)
```
npm install
npm run dev
```
Then open the URL it prints (usually http://localhost:5173).
