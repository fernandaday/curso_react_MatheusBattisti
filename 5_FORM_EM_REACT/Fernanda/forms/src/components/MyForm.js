import './MyForm.css'
import{ useState } from 'react'

const MyForm = ({ user }) => {
  // Controlled inputs
  // Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  // console.log(name)
  // console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário")
    console.log(name, email, bio, role)

    // limpar formulário
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  
  return (
    <div>
      {/* // Criação de form */}
      {/* Envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome" 
            onChange={handleName}
            value={name}
          />
        </div>
        {/* label envolvendo o input */}
        <label>
          <span>E-mail</span>
          {/* simplificando a manipulação de state */}
          <input 
            type="email" 
            name="email" 
            placeholder="Digite seu e-mail" 
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
          />
        </label>
        {/* TextArea */}
        <label>
          <span>Bio:</span>
          <textarea 
            name="bio" 
            placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
          ></textarea>
        </label>
        {/* Select */}
        <label>
          <span>Função no sistema:</span>
          <select 
            name="role" 
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm