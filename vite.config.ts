
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     modules: {
//       // Местоположение CSS классов в формате camelCase
//       localsConvention: 'camelCaseOnly',  // Можно использовать 'dashes' для дефисного стиля
//     },
//   },
// })import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
//   css: {
//     modules: {
//       localsConvention: 'camelCaseOnly',
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env': process.env, // Делаем доступными переменные окружения
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});


