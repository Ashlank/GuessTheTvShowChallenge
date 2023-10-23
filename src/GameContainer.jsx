import "./GameContainer.css"
import DisplayName from "./components/DisplayName"
import InputName from "./components/InputName"
import Lives from "./components/Lives";
import Points from "./components/Points";
import useGetSingleMovie from "./hooks/useGetSingleMovie"
import { Link } from "react-router-dom";

export default function GameContainer({ data }) {
  const { current, lives, hasWon, hasLose, onComplete, onFail, points } = useGetSingleMovie(data);

  if(hasLose) {
    return <ResultMessage message="Ups, you lose" />
  }

  return (
    <div className='Game'>
      <Points points={points} />
      {
        !hasWon
          ?
          <>
            <Lives lives={lives} />
            <DisplayName name={current.name} />
            <InputName movieName={current.name} onComplete={onComplete} onFail={onFail}/>
          </>
          :
          <ResultMessage message="Congratulations, you won!" />
      }
    </div>
  )
}

function ResultMessage({ message }) {
  return(
    <div className="Game">
      <h3>{message}</h3>
      <Link to={'/'}>
        <button type='button' className="backButton">Iniciar Juego</button>
      </Link>
   </div>
  )
}
