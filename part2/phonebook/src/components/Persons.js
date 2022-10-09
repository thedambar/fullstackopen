import React from 'react';
import personService from '../services/personService';

const Person = ({person, persons, setPersons}) => {
  return (
    <div>
      {person.name} {person.number} <DeletePersonButton id={person.id} persons={persons} setPersons={setPersons} />
    </div>  
  )
}

const DeletePersonButton = ({id, persons, setPersons}) => {
  const handleDeletePerson = () => {
    personService.del(id);
    setPersons(persons.filter(person => person.id !== id))
  } 

  return <button onClick={handleDeletePerson}>delete</button>
}

const Persons = ({persons, filter, setPersons}) => {
  const filteredPersons = filter !== '' ? 
    persons.filter((person) => 
      person.name.toString().toLowerCase().includes(filter.toString().toLowerCase())) :
    persons
  
  if (filteredPersons.length > 0) {
    return filteredPersons.map((person) => 
      <Person key={person.id} person={person} persons={persons} setPersons={setPersons} />
    )
   }
  return <div>No entries found.</div>
}

export default Persons;