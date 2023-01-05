import React, { useState, useRef } from "react";
import { Button } from "./components/Button";

export function Card(props) {
  const { userName, lastName } = props
  const [technologies, setTechnologies] = useState(['React', 'Babel', 'WebPack'])
  const inputTechnologiesEl = useRef(null)
  const buttonAddTechnologies = useRef(null)
  const techItem = useRef(null)

  const addTechhologies = (event) => {
    event.preventDefault()
    const tech = inputTechnologiesEl.current.value
    setTechnologies([...technologies, tech])
    inputTechnologiesEl.current.value = ''
  }
  const amountValidation = () => {
    const regAmount = /.{5}/;
    let resAmount = inputTechnologiesEl.current.value.match(regAmount);
    if (resAmount) {
      buttonAddTechnologies.style.disabled
    }
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
        <label htmlFor="tech">Введите значение:</label>
        <input onChange={amountValidation} ref={inputTechnologiesEl} type="text" className="js--form" id="tech"></input>
        <button disabled ref={buttonAddTechnologies}>добавить</button>
        {/* <Button  buttonValue="Добавить"></Button> */}
      </form>
      <div className="card-inner__technologies">
        Learned Technologies :{technologies.map((tech, i) => (
          <div ref={techItem} className="card-inner__technologies-item" key={tech + i}>{tech}</div>
        ))}
      </div>
    </div>


  )
}