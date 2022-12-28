import React, { useState } from "react";

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


export function Card() {
  const [technologies, setTech] = useState(['React', 'Babel', 'WebPack'])

  const addTech = (event) => {
    event.preventDefault()
    const tech = event.target[0].value
    setTech(technologies.push(tech))
    event.target[0].value = ''
  }
  return (

    <div className="card-inner">
      <div className="card-inner__username">Name: </div>
      <div className="card-inner__lastname">Last Name:</div>
      <form
        action="#"
        className="card-inner__form js--form"
        onSubmit={addTech}
      >
        <input type="text" className="js--form"></input>
        <button>добавить</button>
      </form>
      <div className="card-inner__technologies">
        Learned Technologies :{technologies}</div>
    </div>


  )
}