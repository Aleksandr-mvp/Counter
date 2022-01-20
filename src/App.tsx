import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard/Scoreboard";
import {DisplaySet} from "./components/DisplaySett/DisplaySet";

function App() {
    let [count, setCount] = useState<number>(0)

    const addCount = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

        return (
            <div className="App">
                <DisplaySet/>
                <Scoreboard addCount={addCount} resetCount={resetCount} count={count}/>
            </div>
        )


}
export default App;
