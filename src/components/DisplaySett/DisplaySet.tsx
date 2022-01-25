import React, {ChangeEvent} from 'react';
import s from './DisplaySet.module.css'
import {SuperButton} from "../SuperButton/SuperButton";

type DisplaySetPropsType = {
    minValue: number
    maxValue: number
    errorInput: boolean
    onClick: () => void
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    disabled: boolean
}

export const DisplaySet = (props: DisplaySetPropsType) => {


    return (
        <div className={s.container}>
            <div className={s.subscoreboard}>
                <div>
                    max value: <input type="number"
                                      value={props.maxValue}
                                      onChange={props.onChangeMax}
                                      className={props.errorInput ? s.error : ''}
                />
                </div>
                <div>
                    start value: <input type="number"
                                        value={props.minValue}
                                        onChange={props.onChangeMin}
                                        className={props.errorInput ? s.error : ''}
                />
                </div>
            </div>
            <div className={s.subscoreboardSmall}>
                <div className={s.button}>
                    <SuperButton  title={'Set'} onClick={props.onClick} disabled={props.disabled}/>
                </div>
            </div>
        </div>
    )
}

