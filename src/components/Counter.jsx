import { useState } from "react";

const Counter = () => {

    let [counter, setCounter] = useState(0)

    // let add = () => {
    //     setCounter(++counter)
    //     console.log(counter)

    // }
    // let minus = () => {
    //     setCounter(--counter)
    //     console.log(counter)
    // }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <p>{counter}</p>
            <button onClick={() => {
                setCounter(++counter)
            }} className="btn">Add</button>
            <button onClick={() => {
                setCounter(--counter)
            }} className="btn">Minus</button>
        </div>
    )
}

export default Counter