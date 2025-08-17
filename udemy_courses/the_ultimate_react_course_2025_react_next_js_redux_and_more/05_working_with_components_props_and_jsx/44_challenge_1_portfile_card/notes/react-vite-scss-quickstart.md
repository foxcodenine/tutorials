# React + Vite + SCSS Quick Start

## 1. Create a new Vite React project
```bash
npm create vite@latest challenge_1_portfile_card -- --template react
cd challenge_1_portfile_card
```

## 2. Install dependencies
```bash
npm install
npm install -D sass
```

## 3. Use SCSS in your project
- Rename your CSS files to `.scss` (e.g. `App.css` → `App.scss`)
- Update imports in your components:
  ```js
  import './App.scss'
  ```

## 4. Start the development server
```bash
npm run dev
```

## 5. (Optional) SCSS Modules for scoped styles
- Name files like `Component.module.scss`
- Import as:
  ```js
  import styles from './Component.module.scss'
  ```
  Then use: `<div className={styles.myClass}>...</div>`

That's it!
