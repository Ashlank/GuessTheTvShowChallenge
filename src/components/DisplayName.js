import useHint from "../hooks/useHint";

export default function DisplayName({ name }) {
  const { hintUsed, nameDisplayed, onHint } = useHint(name);

  return (
    <div>
      {
        nameDisplayed.length !== 0
          ?
          <>
            {
              nameDisplayed.map((letter, index) => {
                return <Letter key={index} letter={letter} />
              })
            }
            <button type="button" onClick={onHint} disabled={hintUsed} className="hint">?</button>
          </>
          :
          <div>Loading...</div>
      }
    </div>
  )
}

function Letter({ letter }) {
  return <span>{letter}</span>
}
