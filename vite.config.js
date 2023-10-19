import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import packageJSON from './package.json';

const src = resolve(__dirname, 'src');

export default defineConfig({
  build: {
    lib: {
      entry: {
        // Comment out next line to fix the UMD build
        ExampleComponent: resolve(src, 'packages/ExampleComponent'),
        'vite-umd-issue': resolve(src, 'index.ts'),
      },
      name: 'ExampleComponents',
    },
    outDir: 'lib',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: Object.keys(packageJSON.peerDependencies),
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [dts()],
});
