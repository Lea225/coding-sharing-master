# NoteCode - Code Sharing App | devChallenges

<div align="center">
   Solution for the <a href="https://devchallenges.io/challenges/code-sharing-app-note-code" target="_blank">Code Sharing App</a> challenge from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://your-deployed-app-url.com">
      Live Demo
    </a>
    <span> | </span>
    <a href="https://github.com/your-username/note-code">
      Solution Code
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/code-sharing-app-note-code">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Overview

![screenshot](./screenshot.png)

NoteCode is a minimalist code sharing application that allows developers to:
- Write and edit code in multiple languages
- Share code snippets with a unique URL
- Preview code with syntax highlighting
- Switch between light/dark themes

Key improvements I made:
- Implemented real-time code mirroring between editor and mini-map
- Added copy notification system
- Optimized mobile responsiveness
- Enhanced sharing workflow

## Features

- 🖥️ Code editor with syntax highlighting (HTML, CSS, JavaScript, Python)
- 🌓 Light/Dark theme toggle
- 📋 One-click copy sharing link
- 🔍 Mini-map navigation
- 📱 Fully responsive design
- 🔗 Persistent code sharing via URLs
- ✨ Clean, modern UI

## Built With

- [CodeMirror](https://codemirror.net/) - Versatile text editor for the browser
- Vanilla JavaScript (ES6+)
- CSS3 with custom properties
- Flexbox & CSS Grid
- Semantic HTML5

## What I Learned

Through this project, I deepened my understanding of:
- Working with the CodeMirror API
- Implementing real-time editor features
- LocalStorage for client-side persistence
- Responsive design considerations for code editors
- Building accessible UI components
- Managing complex state without frameworks

Key code snippet (mini-map synchronization):
```javascript
editor.on("scroll", () => {
  miniMap.scrollTo(0, editor.getScrollInfo().top);
});

### Useful Resources

Here are the key resources that helped me build this project:

#### CodeMirror Integration

- [CodeMirror Official Documentation](https://codemirror.net/doc/manual.html) - Essential for implementing the core editor functionality
- [CodeMirror Mode Examples](https://codemirror.net/mode/) - Helped me understand language syntax highlighting
- [CodeMirror Theme Gallery](https://codemirror.net/theme/) - Inspired the theme switching feature

#### UI/UX Design

- [CSS Tricks - Custom Select Styles](https://css-tricks.com/styling-a-select-like-its-2019/) - For the custom language/theme selectors
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Crucial for responsive layout
- [Dark Mode in CSS](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) - Implemented the theme switching system

#### JavaScript Techniques

- [LocalStorage API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - For persisting code snippets
- [URLSearchParams Documentation](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) - Handled the sharing URL parameters
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) - Powered the copy-to-clipboard functionality

#### Inspiration

- [devChallenges Design System](https://devchallenges.io/design-system) - Followed the design guidelines
- [CodePen Editor UI Patterns](https://codepen.io/search/pens?q=code+editor) - Studied various editor implementations
- [VS Code Mini-map](https://code.visualstudio.com/docs/getstarted/userinterface#_minimap) - Inspired the mini-map feature

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## Acknowledgements

- [devChallenges](https://devchallenges.io/) - For the inspiring project brief

- [CodeMirror Documentation](https://codemirror.net/5/doc/manual.html) - Excellent API reference

- [CSS-Tricks](https://css-tricks.com/) - For UI inspiration and techniques

## Author

- Website [my-website.com](https://{your-web-site-link})
- GitHub [@my-username](https://github.com/Lea225})