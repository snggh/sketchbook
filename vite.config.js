import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import projectsListPlugin from './vite-plugin-projects-list'

export default defineConfig(({ mode }) => {
  const srcPath = path.resolve(__dirname, 'src')
  const projects = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())

  return {
    plugins: [react(), projectsListPlugin()],
    server: {
      port: 1987,
      host: true
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          ...Object.fromEntries(projects.map(project => [project, path.resolve(srcPath, project, 'index.html')]))
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})