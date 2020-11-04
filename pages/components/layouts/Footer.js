import styles from '../../../styles/Home.module.css'

const Footer = () => {
    return(
            <footer>
                <div className={styles.footer}>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Komopi Logo"  className={styles.logo}  />
                    </a>
                </div>
            </footer>
    )

}





export default Footer;