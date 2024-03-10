import React, {useState} from 'react'
import { ChildA } from './ChildrenContext'

export const CountContext = React.createContext()
const countProvider = CountContext.Provider

export const ParentContext = () => {
    const [count, setCount] = useState(0)
    console.log('ContextParent Render')

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
        <countProvider value={count}>
        <ChildA />  
        </countProvider>
    </div>
    )
}
