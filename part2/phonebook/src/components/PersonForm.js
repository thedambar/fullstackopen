import React, {useState} from 'react';
import personService from '../services/personService';

const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);


  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already in phonebook`);
      return;
    }
    personService
      .create({name: newName, number: newNumber})
      .then(newEntry => {
        setPersons(persons.concat(newEntry)) 
        console.log('newEntry is', newEntry);
      })
    setNewName('');
    setNewNumber('')
  }

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit" onClick={addPerson}>add</button>
      </div>
    </form>
  )
}

export default PersonForm;