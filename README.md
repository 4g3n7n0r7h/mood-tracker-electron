# Mood Tracker – Electron Desktop App

A simple mood and reflection tracker built as a personal project to learn and practice programming, UI design, and app packaging with Electron.

This is version **1.0.0**, and it's fully functional as a lightweight desktop app on macOS.

---

## ✨ Features

- Select your mood and write a daily reflection
- Entries are stored locally on your computer using `localStorage`
- Dark mode toggle ☀️🌙
- Delete entries
- Animated entry transitions
- Simple, clean UI
- Packaged as a native `.app` for macOS using Electron

---

## 📦 How to Run Locally

1. Clone or download this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app in development mode:

   ```bash
   npm start
   ```

4. (Optional) To build the macOS `.app` version:

   ```bash
   npm run package
   ```

> The built app will appear in the `MoodTracker-darwin-arm64/` folder

---

## 🛠 Tech Stack

- HTML, CSS, JavaScript
- Electron
- LocalStorage API

---

## Author

Created by Benjamin Scharning as part of a personal learning journey blending technology and self-reflection.

---

## Icon Attribution

[Bipolar disorder icon](https://www.flaticon.com/free-icons/bipolar-disorder) by [Elzicon](https://www.flaticon.com/authors/elzicon)  
from [Flaticon](https://www.flaticon.com/)  
Used under the "Free for personal and commercial use with attribution" license.

---

## Version

**v1.0.0** – First full version, feature complete, tested on macOS (M1 chip)

---

## Roadmap

- [ ] Save entries to file instead of just localStorage
- [ ] Add filtering/search
- [ ] Add calendar view
- [ ] Consider mobile version via Capacitor
