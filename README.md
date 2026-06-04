# OCI Website

This project is a React.js website app built with Create React App.

## Requirements

Before running the project, make sure these tools are installed:

- Node.js 16 or newer
- npm, which is included with Node.js
- Git, if you want to clone the repository from GitHub

Check your installed versions:

```bash
node -v
npm -v
git --version
```

## 1. Clone the Repository

If you have not downloaded the project yet, clone it from GitHub:

```bash
git clone <your-github-repository-url>
```

Then open the project folder:

```bash
cd my-react-oci
```

If the project is already on your computer, just open the existing folder:

```bash
cd my-react-oci
```

## 2. Install Dependencies

Install all required packages from `package.json`:

```bash
npm install
```

This will create a `node_modules` folder and install React, React Scripts, Bootstrap, and the other libraries used by the website.

## 3. Run the Website Locally

Start the React development server:

```bash
npm start
```

After the server starts, open this URL in your browser:

```text
http://localhost:3000
```

The app will reload automatically when you edit files in the `src` folder.

## 4. Build for Production

Create an optimized production build:

```bash
npm run build
```

The production files will be generated in the `build` folder. These files can be deployed to a hosting service such as GitHub Pages, Netlify, Vercel, OCI, or another web server.

## 5. Run Tests

Run the test watcher:

```bash
npm test
```

## Available Scripts

These scripts are defined in `package.json`:

| Command | Description |
| --- | --- |
| `npm start` | Runs the website in development mode. |
| `npm run build` | Builds the website for production. |
| `npm test` | Runs tests in watch mode. |
| `npm run compile-sass` | Compiles the main SCSS file into CSS. |
| `npm run minify-sass` | Compiles and minifies the main SCSS file. |

## Troubleshooting

If dependencies fail to install, try deleting `node_modules` and `package-lock.json`, then install again:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

If port `3000` is already in use, React will ask whether you want to run the app on another port. Type `Y` and press Enter.

