import React from 'react'

export const ChildFour = ({name}) => {
    const date = new Date()
    console.log("Childfour Render")
  return (
    <div>
        Hello {name}. It is Currently {date.getHours()}: {date.getMinutes()}: {' '} {date.getSeconds()}:  
    </div>
  )
}
export const MemoizedChildFour = React.memo(ChildFour)
