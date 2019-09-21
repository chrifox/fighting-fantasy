// This file contains story content for custom app

const title = 'Fighting Fantasy Adventure Builder'
const author = 'Mr Fox'

const story = [
  // Start page
  {
    id: 0,
    screenTitle: 'Welcome to the Fighting Fantasy Adventure',
  },
  {
    id: 1,
    screenTitle: 'You are travelling and there is a fork in the road, do you...',
    options: [
      { choice: 'Turn left', outcome: 2 },
      { choice: 'Turn right', outcome: 3 },
    ],
  },
  {
    id: 2,
    screenTitle: 'You turned left, and see a huge troll in front of you...',
    options: [
      { choice: 'Attack the troll', outcome: DEFEAT_OUTCOME },
      { choice: 'Run away', outcome: 1 },
    ],
  },
  {
    id: 3,
    screenTitle: 'You turned right, and see a chest in front of you...',
    options: [
      { choice: 'Open the chest', outcome: VICTORY_OUTCOME },
      { choice: 'Leave the chest alone', outcome: 1 },
    ],
  },
]

const defeatPage = {
  screenTitle: 'You have been defeated',
}

const victoryPage = {
  screenTitle: 'You are victorious!',
}
