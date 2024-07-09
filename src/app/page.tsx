"use client"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter(); 
  const [playersList, setPlayersList] = useState('');

  const getAndOrganizePlayersList = () => {
    const lines = playersList.trim().split('\n');

    const names = lines.map(lines => {
      return lines.split('-')[1].trim();
    })

    // Agora é preciso enviar esses dados pra outra tela pra poder organizar em contador ou por partidas
    console.log(names);
    router.push('/matches')
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>Contador de gols</div>
      <div className={styles.body}>
        <p>Coloca a lista da pelada em ordem numerica:</p>
        <textarea onChange={e => setPlayersList(e.target.value)} />
        <p className={styles.exempleText} >Exemplo: <br/>1 - Cr7 <br/>2 - Hazard <br/>3 - Messi <br/>4 - Lewadolskwi <br/>... </p>
        <button className={styles.createButton} onClick={getAndOrganizePlayersList}>Criar pelada</button>
      </div>
    </div>
  );
}
