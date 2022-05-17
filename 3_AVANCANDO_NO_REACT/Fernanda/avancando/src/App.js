import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ContidionalRender from './components/ContidionalRender';
import ListRender from './components/ListRender';
import ManagerData from './components/ManagerData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Day"
  const [userName] = useState("Maria")
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ]

  const persons = [
    {id: 1, name: "Maria", age: 17, job: "Estagiário" },
    {id: 2, name: "João", age: 14, job: "Menor aprendiz" },
    {id: 3, name: "Paulo", age: 18, job: "Atendente" },
    {id: 4, name: "Joana", age: 25, job: "Programadora" },
    {id: 5, name: "José", age: 67, job: "Aposentado" },
  ]


  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const hadleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando no curso de React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManagerData />
      <ListRender />
      <ContidionalRender />
      {/* props */}
      <ShowUserName name="Fer"/>
      <ShowUserName name={name}/>
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="Teste"/>
      {/* Children */}
      <Container myValue="testing 1">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={hadleMessage} />
      {/* Tarefa */}
      {persons.map((person) => (
        <UserDetails 
          key={person.id}
          name={person.name}
          age={person.age}
          job={person.job} 
        />
      ))}
    </div>
  );
}

export default App;
