import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true // Esto permite que escuche en todas las interfaces (0.0.0.0)
  }
})
