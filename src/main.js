const projectSelector = document.getElementById('project-selector')
const projectFrame = document.getElementById('project-frame')

// Fetch the list of projects
fetch('/projects.json')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      const option = document.createElement('option')
      option.value = project
      option.textContent = project
      projectSelector.appendChild(option)
    })
  })

// Handle project selection
projectSelector.addEventListener('change', (event) => {
  const selectedProject = event.target.value
  if (selectedProject) {
    projectFrame.src = `/src/${selectedProject}/index.html`
    projectFrame.style.display = 'block'
  } else {
    projectFrame.src = ''
    projectFrame.style.display = 'none'
  }
})