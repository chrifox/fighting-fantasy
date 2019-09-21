// This file contains story content for custom app

let story = [
  // Start page
  {
    subtitle: 'Get started!',
  },
  // Page 1
  {
    subtitle: 'There is a fork in the road, do you...',
    options: [
      { choice: 'Turn left?', outcome: 0 },
      { choice: 'Turn right?', outcome: 1 },
    ]
  },
]

const defeatPage = {
  subtitle: 'You have been defeated',
}

const victoryPage = {
  subtitle: 'You are victorious!',
}
