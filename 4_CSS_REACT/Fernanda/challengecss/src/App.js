import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react'
import Title from './components/Title';
import CarDetails from './components/CarDetails';

function App() {
  const n = 15
  const [name] = useState("Fernanda")
  const redTitle = false

  const cars = [
    { id: 1, brand: "Toyota", color: "branco", km: 0 },
    { id: 2, brand: "Fiat", color: "Preto", km: 40000 },
    { id: 3, brand: "VW", color: "Prata", km: 65000 },
    { id: 4, brand: "Ford", color: "Vermelho", km: 150000 },
  ]

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente   */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p 
        style={{ 
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red" 
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 
        style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}
      >
        CSS dinâmico
      </h2>
      <h2 
        style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}
      >
        CSS dinâmico
      </h2>
      <h2 
        style={name === "Fernanda" 
        ? ({color: "green", backgroundColor: "#000"}) 
        : null}
      >
        Teste nome
      </h2>
      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      {/* Tarefa */}
      <h1 className='carros_estoque'>Carros em Estoque</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;