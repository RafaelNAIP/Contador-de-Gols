'use client'

import Dropdown from "@/components/Dropdown";
import styles from "../../page.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function GoalsCells ({ addGoalsOnList }: {addGoalsOnList: (goal: { goals: string; assist: string;}) => void}) {
    const [playersList, setPlayersList] = useState<string[]>([]);

    const addNoOptionOnAssist = () => {
        let assistPlayerList = playersList.slice();
        assistPlayerList.push("Sem assistências")
        return assistPlayerList;
    }

    useEffect(() => {
        const playersListFromLocalStorage = localStorage.getItem("playersList") || '';
        setPlayersList(JSON.parse(playersListFromLocalStorage))
    }, [])

    return (
        <div className={styles.goalsCells}>
            <label>Gol:</label>
            <Dropdown label="" options={playersList} />
            <label>Assist:</label>
            <Dropdown label="" options={addNoOptionOnAssist()} />
        </div>
    )
}