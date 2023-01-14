import styles from './addcont.module.css';

export function Input(props) {
    return (
        <input type="text" className={styles.input} {...props}/>
    )
}