import React from 'react';

const Person = ({person}) => <div>{person.name} {person.number}</div>

const Persons = ({persons, filter}) => {
  const filteredPersons = filter !== '' ? 
    persons.filter((person) => 
      person.name.toString().toLowerCase().includes(filter.toString().toLowerCase())) :
    persons
  
  return (filteredPersons.length > 0) ? 
    filteredPersons.map((person) => <Person key={person.id} person={person} />) :
    <div>No entries found.</div>
}

export default Persons;