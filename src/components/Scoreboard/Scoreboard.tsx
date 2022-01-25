import React from 'react';
import s from './Scoreboard.module.css'
import {SuperButton} from "../SuperButton/SuperButton";

type ScoreboardType = {
    count: number
    minValue: number
    maxValue: number
    addCount: () => void
    resetCount: () => void
}

export const Scoreboard = ({count, minValue, maxValue, addCount, resetCount, ...props}: ScoreboardType) => {

    return (
        <div className={s.container}>
            <div className={count === maxValue ? s.colorCount : s.scoreboard}>
                {count}
            </div>
            <div className={s.buttons}>
                <SuperButton disabled={count === maxValue} onClick={addCount} title={"Inc"}/>
                <SuperButton disabled={count === minValue} onClick={resetCount} title={"Reset"}/>
            </div>
        </div>
    )
}

