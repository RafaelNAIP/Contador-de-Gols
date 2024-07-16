"use client"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter(); 
  const [playersList, setPlayersList] = useState('');

  const getAndOrganizePlayersList = () => {
    const lines = playersList.trim().split('\n');
    try {
      const names = lines.map(lines => {
        return lines.split('-')[1].trim();
      })
      if (names.length > 0){
        localStorage.setItem("playersList", JSON.stringify(names))
    
        console.log(names);
        router.push('/matches')
      }
    } catch (error) {
      alert("Adicione uma lista válida")
    }

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
