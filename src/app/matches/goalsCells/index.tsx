import styles from "../../page.module.css";

export default function GoalsCells () {
    return (
        <div className={styles.goalsCells}>
            <label>Gol:</label>
            <input />
            <label>Assist:</label>
            <input />
        </div>
    )
}