﻿import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void; //this is a funtion that takes in number as a parameter but returns nothing
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId }) => {

    const isActive = id === activeButtonId;

    const getClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
        }
        return styles.button;
    }

    const buttonClicked = (): void => {
        if(isActive) {
            const randomButton = Math.floor(Math.random() * 8);
            setActiveButtonId(randomButton);
        } 
    }

    return (
        <circle onClick={buttonClicked} className={getClassName()} cx={x} cy={y} r={100} />
    );
};


