const Person = ({person}) => <div>{person.name}</div>

const Persons = ({persons}) => persons.map((person) => <Person key={person.name} person={person} />)

export default Persons;