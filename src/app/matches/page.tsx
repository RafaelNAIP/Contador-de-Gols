import styles from "../page.module.css";

export default function Matches() {
    return (
    <div className={styles.main}>
      <div className={styles.header}>Contador de gols</div>
      <div className={styles.body}>
      </div>
    </div>
    );
}

// Esquema de contagem de gols por adição em celula.
// A cada partida é criado uma celula on dentro dessa celula teremos linhas
// Cada linha vai represetar um gol na partida e vai ter escrito Gol: *DROPDOWN_OF_PLAYERS* assistencia: *DROPDOWN_OF_PLAYERS*
// No finalmente teremos um botão para contagem de gols e assistencias pra cada jogador
// Opcional: Adicionar opção de criação de planilha