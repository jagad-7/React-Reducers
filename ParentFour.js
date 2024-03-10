import React, {useState} from 'react'
// import { MemoizedChildThree } from './ChildThree'
// import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Jagadeesh')

    const person = {
        fname:'brues',
        lname: 'wayne'
    }

    console.log("ParentFour Render")
  return (
    <div>
        <button onClick={() => setCount((c) =>c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Codevelution')}>Change Name</button>
        {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree> */}

        <MemoizedChildFive name={name} person={person}>
        <strong>Hello</strong>
        </MemoizedChildFive>
    </div>
  )
}
