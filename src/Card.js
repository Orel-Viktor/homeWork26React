import React, { useState, useRef, useEffect } from "react";
import { Button } from "./components/Button";

export function Card(props) {
  const { userName, lastName } = props;
  const [technologies, setTechnologies] = useState([
    "React",
    "Babel",
    "WebPack",
  ]);
  const [inputValue, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  

  const addTechhologies = (event) => {
    event.preventDefault();
    const tech = inputValue;
    setTechnologies([...technologies, tech]);
    setValue("");
  };

  const hadleInput = (e) => setValue(e.target.value);

  useEffect(() => {
    const regAmount = /.{5}/;
    let result = regAmount.test(inputValue)
    setDisabled(!result)
  }, [inputValue]);

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
        <input
          value={inputValue}
          onChange={hadleInput}
          type="text"
          className="js--form"
          id="tech"
        ></input>
        <Button disabled={disabled}>добавить</Button>
      </form>
      <div className="card-inner__technologies">
        Learned Technologies :
        {technologies.map((tech, i) => (
          <div
            className="card-inner__technologies-item"
            key={tech + i}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
