import fs from 'fs'
import path from 'path'

export default function projectsListPlugin() {
  return {
    name: 'projects-list',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/projects.json') {
          const srcPath = path.resolve('src')
          const projects = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(projects))
        } else {
          next()
        }
      })
    }
  }
}