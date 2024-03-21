import { FormEvent, useState } from "react";


const Form = () => {

  // Using useRef
  // const nameRef= useRef<HTMLInputElement>(null)
  // const ageRef = useRef<HTMLInputElement>(null)
  // const person = {
  //   name: '',
  //   age: 0
  // }

  // Using useState
  const [person, setPerson] = useState({
    name: '',
    age: ''
  })


  const handleSubmit = (event: FormEvent) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Handle form submission logic here
    // if(nameRef.current !== null)
    //   person.name = nameRef.current.value
    // if(ageRef.current !== null)
    //   person.age = parseInt(ageRef.current.value)

  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={person.name} onChange={(event) => setPerson({...person, name: event.target.value})} id="name" type="text" className="form-control" />
            </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})} id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form