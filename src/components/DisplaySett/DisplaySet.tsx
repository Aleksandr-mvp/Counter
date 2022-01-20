import React from 'react';
import s from './DisplaySet.module.css'
import {SuperButton} from "../SuperButton/SuperButton";

export const DisplaySet = () => {
    return (
        <div className={s.container}>
            <div className={s.subscoreboard}>
                <div>
                    max value: <input type="number"/>
                </div>
                <div>
                    start value:<input type="number"/>
                </div>
            </div>
            <div className={s.subscoreboardSmall}>
                <div className={s.button}>
                    <SuperButton title={'Set'}/>
                </div>
            </div>
        </div>
    )
}

