import React from "react";

// export function Card({ userName, lastname, technologies }) {
//   return (
//     <div className="card-inner">
//       <div className="card-inner__username">Name: {userName}</div>
//       <div className="card-inner__username">Last Name:{lastname}</div>
//       <div className="card-inner__technologies"> Learned Technologies :
//         {technologies.map((tech) => (
//           <div className="card-inner__technologies-item"  key={tech}>{tech}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: props.technologies,
    };
  }

  addItem = (event) => {
    event.preventDefault();
    this.setState(
      {
        technologies: [
          ...this.state.technologies,
          event.target[0].value,
        ],
      },
      () => {
        event.target[0].value = "";
      }
    );
  };

  render() {
    return (
      <div className="card-inner">
        <div className="card-inner__username">Name: {this.props.userName}</div>
        <div className="card-inner__lastname">
          Last Name:{this.props.lastname}
        </div>
        <form
          action="#"
          className="card-inner__form js--form"
          onSubmit={this.addItem}
        >
          <input type="text" className="js--form"></input>
          <button>добавить</button>
        </form>
        <div className="card-inner__technologies">
          Learned Technologies :
          {this.state.technologies.map((tech,i) => (
            <div className="card-inner__technologies-item" key={tech + i}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
