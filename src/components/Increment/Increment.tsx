import React from 'react';
import s from './Increment.module.css'

type ScoreboardType = {
    count: number
    addCount: (number: number) => void
    disabledInc: boolean
}

export const Increment = (props: ScoreboardType) => {
    return (
        <div>
            <button disabled={props.disabledInc}
                    onClick={()=> {props.addCount(props.count)}}
                    className={s.incrementButton}>Inc</button>
        </div>
    )
}
