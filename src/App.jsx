import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import HobbyThings from './pages/HobbyThings/HobbyThings'
import Landing from './pages/Landing/Landing'

import MusicThings from './pages/MusicThings/MusicThings'

import GuitarThings from './pages/GuitarThings/GuitarThings'

const App = () => {
  const bensThings = [
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]


  const patrickThings = [
    {
      name: 'FL Studio',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzdw4zykS5W1ULQxbIwUbzyZYmVdO6_qt7QtJkgpMrSzhCsA6suFNUPHCq4Q9lY5gyoc&usqp=CAU',
      attributes: ['useful', 'innovative', 'easy'],
    },
  ]


  const oscarsThings = [
    {
      name: "drone",
      image: "https://m.media-amazon.com/images/I/61pmT7VqRGL.jpg",  
      attributes: ["flight", "aircraft", "gray", "unmanned"],
    },
    {
      name: "guitar",
      image: "https://media.guitarcenter.com/is/image/MMGS7/512264000056000-00-1600x1600.jpg",
      attributes: ["light burst", "mahogany", "godin", "humbucker"]
    }
  ]


  const ryansThings = [
    {
      name: "guitars",
      image: "https://pbs.twimg.com/media/Fk99bnVaAAEvGom.jpg",  
      attributes: ["makes noise", "plug or unplugged", "not edible", "wood and steel"],
    },
  ]


  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />

      <Route 
        path="/the-music-things"
        element={<MusicThings things={patrickThings} />}
      />

      <Route
        path="/the-hobby-things"
        element={<HobbyThings things={oscarsThings} />} 
      />
      
      <Route 
        path="/the-guitar-things"
        element={<GuitarThings things={ryansThings} />}
      />
    </Routes>
  )
}

export default App
