# Birthday Surprise Website 🎂

A beautiful, interactive, and romantic birthday surprise website built with React, Vite, Tailwind CSS, and Framer Motion. 

This is a personal mini-experience filled with animations, floating hearts, memories, interactive statistics, and a quiz!

## 🚀 Live Demo

[View the Live Website](https://github.com/your-username/birthday-surprise) *(Replace with your actual GitHub Pages URL once deployed)*

## ✨ Features

- **Smooth Animations**: Powered by Framer Motion.
- **Responsive**: Looks perfect on mobile and desktop.
- **Customizable**: Edit all text, questions, and stats from a single file!
- **Music Support**: Optional background music.
- **Hidden Easter Egg**: Because every great website needs one.

## 🛠️ How to Customize

Everything is configurable in one file! Open `src/config/birthday.ts` and modify the fields.

### 1. Names and Texts
Change `herName`, `myName`, and all the section messages in `src/config/birthday.ts`.

### 2. Photos
The website uses 6 photos in the "Our Little Moments" section.
1. Place your images in the `public/images/` directory.
2. Name them `photo1.jpg`, `photo2.jpg`, etc., or update the paths in `config.gallery`.
3. Update their captions in `src/config/birthday.ts`.

### 3. Birthday Letter
Edit the `letter` field in `src/config/birthday.ts` to include your personal message.

### 4. Interactive Quiz
Modify the questions, options, correct answers, and funny reactions under the `quiz` section in the config file.

### 5. Background Music (Optional)
To add background music:
1. Put an mp3 file in `public/music/`
2. Name it `birthday.mp3`. 
*(If you don't add music, the site will still work perfectly without errors).*

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment

This project is pre-configured to deploy automatically to **GitHub Pages**.
Just push to the `main` branch, and the GitHub Action will build and deploy the site!

---
*Made with ❤️*
