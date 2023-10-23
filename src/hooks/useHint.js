import { useState, useEffect } from "react";

export default function useHint(name) {
  const [lettersRemoved, setLettersRemoved] = useState([])
  const [nameDisplayed, setNameDisplayed] = useState([])
  const [hintUsed, setHintUsed] = useState(false);

  const strLen = name.length
  const amountOfMissingLetters = Math.floor((Math.random() * (strLen / 3)) + 2)
  const nameCopy = name.split('');

  useEffect(() => {
    let removed =[]
    for(let i = 0; i < amountOfMissingLetters; i++) {
      let randomIndex = Math.floor(Math.random() * strLen)
      while(!/^[A-Za-z]+$/.test(nameCopy[randomIndex])) {
        randomIndex = Math.floor(Math.random() * strLen)
      }
      removed.push({ index: randomIndex, letter: nameCopy[randomIndex]})
      nameCopy[randomIndex] = '_'
    }
    setLettersRemoved(removed)
    setNameDisplayed(nameCopy)
    setHintUsed(false)
  }, [name])

  const onHint = () => {
    setNameDisplayed(prev => {
      const newArr = [...prev];
      newArr[lettersRemoved[0].index] = lettersRemoved[0].letter;
      return newArr
    })
    setHintUsed(true);
  }

  return { hintUsed, nameDisplayed, onHint }
}