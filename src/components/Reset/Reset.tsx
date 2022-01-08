import React from 'react';
import s from './Reset.module.css'

type ResetType = {
    count: number
    disabledReset: boolean
    resetCount: (number: number) => void
}

export const Reset = (props: ResetType) => {
    return (
        <div>
            <button disabled={props.disabledReset}
                    onClick={() => {props.resetCount(props.count)}}
                    className={s.resetButton}>Reset</button>
        </div>
    )
}

