// import React from 'react';
// import Navigation from "../components/Navigation";

// class CountUpDown extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {count: 0};
//     }

//     handleClick() {
//         this.setState({count: this.state.count + 1});
//     }
//     handleMinusClick() {
//         this.setState({count: this.state.count - 1});
//     }
//     render() {
//         return (
//             <div>
//                 <Navigation />
//                 <main style={{ padding: "1rem 0" }}>
//                     <h2>CountUpDown</h2>
//                 </main>

//                 <h2>
//                     {this.state.count}
//                 </h2>
//                 <button onClick={() => {this.handleClick()}}>+</button>
//                 <button onClick={() => {this.handleMinusClick()}}>-</button>
//             </div>
//         );
//     }
// }
// export default CountUpDown;

import React, { useState } from 'react';
import Navigation from "../components/Navigation";

function CountUpDown() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <Navigation />
        <p>You clicked {count} !!</p>
        <button onClick={() => setCount(count + 1)}>
            +Click me
        </button>
        <button onClick={() => setCount(count - 1)}>
            -Click me
        </button>

    </div>
  );
}
export default CountUpDown;
