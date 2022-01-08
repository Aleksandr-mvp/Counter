import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard/Scoreboard";

function App() {

    let [count, setCount] = useState<number>(0)
    let [disabledInc,setDisableInc] = useState<boolean>(false)
    let [disabledReset,setDisableReset] = useState<boolean>(true)

    const addCount = () => {
        if (count < 5) {
            setCount(count + 1)
            setDisableReset(disabledReset)
        } else {
            setDisableInc(!disabledInc)
            setDisableReset(!disabledReset)
        }
    }

         const resetCount = () => {
            setCount(0)
             setDisableInc(!disabledInc)
             setDisableReset(!disabledReset)
         }

        return (
            <div className="App">
                <Scoreboard disabledInc={disabledInc} disabledReset={disabledReset} addCount={addCount} resetCount={resetCount} count={count}/>
            </div>
        )


}
export default App;
