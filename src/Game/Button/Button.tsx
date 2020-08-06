import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void; //this is a funtion that takes in number as a parameter but returns nothing
    gameScore: number;
    setGameScore: (newGameScore: number) => void;
}
// Button component
export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId, gameScore, setGameScore}) => {
    // works out if button is already active
    const isActive = id === activeButtonId;

    // function to change the class to active by changing button colour
    const getClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
        }
        return styles.button;
    }

    // function to call setActiveButtonId 
    const changeButton = (): void => {
        if(isActive) {
            // selects random button id
            const randomButton = Math.floor(Math.random() * 8);

            // makes another random button active
            setActiveButtonId(randomButton);

            // whenever we render a button you need to give it gameScore and a setGameScore function that adds 1 to gameScore
            setGameScore(gameScore + 1)
        } 
    }

    return (
        <circle onClick={changeButton} className={getClassName()} cx={x} cy={y} r={100} />
    );
};


