// This file contains story content for custom app

const author = 'Mr Fox'

const story = [
  // Start page
  {
    subtitle: 'Get started!',
  },
  // Page 1
  {
    // title: '',
    subtitle: 'There is a fork in the road, do you...',
    options: [
      { choice: 'Turn left?', outcome: 0 },
      { choice: 'Turn right?', outcome: 1 },
    ],
  },
]

const defeatPage = {
  subtitle: 'You have been defeated',
}

const victoryPage = {
  subtitle: 'You are victorious!',
}
