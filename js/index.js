// This file contains base app logic

const VICTORY_OUTCOME = 42000
const DEFEAT_OUTCOME = 66000

// Initialise mutable variables
let prevChoice = null,
choice = null,
outcome = 1,
currentOptions = [],
pageNum = 0 // Track current page number

const updateHtml = (id, html) => document.getElementById(id).innerHTML = html
const chooseOption = i => {
  let selectedOption
  currentOptions.map((opt, index) => {
    selectedOption = document.getElementById(`option${index}`)
    selectedOption.style.color = index === i ? '#fff' : '#111'
    selectedOption.style.background = index === i ? 'rgba(0,0,0,0.4)' : 'transparent'
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
const createPage = ({ id, text, options }) => {
  // Use h2 for intro and end screens
  const isBookendScreen = (id === 0 || id === VICTORY_OUTCOME || id === DEFEAT_OUTCOME)
  const description = text || 'No text found'
  // Store current options for outside access
  currentOptions = options
  const subtitle = isBookendScreen
  ? `<h2>${description}</h2>`
  : `<p class="description">${description}</p>`
  const optionsHtml = createOptionsList(options)
  const buttonsHtml = createButtonsHtml()
  const pageNumber = !isBookendScreen ? `<div class="page-number">ID: ${id}</div>` : ''
  const screenContent = `${subtitle}${optionsHtml}${buttonsHtml}${pageNumber}`
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
