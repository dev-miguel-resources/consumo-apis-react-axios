import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  build: {
    // Ajuste la configuración de compilación para compilar solo los archivos cambiados para acelerar el proceso de compilación.
    incremental: true,
    // Habilite la aceleración de compilación de JavaScript con Babel para mejorar el rendimiento.
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    // Habilite la aceleración de compilación de TypeScript con TypeScript Compiler para mejorar el rendimiento.
    /*typescript: {
      tsconfig: './tsconfig.json',
    },*/
    // Habilite el almacenamiento en caché para reducir la cantidad de tiempo necesario para compilar y servir.
    cache: true,
    // Utilice la opción de compresión para minimizar el tamaño de los archivos compilados.
    minify: true,
    // Utilice la opción de código de desarrollador para reducir el tamaño del código compilado y mejorar el rendimiento.
    devCode: true,
    // Utilice la opción de desarrollo para activar un modo de depuración más rápido.
    debug: true,
     // Habilite el modo de producción para obtener la compilación más rápida y el menor tiempo de carga para el usuario.
    mode: "production",
    // Utilice la configuración de chunks para mejorar el rendimiento de la aplicación al dividir el código en partes más pequeñas.
    chunks: true,
    // Habilite el empaquetado de módulos para reducir el tamaño del código y mejorar el rendimiento.
    moduleBundling: true,
  },
});

