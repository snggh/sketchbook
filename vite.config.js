import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig(({ mode }) => {
  const projectName = process.env.PROJECT || 'apple-airpods-demo'
  const projectPath = path.resolve(__dirname, 'src', projectName)

  if (!fs.existsSync(projectPath)) {
    console.error(`Project "${projectName}" does not exist in the src directory.`)
    process.exit(1)
  }

  return {
    root: projectPath,
    plugins: [react()],
    server: {
      port: 1987,
      host: true
    }
  }
})