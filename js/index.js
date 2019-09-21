// This file contains base app logic
const initialTitle = 'Fighting Fantasy Adventure'

let title = '',
prevChoice = '',
choice = '',
currentOptions = [],
pageNum = 0 // Track current page number

const updateHtml = (id, html) => document.getElementById(id).innerHTML = html
const chooseOption = i => {
  currentOptions.map((opt, index) => {
    document.getElementById(`option${index}`).style.background = index === i ? '#a12' : 'transparent'
  })
  choice = i
}
const optionBaseHtml = (choice, i) => `
  <a key="${i}" id="option${i}" onclick="chooseOption(${i})" class="option">
    <p>
      ${choice}
    </p>
  </a>
`
const createOptionsList = options => options && options.length ? `
  <div class="options-list">
    ${options.map((opt, i) => optionBaseHtml(opt.choice, i)).join('')}
  </div>
` : ''
const nextBtnHtml = label => `
  <button id="nextButton" onclick="pressNext()">${label}</button>
`

const createButtonsHtml = () => {
  let btnLabel = 'Next'
  if (pageNum < 1) btnLabel = 'Start'
  if (pageNum === story.length) btnLabel = 'Play Again?'
  return nextBtnHtml(btnLabel)
}

// Create a new page
const createPage = ({ title, subtitle, options }) => {
  title = title || initialTitle
  const screenTitle = subtitle ? `<h2>${subtitle}</h2>` : ''
  const optionsContent = createOptionsList(options)
  currentOptions = options
  const buttonsHtml = createButtonsHtml()
  updateHtml('title', pageNum < 1 ? initialTitle : title)
  updateHtml('screen', `${screenTitle}${optionsContent}${buttonsHtml}`)
}

const pressNext = () => {
  prevChoice = choice
  choice = ''
  if (pageNum === story.length - 1) {
    pageNum += 1
    createPage(prevChoice === 1 ? victoryPage : defeatPage)
  }
  if (pageNum === story.length) {
    pageNum = 0
  }
  else {
    pageNum += 1
    createPage(story[pageNum])
  }
}
