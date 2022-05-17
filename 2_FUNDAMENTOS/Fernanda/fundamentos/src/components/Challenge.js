const Challenge = () => {
  const x = 15
  const y = 37

  const handleSomar = (e) => {
    console.log(x + y)
  }

  return (
    <div>
      <>
      <h1>{x}+{y} = {x+y}</h1>   
      <button onClick={handleSomar}>Somar</button> 
      </>
    </div>
  )
}

export default Challenge;