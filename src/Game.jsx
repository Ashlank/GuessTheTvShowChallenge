import './Game.css'
import GameContainer from './GameContainer'
import useDataLoader from './hooks/useDataLoader'

export default function Game() {
  // const [data, loading] = useDataLoader()

  // Hardcode DATA
  const data = [{"name": "Adventure Time: Fionna & Cake"},{"name": "Breaking Bad"},{"name": "Arcane"},{"name": "One Piece"},{"name": "Rick and Morty"},{"name": "Fullmetal Alchemist: Brotherhood"},{"name": "Anne with an E"},{"name": "Avatar: The Last Airbender"},{"name": "Demon Slayer: Kimetsu no Yaiba"},{"name": "Invincible"},{"name": "Heartstopper"},{"name": "My Hero Academia"},{"name": "Goblin"},{"name": "Attack on Titan"},{"name": "The Last of Us"},{"name": "Regular Show"},{"name": "Chernobyl"},{"name": "The Owl House"},{"name": "Better Call Saul"},{"name": "Once"}]
  const loading = false;

  return (
    <>
      {
        !loading
          ?
        <GameContainer data={data}/>
          :
        <div className='Game'>Loading...</div>
      }

    </>
  )
}

