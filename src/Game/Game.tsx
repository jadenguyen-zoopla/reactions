import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

export const Game: FunctionComponent = () => {
    // add state to game score
    const [gameScore, setGameScore] = useState(0);

    return (
        <section className={styles.content}>
            <h2 className="score">SCORE: {gameScore}</h2>
            <Board gameScore={gameScore} setGameScore={setGameScore}/>
        </section>
    );
};
