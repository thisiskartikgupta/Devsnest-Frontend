import {Component, setState, useState} from "react";
import './Counter.css';


//? By functional components
// const Counter = () => {

//     const [state, setstate] = useState({
//         counter:0
//       });

//     function updateCounter() {
//         setstate({
//             counter: state.counter+1,
//         })
//     }

//     return(
//         <button className="button" onClick={updateCounter}>{state.counter}</button>
//     );


// }

//? By class components
class Counter extends Component {
    
    state = {
        counter: 0,
    };

    updateCounter = () => {
         this.setState({
             counter: this.state.counter+ 1,
         })       
    }
        
     render() {       
            return(
                <button className="button" onClick={this.updateCounter}>{this.state.counter}</button>
            );
     }

}

export default Counter;