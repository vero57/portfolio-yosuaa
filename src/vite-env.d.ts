/// <reference types="vite/client" />
// Mengizinkan TypeScript membaca modul file CSS/SASS
declare module "*.css";
declare module "*.scss";

// Mengizinkan TypeScript membaca modul gambar (opsional, mencegah error gambar)
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";