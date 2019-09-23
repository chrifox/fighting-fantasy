// This file contains story content for custom app

const title = 'Harry Potter Adventure'
const author = 'Mr Fox'

const story = [
  // Start page
  {
    id: 0,
    text: `Welcome to the ${title}`,
  },
  {
    id: 1,
    text: 'You are travelling and there is a fork in the road, do you...',
    options: [
      { choice: 'Turn left', outcome: 2 },
      { choice: 'Turn right', outcome: 3 },
    ],
  },
  {
    id: 2,
    text: 'You turned left, and see a huge troll in front of you...',
    options: [
      { choice: 'Attack the troll', outcome: DEFEAT_OUTCOME },
      { choice: 'Run away', outcome: 1 },
    ],
  },
  {
    id: 3,
    text: 'You turned right, and see a chest in front of you...',
    options: [
      { choice: 'Open the chest', outcome: VICTORY_OUTCOME },
      { choice: 'Leave the chest alone', outcome: 1 },
    ],
  },
]

const defeatPage = {
  id: VICTORY_OUTCOME,
  text: 'You have been defeated...',
}

const victoryPage = {
  id: DEFEAT_OUTCOME,
  text: 'You are victorious!',
}
