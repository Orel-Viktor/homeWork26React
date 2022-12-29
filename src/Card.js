import React, { useState, useRef } from "react";

export function Card(props) {
  const { userName, lastName } = props
  const [technologies, setTechnologies] = useState(['React', 'Babel', 'WebPack'])
  const inputTechnologiesEL = useRef(null)
  const techItem = useRef(null)

  const addTechhologies = (event) => {
    event.preventDefault()
    const tech = inputTechnologiesEL.current.value
    setTechnologies([...technologies, tech])
    inputTechnologiesEL.current.value = ''
  }



  return (
    <div className="card-inner">
      <div className="card-inner__username">Name:{userName} </div>
      <div className="card-inner__lastname">Last Name:{lastName}</div>
      <form
        action="#"
        className="card-inner__form js--form"
        onSubmit={addTechhologies}
      >
        <input ref={inputTechnologiesEL} type="text" className="js--form"></input>
        <button>добавить</button>
      </form>
      <div className="card-inner__technologies">
        Learned Technologies :{technologies.map((tech, i) => (
          <div ref={techItem} className="card-inner__technologies-item" key={tech + i}>{tech}</div>
        ))}
      </div>
    </div>


  )
}