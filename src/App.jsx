import './App.css';
import { MusicSection } from './components/MusicSection';

const singleMusicians = [
  { name: "Jarvis Cocker"},
  { name: "Billie Eilish"}
];

const bands = [
  { name: "Muse"},
  { name: "The Strokes"},
  { name: "Plaiins" },
  { name: "Pulp" }
]
function App() {


  return (
    <div>
      <h1>Favourite Musicians</h1>
      <MusicSection musicians={singleMusicians} sectionTitle="Single musicians" />
      <MusicSection musicians={bands} sectionTitle="Bands" />
    </div>
  )
}

export default App
