import HeartIcon from "./HeartIcon";

export default function Lives({ lives }) {
  const hearts = new Array(3).fill();

  return (
    <div>
      {
        hearts.map((_,index) => {
          return <HeartIcon key={index} isLive={index < lives ? true : false}/>
        })
      }
    </div>
  )
}
