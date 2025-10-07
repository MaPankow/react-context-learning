import './App.css';
import { MusicSection } from './components/MusicSection';
import { ThemeArea, ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

const singleMusicians = [
  { 
    name: "Jarvis Cocker",
    genres: ["Pop", "Indie rock"]
  },
  { 
    name: "Billie Eilish",
    genres: ["Pop", "Trap"]
  }
];

const bands = [
  { 
    name: "Muse",
    genres: ["Rock", "Space Rock", "Alternative Rock"]
  },
  { 
    name: "The Strokes",
    genres: ["Rock", "Alternative Rock"]
  },
  { 
    name: "Plaiins",
    genres: ["Punkrock", "Indie Rock"]
  },
  { 
    name: "Pulp",
    genres: ["Pop", "Indie Rock"] 
  }
]
function App() {
  const {theme}=useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      <h1>Favourite Musicians</h1>
      <ThemeSwitcher />
      <ThemeArea initialTheme="light">
        <MusicSection musicians={singleMusicians} sectionTitle="Single musicians" />
      </ThemeArea>

      <ThemeArea initialTheme="dark">
        <MusicSection musicians={bands} sectionTitle="Bands" />
      </ThemeArea>
    </div>
  )
}

export default App
