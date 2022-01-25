import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard/Scoreboard";
import {DisplaySet} from "./components/DisplaySett/DisplaySet";

function App() {
    const [count, setCount] = useState<number>(JSON.parse(localStorage.getItem('countValue') || '0'))
    const [minValue, setMinValue] = useState<number>(JSON.parse(localStorage.getItem('minValue') || '0'))
    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || '5'))
    const [errorInput, setErrorInput] = useState<boolean>(false)
    const [disabledSetButton, setDisabledSetButton] = useState<boolean>(true)


    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        if (minValue < 0) {
            setDisabledSetButton(true)
            setErrorInput(!errorInput)
        }
    }, [minValue])

    useEffect(() => {
        if (maxValue === minValue) {
            setDisabledSetButton(true)
            setErrorInput(!errorInput)
        }
    }, [maxValue])

    const setToLocalStorageHandler = () => {
        setCount(minValue)
        setDisabledSetButton(true)
    }

    const onChangeMinSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
        setDisabledSetButton(false)

    }

    const onChangeMaxSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setDisabledSetButton(false)
    }



    const addCount = () => {
        if (count !== maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => {
        setCount(minValue)
    }




    return (
        <div className="App">
            <DisplaySet onClick={setToLocalStorageHandler} minValue={minValue}
                        maxValue={maxValue} onChangeMin={onChangeMinSetValue}
                        onChangeMax={onChangeMaxSetValue}
                        errorInput={errorInput}
                        disabled={disabledSetButton}
            />
            <Scoreboard addCount={addCount} resetCount={resetCount}
                        count={count} minValue={minValue} maxValue={maxValue}/>
        </div>
    )
}

export default App;
