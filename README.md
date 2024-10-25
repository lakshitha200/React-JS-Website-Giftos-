# React + TypeScript + Vite
![Screenshot (1)](https://github.com/user-attachments/assets/dec57d07-c40b-44dc-8a4d-23e9e5000370)
![Screenshot (2)](https://github.com/user-attachments/assets/6e385033-046b-4759-b137-3b961b5c4fea)
![Screenshot (3)](https://github.com/user-attachments/assets/ca51e6c1-d4ca-4120-be8a-6cdec3e9fb63)
![Screenshot (4)](https://github.com/user-attachments/assets/794ecbf5-5c6f-429c-b31e-7b15f42a1c20)

![Screenshot (5)](https://github.com/user-attachments/assets/c5f14dba-3cce-4035-b155-e1e661513d94)
![Screenshot (6)](https://github.com/user-attachments/assets/d125214b-e1c8-44a4-bb01-5d44d53e4d0b)

![Screenshot (7)](https://github.com/user-attachments/assets/2dd67276-816d-473a-b73b-c1c57dd49e40)
![Screenshot (8)](https://github.com/user-attachments/assets/9095420b-516a-4aba-a037-5d94910afc07)
![Screenshot (9)](https://github.com/user-attachments/assets/d603658e-be39-43dc-bfd5-fe748bf9eea2)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
