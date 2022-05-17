import {useState} from 'react'

function ListRender() {
  const [list] = useState(["Fernanda", "Iager", "Day"])
  const [users, setUsers] = useState([
    { id: 1, name: "Fernanda", age: 41 },
    { id: 2, name: "Carlos", age: 41 },
    { id: 3, name: "Débora", age: 60 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      console.log(randomNumber);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender