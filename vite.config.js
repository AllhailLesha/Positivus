import { defineConfig } from "vite";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import windiCSSPlugin from 'vite-plugin-windicss'; // Импортируем плагин для работы с Sass

export default defineConfig({
  base: 'positivus2.0',
  plugins: [
    vanillaExtractPlugin(), // Добавляем плагин для Vanilla JS
    windiCSSPlugin(), // Добавляем плагин для работы с Sass
  ],
})