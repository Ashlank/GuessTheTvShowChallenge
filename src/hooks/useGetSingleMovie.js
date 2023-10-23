import { useState } from 'react'

export default function useGetSingleMovie(data) {
  const [current, setCurrent] = useState(data[0])
  const [remainingMovies, setRemainingMovies] = useState(data)
  const [hasWon, setHasWon] = useState(false)
  const [hasLose, setHasLose] = useState(false)
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0)

  const onComplete = () => {
    if(remainingMovies.length === 1) {
      setPoints(prev => prev + 1)
      setHasWon(true)
      return
    }

    setPoints(prev => prev + 1)
    setRemainingMovies(prev => {
      const [, ...newRemainingMovies] = prev
      setCurrent(newRemainingMovies[0])

      return newRemainingMovies;
    })
  }

  const onFail = () => {
    if(lives === 1) {
      setHasLose(true)
      return
    }

    setLives(prev => prev - 1)
  }

  return { current, lives, hasWon, hasLose, onComplete, onFail, points }
}
