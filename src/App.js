// function AddToDo(props) {
//     const [todo, setTodo] = React.useState(''); //Initially, todo = null; later my todo = xyz
//     const onAddToDo = props.onAddToDo;

//     const [isSubmitEmpty, setIsSubmitEmpty] = React.useState(false);
//     let textCannotBeEmptyP;
//     if (isSubmitEmpty) {
//         textCannotBeEmptyP = <p style={{ color: 'red' }}>Text Cannot Be Empty!</p>;
//     }

//     return (
//         <div>
//             <div>
//                 <label>To Do: </label>
//                 <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
//                 <button
//                     onClick={() => {
//                         onAddToDo(todo);
//                         setIsSubmitEmpty(!todo);
//                         // sets isSubmitEmpty based on the content of todo
//                         // if todo = "abc", !todo --> false
//                         // else if todo = "", !todo --> true
//                     }}
//                 >
//                     Add!
//                 </button>
//             </div>
//             {textCannotBeEmptyP}
//         </div>
//     );
// }

// function ToDoList(props) {
//     const todos = props.todos; // array of strings, e.g. ["apple", "orange","pear"]
//     const todoElements = [];
//     for (let i = 0; i < todos.length; i++) {
//         const todo = todos[i];
//         const isTodoUnique = todos.filter((otherTodo) => todo === otherTodo).length === 1;
//         const color = isTodoUnique ? 'black' : 'red';
//         const todoElement = (
//             <li key={i} style={{ color: color }}>
//                 {todo}
//             </li>
//         );
//         todoElements.push(todoElement);
//     }
//     return <ul>{todoElements}</ul>;
// }
import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import About from './components/About';
import Address from './components/Address';
import Order from './components/Order';
import Checkout from './components/Checkout';

function Navigation(props) {
    return (
        <div>
            <div>
                <h1>Navigation</h1>
                <ul>
                    <li>
                        <Link to="/">Create Order</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div>{props.children}</div>
        </div>
    );
}

const BasicExample = () => (
    <Routes>
        <Route path="/" element={<Address />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
    </Routes>
);

function Layout(props) {
    return (
        <Navigation>
            <BasicExample />
        </Navigation>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </div>
    );
}

export default App;
