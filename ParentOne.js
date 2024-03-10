import React, {useState} from 'react'

export const ParentOne = ({Children}) => {
    const [count, setCount] = useState(0)
    console.log("ParentnOne Render")
  return (
    <div>
        <button onClick={() => setCount((c) =>c + 1)}>Count - {count}</button>
        {Children}
    </div>
  )
}
