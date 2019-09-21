// This file contains base app logic

const VICTORY_OUTCOME = 42
const DEFEAT_OUTCOME = 66

// Initialise mutable variables
let prevChoice = null,
choice = null,
outcome = 1,
currentOptions = [],
pageNum = 0 // Track current page number

const updateHtml = (id, html) => document.getElementById(id).innerHTML = html
const chooseOption = i => {
  currentOptions.map((opt, index) => {
    document.getElementById(`option${index}`).style.background = index === i ? '#447' : 'transparent'
  })
  choice = i
  outcome = currentOptions[i].outcome
}
const optionBaseHtml = (option, i) => `
  <a key="${i}" id="option${i}" onclick="chooseOption(${i})" class="option">
    <p>
      ${option.choice}
    </p>
  </a>
`
const createOptionsList = options => options && options.length ? `
  <div class="options-list">
    ${options.map((opt, i) => optionBaseHtml(opt, i)).join('')}
  </div>
` : ''
const nextBtnHtml = label => `
  <button id="nextButton" onclick="pressNext()">${label}</button>
`

const createButtonsHtml = () => {
  let btnLabel = 'Next'
  if (pageNum < 1) btnLabel = 'Start the Adventure'
  if (outcome === VICTORY_OUTCOME || outcome === DEFEAT_OUTCOME) btnLabel = 'Play Again?'
  return nextBtnHtml(btnLabel)
}

// Create a new page
const createPage = ({ screenTitle, options }) => {
  // Store current options for outside access
  currentOptions = options
  const subtitle = screenTitle ? `<h2>${screenTitle}</h2>` : ''
  const optionsHtml = createOptionsList(options)
  const buttonsHtml = createButtonsHtml()
  const screenContent = `${subtitle}${optionsHtml}${buttonsHtml}`
  updateHtml('screen', screenContent)
}

const getFinalScreen = () => {
  switch(outcome) {
    case VICTORY_OUTCOME:
      return victoryPage
    case DEFEAT_OUTCOME:
    default:
      return defeatPage
  }
}

const pressNext = () => {
  if (outcome === VICTORY_OUTCOME || outcome === DEFEAT_OUTCOME) {
    createPage(getFinalScreen())
    // reset everything if user finishes the adventure
    pageNum = 0
    outcome = 1
    prevChoice = null
    currentOptions = []
  }
  else {
    prevChoice = choice
    pageNum++
    createPage(story.find(page => page.id === outcome))
  }
  choice = null    
}
