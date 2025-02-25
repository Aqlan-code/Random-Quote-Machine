import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Random-Quote-Machine/', // Ensure this matches your repo name
});
