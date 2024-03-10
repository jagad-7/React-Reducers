import React, {useState} from 'react'

const initState = {
    fname: 'jagadeesh',
    lname: 'B',
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName= () => {
        // person.fname = 'Jai'
        // person.lname = 'B'
        // setPerson(person)

    const NewPerson = {...person}
    NewPerson.fname = 'Jai'
    NewPerson.lname = 'B'
    setPerson(NewPerson)
    }
    console.log('ObjectUsestate rendering')
  return (
    <div>
        <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}
