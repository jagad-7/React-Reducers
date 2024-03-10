import React, {useState} from 'react'

const initState = ['bruce', 'wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handClick = () => {
        // persons.push('clark')
        // persons.push('kent')
        // setPersons(persons)
    const newPersons = [...persons]
    newPersons.push('clark')
    newPersons.push('kent')
    setPersons(newPersons)
    }
    console.log('ArrayUseState Rendering')
  return (
    <div>
        <button onClick={handClick}> Click </button>
        {
            persons.map(person => (
                <div key={person}> {person} </div>
            ))
        }
    </div>
  )
}
