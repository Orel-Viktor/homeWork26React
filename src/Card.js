import React, { useState, useRef, useEffect } from "react";

// export class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       technologies: props.technologies,
//     };
//     console.log(...this.state.technologies)
//     console.log(props.technologies)
//   }

//   addItem = (event) => {
//     event.preventDefault();
//     this.setState(
//       {
//         technologies: [
//           ...this.state.technologies,
//           event.target[0].value,
//         ],
//       },
//       () => {
//         event.target[0].value = "";
//       }
//     );
//   };

//   render() {
//     return (
//       <div className="card-inner">
//         <div className="card-inner__username">Name: {this.props.userName}</div>
//         <div className="card-inner__lastname">
//           Last Name:{this.props.lastname}
//         </div>
//         <form
//           action="#"
//           className="card-inner__form js--form"
//           onSubmit={this.addItem}
//         >
//           <input type="text" className="js--form"></input>
//           <button>добавить</button>
//         </form>
//         <div className="card-inner__technologies">
//           Learned Technologies :
//           {this.state.technologies.map((tech,i) => (
//             <div className="card-inner__technologies-item" key={tech + i}>
//               {tech}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }


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

  useEffect(() => {
    techItem.current.style.background = "blue"
  })


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