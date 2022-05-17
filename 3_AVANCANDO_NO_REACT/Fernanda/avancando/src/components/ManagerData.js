import {useState} from 'react'

const ManagerData = () => {
  let someData = 10;

  console.log(someData)

  const [number, setNumber] = useState(10)

  console.log(number)

  return (
    <div>
      <div>
        <p>Valor com variável: {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor com userState: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o State</button>
      </div>
    </div>
  )
}

export default ManagerData