import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ 
        name: "Day", 
        email: "day@gmail.com", 
        bio: "fjdfjd dfjdhf dfhjdhff dfdhfjdhf dfjdhf dfjhdjfh dfhjdhf dshfjdshf fjhdsjfhdjfhdsjhfjdhfheufjjdfuffds",
        role: "admin" }} 
      />
    </div>
  );
}

export default App;
