import './App.css';
import { MusicSection } from './components/MusicSection';
import { ThemeContext } from './contexts/ThemeContext';

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


  return (
    <div>
      <h1>Favourite Musicians</h1>
      <ThemeContext.Provider value="light">
        <MusicSection musicians={singleMusicians} sectionTitle="Single musicians" />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="dark">
        <MusicSection musicians={bands} sectionTitle="Bands" />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
