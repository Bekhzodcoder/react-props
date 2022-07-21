import React from 'react'
import './App.css';
import Avatar from './components/Avatar';
import UsersName from './components/UsersName';

function App() {
  // const url = 'https://reqres.in/img/faces/8-image.jpg';
  // const name = 'Bexzod Istamov'
  // const email = 'https://www.bexzodcoder@gmail.com'

  const users = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ]

  const Styles = {
    display:'flex',
    margin:'10px',
    padding:'10px',
    border:'1px solid #888',
    width:'400px'
  }
  return (
    users.map(user=>(
    <div style={Styles} className="App">
      <Avatar url={user.avatar} name={user.first_name} />
      <UsersName name={user.first_name} email={user.email} />
    </div>
    )));
}

export default App;
