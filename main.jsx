import React from "react";
import ReactDOM from "react-dom/client";
import BeatThat from "./BeatThat.jsx";

// ── Storage shim ─────────────────────────────────────────────────────────────
// Inside Claude's environment the game uses a built-in `window.storage`. Out here
// on a normal website that doesn't exist, so we provide a drop-in replacement
// backed by the browser's localStorage. The game's get/set calls work unchanged.
// Note: this stores data per-device/per-browser, not per-account.
if (typeof window !== "undefined" && !window.storage) {
  window.storage = {
    async get(key) {
      try {
        const value = window.localStorage.getItem(key);
        return value === null ? null : { key, value };
      } catch {
        return null;
      }
    },
    async set(key, value) {
      try {
        window.localStorage.setItem(key, value);
        return { key, value };
      } catch {
        return null;
      }
    },
    async delete(key) {
      try {
        window.localStorage.removeItem(key);
        return { key, deleted: true };
      } catch {
        return null;
      }
    },
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BeatThat />
  </React.StrictMode>
);
