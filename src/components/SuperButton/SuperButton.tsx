import React from 'react';
import s from './SuperButton.module.css'

type ButtonPropsType = {
    disabled?: boolean
    title: string
    onClick?: () => void
}

export const SuperButton = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabled}
                onClick={props.onClick}
                className={s.Button}>{props.title}</button>
    )
}

