import React from "react";


export function Card({ userName, lastname, technologies }) {
  return (
    <div className="card-inner">
      <div className="card-inner__username">Name: {userName}</div>
      <div className="card-inner__username">Last Name:{lastname}</div>
      <div className="card-inner__technologies"> Learned Technologies :
        {technologies.map((tech) => (
          <div className="card-inner__technologies-item"  key={tech}>{tech}</div>
        ))}
      </div>
    </div>
  );
}


//  export class Card extends React.Component {
//     render(){
//         return (
//             <div className="card-inner">
//               <div className="card-inner__username">Name: {this.props.userName}</div>
//               <div className="card-inner__lastname">Last Name:{this.props.lastname}</div>
//               <div className="card-inner__technologies">Learned Technologies :
//                 {this.props.technologies.map((tech) => (
//                   <div className="card-inner__technologies-item" key={tech}>{tech}</div>
//                 ))}
//               </div>
//             </div>
//           );
//     }
// }