import { join } from "path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import configArcoStyleImportPlugin from './plugin/arcoStyleImport';
import viteIkarosTools from "./plugin/vite-ikaros-tools";
import { getConfig } from "./utils";

function resolve(dir: string) {
  return join(__dirname, "..", dir);
}
const config = getConfig();

const root = resolve("src/renderer");

export default defineConfig({
  mode: config && config.NODE_ENV,
  root,
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    configArcoStyleImportPlugin(),
    viteIkarosTools()
  ],
  resolve: {
    alias: [
      {
        find: '@renderer',
        replacement: root
      },
      {
        find: '@store',
        replacement:join(root, "/store/modules"),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  build: {
    outDir:
      config && config.target
        ? resolve("dist/web")
        : resolve("dist/electron/renderer"),
    emptyOutDir: true,
    target: "esnext",
    cssCodeSplit: false,
  },
  define: {
    __CONFIG__: config,
    __ISWEB__: Number(config && config.target),
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/renderer/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
