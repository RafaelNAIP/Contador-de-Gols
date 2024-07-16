'use client'

import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import GoalsCells from "../goalsCells";

export default function MatchCells ({ matchNumber }: { matchNumber: number }) {
    const [goalsCellsArray,setGoalsCellsArray] = useState([1])

    const addNewGoalsCells = () => {
        const oldArray = goalsCellsArray;

        setGoalsCellsArray(oldArray => [...oldArray, oldArray[oldArray.length - 1] + 1])
    }

    const removeGoalsCells = () => {
        if(goalsCellsArray.length > 1) {
            setGoalsCellsArray(goalsCellsArray.slice(0, goalsCellsArray.length - 1))
        }
    }

    const addGoalsOnList = (goal: {goals: string, assist: string}) => {

    }

    return(
        <div className={styles.matchCell}>
            <p>Partida {matchNumber}</p>
            {goalsCellsArray.map(() => <GoalsCells addGoalsOnList={addGoalsOnList} />)}
            <div className={styles.buttonContainer}>
                <button onClick={addNewGoalsCells}>+</button>
                <button onClick={removeGoalsCells}>-</button>
            </div>
        </div>
    )
}