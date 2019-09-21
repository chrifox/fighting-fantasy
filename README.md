# Fighting Fantasy Adventure

## Getting started
To get started open the `index.html` file by double-clicking on it.
It should open in your web browser.

Next open `story.js`.

```
// Page 1
{
  // title: '',
  subtitle: 'There is a fork in the road, do you...',
  options: [
    { choice: 'Turn left?', outcome: 0 },
    { choice: 'Turn right?', outcome: 1 },
  ],
},
```

This is an example page, you can delete this or comment it out and use it as a reference.

To add your own page, simply add this underneath:

```
// My new page
{
  title: 'Harry Potter and the Nefarious Niffler',
  subtitle: 'You are sitting in your bedroom and you hear a strange noise...',
  options: [
    { choice: 'Get up to investigate', outcome: 0 },
    { choice: 'Stay in your bedroom', outcome: 1 },
  ],
},
```

*NOTE:* Commas are very important, make sure you don't miss any out.

Once you're happy with your page, go back to your browser and refresh the page.

Click start and you should see your new page!

Here there are some further notes on the JavaScript itself if you want to know more.

1. Comments

`// I am a comment` - Two forward slashes in JavaScript means that this line will be skipped,
and can be used for describing what is happening. Very useful.
Can also be written like this:
`/* I am also comment */`

2. Variables

`var` - This is short for variable and is the most commonly used keyword.
`let` - This is used for variables we might want to change later on.
`const` - This is short for constant, meaning the variable will not be changed.

3. Types

String - `''` OR `""` - This is a string, usually a word or group of words
Number - Just like it sounds, pretty much any number can be a variable
Boolean - `true` OR `false` This one's fairly straightforward right?
Object - `{}` - Curly brackets means an object
Array - `[]` - Square brackets means an array, this is another name for a list

For more information on types you can read more [here](https://www.w3schools.com/js/js_datatypes.asp).

## Project structure
In this project there are 3 main parts:

### HTML - Hypertext Markup Language
```
index.html - This holds the HTML files.
```
HTML describes the structure of a web page.
Web browsers receive HTML documents from a web server or from local storage.
They can use them to render into multimedia web pages.
### CSS - Cascading Style Sheets
```
/css - This holds all the CSS files
```
CSS is used for describing the presentation of a website including layout, colors, and fonts.

### JS - JavaScript
```
/js - This holds all the JavaScript files
```
JavaScript is one of the core technologies a modern website.
It enables interactive web pages and is an essential part of web.
