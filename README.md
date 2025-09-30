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

## Set up basic logic to display the musical acts

Before starting with context logic, the React workflow was set up and tested. A few entries for each section were hard-coded as constant variables (arrays of objects) in `App.jsx`.

The first component to receive data as props is `MusicSection.jsx`. In `App.jsx`, the logic displays this component twice, passing down the names of the sections.

In `MusicSection.jsx`, the section titles are displayed as `h2` elements, and the contents of the next component, `MusiciansList.jsx`, are shown by passing down the musicians list as props.

In `MusiciansList.jsx`, the logic maps over the array and displays the list items, which are rendered by the last component in the tree, `ListItem.jsx`. The props for each single object are passed down.

Initially, only the name was included as a key-value pair, so only the name was passed down. To make it more complex, another property, `genres`, was added to each object. Its value is an array, since each musician has more than one genre.

Now, in `MusiciansList.jsx`, the whole object is passed down, and in `ListItem.jsx`, the genres array is mapped over to show the genres in an unordered list.

So far, although the app still looks ugly and needs some CSS, it works and displays the data.

