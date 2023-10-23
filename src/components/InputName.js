import { useState } from "react"

export default function InputName({ movieName, onComplete, onFail }) {
  const [guess, setGuess] = useState('')

  const handleChange = (e) => {
    setGuess(e.target.value)
  }

  const handleCheck = (e) => {
    e.preventDefault()
    if(e.target.children[0].value.toLowerCase() === movieName.toLowerCase()){
      onComplete();
    }
    else {
      onFail();
    }
    setGuess('')
  }
  return (
    <form onSubmit={handleCheck}>
      <input type="text"
             placeholder='Guess the TV Show'
             value={guess}
             onChange={handleChange}
      />
    </form>
  )
}
