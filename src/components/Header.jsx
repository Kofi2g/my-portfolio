import styles from "../css/Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="https://www.linkedin.com/in/kofi/">Linkdin</a></li>
                <li><a href="https://github.com/Kofi2g">Github</a></li>
            </ul>
        </div>
    )

}

export default Header;