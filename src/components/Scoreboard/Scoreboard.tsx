import React from 'react';
import s from './Scoreboard.module.css'
import {SuperButton} from "../SuperButton/SuperButton";

type ScoreboardType = {
    count: number
    addCount: () => void
    resetCount: () => void
}

export const Scoreboard = ({count, addCount, resetCount, ...props}: ScoreboardType) => {

    return (
        <div className={s.container}>
            <div className={s.scoreboard}>
                {count}
            </div>
            <div className={s.buttons}>
                <SuperButton disabled={count === 5} onClick={addCount} title={"Inc"}/>
                <SuperButton disabled={count === 0} onClick={resetCount} title={"Reset"}/>
            </div>
        </div>
    )
}

