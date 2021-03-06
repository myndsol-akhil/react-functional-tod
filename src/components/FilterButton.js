// import React, { Component } from "react";

// export class Button extends Component {
//   render() {
//     return (
//       <div className="filter">
//         <button
//           type="button"
//           className="filter-button"
//           onClick={() => this.props.filterTasks("all")}
//         >
//           <span>All </span>
//         </button>
//         <button
//           type="button"
//           className="filter-button"
//           onClick={() => this.props.filterTasks("done")}
//         >
//           <span>Done </span>
//         </button>
//         <button
//           type="button"
//           className="filter-button"
//           onClick={() => this.props.filterTasks("pending")}
//         >
//           <span>Pending </span>
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;

import React from 'react'

function Button(props) {
  return (
    <div className="filter">
    <button
      type="button"
      className="filter-button"
      onClick={() => props.filterTasks("all")}
    >
      <span>All </span>
    </button>
    <button
      type="button"
      className="filter-button"
      onClick={() => props.filterTasks("done")}
    >
      <span>Done </span>
    </button>
    <button
      type="button"
      className="filter-button"
      onClick={() => props.filterTasks("pending")}
    >
      <span>Pending </span>
    </button>
  </div>
  )
}

export default Button
