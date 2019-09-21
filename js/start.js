// This script just starts the story

updateHtml('title', title)
updateHtml('author', `Adventure by ${author} &copy;`)

// Creating start page
createPage(story.find(page => page.id === 0))
