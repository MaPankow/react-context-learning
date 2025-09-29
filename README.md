# Fav Musicians

TThis mini app stores lists of favourite musical acts and assigns a special colour to each section. The data is organised into two sections: one for solo musicians and one for bands.

The goal is to practise the React workflow between components and use React Context to manage the colours for each section, helping to avoid prop drilling (passing props through many component levels).

## React setup  and structure

This programme is written using Vite + React.
Node is already installed, so I navigated to the desired directory and ran:
```
npm create vite@latest
```
In the terminal, I was prompted to enter the project name, select the library (React), and choose the language (JavaScript).

After installation, I navigated into the new project directory. Everything was then ready to use.

I then created two directories in `src/`, one called `components` for the React components and one called `contexts` for any context files.

### Components
I plan to create three components:

- One for the sections, which displays lists of musicians sorted accordingly.
- One for the list, which maps over the single items and stores them in an array.
- One for the single entries (items), which receives the section’s colour and the name as props.

App.jsx will hold the data (names) for the list items and pass them down to the components.

### Context
This file contains the logic that allows values to be passed down the component tree without having to pass props through every level. This helps avoid unnecessary prop drilling.


