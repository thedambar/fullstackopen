import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return (request
    .then(response => response.data)
    .catch(error => { 
      console.log(error);
      alert('Could not fetch persons')
    })
  )};

const create = newEntry => {
  const request = axios.post(baseUrl, newEntry);
  return request
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      alert('Could not create entry');
    })
}

const update = (id, newEntry) => {
  console.log(newEntry)
  const request = axios.put(`${baseUrl}/${id}`, newEntry);
  return request
    .then(response => request.then(response.data))
    .catch(error => {
      console.log(error);
      alert('Could not update entry')
    })
}

const del = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then(response => request.then(response.data))
    .catch(error => {
      console.log(error);
      alert('Could not delete entry')
    })
}

export default {getAll, create, update, del};
