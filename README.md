# Calender

WUB Calender – Electron Desktop Widget

A small Electron-based desktop widget that displays the current day and month with a pixel-art aesthetic.
The app runs as a frameless, transparent window and stays lightweight and minimal.

This project was created by following and learning from a tutorial by **Nashellery**.

✨ Features

Frameless & transparent Electron window

Displays current date (day & month)

Pixel-style UI using Google Fonts (Pixelify Sans)

Non-resizable, minimal desktop widget

Windows packaging support

🛠 Tech Stack

Electron

HTML

CSS

JavaScript

Node.js

📁 Project Structure
├── assets/              # Background and UI images
├── index.html           # Main UI layout
├── styles.css           # Styling and layout
├── script.js            # Date logic (day & month)
├── main.js              # Electron main process
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation

🚀 Getting Started
1️⃣ Install Dependencies

Make sure you have Node.js installed.

npm install

2️⃣ Run the App
npm start


This will launch the Electron desktop widget.

📦 Build for Windows

To package the app for Windows:

npm run package


The packaged app will be created inside the dist/ folder.

🎨 UI Details

Custom background images are used via CSS

The app window is draggable due to:

-webkit-app-region: drag;


Buttons and inputs are excluded from dragging to allow interaction

📚 Tutorial Credit

This project was built by following a tutorial created by Nashellery on YouTube:

🔗 Tutorial Link:
**https://youtu.be/btxGSJ3Dh8E**

All credit for the original concept and learning material goes to the creator.

📝 Notes

This project is intended for learning and practice purposes

You can extend it by adding:

Time display

Alarm functionality

System tray support

Startup on boot
