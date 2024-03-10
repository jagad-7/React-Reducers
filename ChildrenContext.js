import React, {useContext} from 'react'
import { Child } from '../Parent and Child/Child'
import { CountContext } from './ParentContext'

export const ChildA = () => {
    console.log('Child A Render')
  return (
        <div>
            <div>Child A</div>
            <ChildB />
        </div>
  )
}

export const ChildB = () => {
    console.log('Child B Render')
  return (
        <div>
            <div>Child B</div>
            <ChildC />
        </div>
  )
}

export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('Child C Render')
  return (
        <div>
            <div>Child C count = {count}</div>
        </div>
  )
}

