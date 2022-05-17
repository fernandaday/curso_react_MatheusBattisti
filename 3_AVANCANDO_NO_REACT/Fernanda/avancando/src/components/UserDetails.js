const UserDetails = ( { name, age, job } ) => {
  return (
    <div>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {job}</li>
          {age >= 18 ? (
            <p>{name} pode tirar carteira de Habilitação</p>   
          ) : (
            <p>{name} não pode tirar carteira de Habilitação</p>
          )}
      </ul>
    </div>
  )
}

export default UserDetails