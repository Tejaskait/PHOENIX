import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        nmregular:['Regular'],
        fgsemibold:['Semibold']
      }
    },
  }, 
  plugins: [react()],
})
