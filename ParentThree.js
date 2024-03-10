import React, {useState} from 'react'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Jagadeesh')

    console.log("ParentThree Render")
  return (
    <div>
        <button onClick={() => setCount((c) =>c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Codevelution')}>Change Name</button>
        {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree> */}
        <MemoizedChildFour name={name}>
        <strong>Hello</strong>

        </MemoizedChildFour>
    </div>
  )
}
