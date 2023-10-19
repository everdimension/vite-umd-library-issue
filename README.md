# Vite UMD build issue

```
npm install
npm start
```

Open browser

## Issue

Vite outputs a correct UMD build if there is only one entry in [vite.config.js](./vite.config.js), but builds a commonjs-only output if there are multiple entries.
