
import { FormEvent, useState } from 'react'
import './App.css'

function App() {

  const [Person, setPerson] = useState({
    name:"",
    age:0,
})

  const handleSubmit = (event:FormEvent) => {
    event?.preventDefault();
    console.log(Person)
  }


  return (
    <>
      <form action="" method="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">NAME</label><br />
          <input type="text" value={Person.name} name="" id="" onChange={(event) => setPerson ({...Person, name: event.target.value})} />
        </div><br />
        <div>
          <label htmlFor="">age</label><br />
          <input type="number" value={Person.age} name="" id="" onChange={(event) => setPerson ({...Person, age: parseInt(event.target.value)})} />
        </div><br />
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>

    </>
  )
}

export default App
