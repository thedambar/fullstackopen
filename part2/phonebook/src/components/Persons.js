const Person = ({person}) => <div>{person.name} {person.number}</div>

const Persons = ({persons, filter}) => {
  const filteredPersons = filter !== '' ? 
    persons.filter((person) => 
      person.name.toString().toLowerCase().includes(filter.toString().toLowerCase())) :
    persons
  
  console.log(filteredPersons);
  return filteredPersons.map((person) => <Person key={person.id} person={person} />)
}

export default Persons;