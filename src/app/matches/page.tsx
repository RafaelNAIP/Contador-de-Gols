'use client'

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import GoalsCells from "./goalsCells";
import { Goals } from "@/Interfaces/goals";
import MatchCells from "./matchCells";

export default function Matches() {
    const [matchCellsArray, setMatchCellsArray] = useState([1])

    const endMatchAndCreateOther = () => {
        setMatchCellsArray(matchCellsArray => [...matchCellsArray, matchCellsArray[matchCellsArray.length - 1] + 1])

        // Criar lógica para disabilitar a partida finalizada, ou seja, não sera mais possivel mexer na partida que foi finalizada os campo de input ficarão desalibilitados
        // e os butões de adicionar e remover as celulas de gols tmb serão desabilitados
    }

    return (
    <div className={styles.main}>
      <div className={styles.header}>Contador de gols</div>
      <div className={styles.body}>
        {matchCellsArray.map((matchNumber) => {
        return (
            <MatchCells matchNumber={matchNumber} />
        )
        })}
        <button onClick={endMatchAndCreateOther} className={styles.finishMatchButton}>Finalizar partida</button>
      </div>
    </div>
    );
}

// Criar botão de finalizar pelada que vai ficar na posição do "footer" e criar um esquema de scrool quando as partidas forem aumentando

// Criar dropdown baseado nos jogadores da lista que jogadores DONE!

// Pensar e organizar a lista de dados que será enviada quando a pelada for finalizada