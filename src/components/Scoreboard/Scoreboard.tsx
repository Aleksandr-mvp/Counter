import React from 'react';
import {Increment} from "../Increment/Increment";
import {Reset} from "../Reset/Reset";
import s from './Scoreboard.module.css'

type ScoreboardType = {
    count: number
    disabledInc: boolean
    disabledReset: boolean
    addCount: (number: number) => void
    resetCount: () => void
}

export const Scoreboard = ({addCount, count, resetCount, ...props}: ScoreboardType) => {
    return (
        <div className={s.container}>
            <div className={s.scoreboard}>
                {count}
            </div>
            <div className={s.buttons}>
                <Increment disabledInc={props.disabledInc} count={count} addCount={addCount}/>
                <Reset disabledReset={props.disabledReset} resetCount={resetCount} count={count}/>
            </div>
        </div>
    )
}

