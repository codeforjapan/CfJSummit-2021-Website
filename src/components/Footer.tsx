import styles from '~/styles/components/Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.lFooter}>
      <h1 className={styles.footerLogo}>
        <a href="">
          <img src="./assets/img/common/logo_cfj.png" alt="Code for Japan" />
        </a>
      </h1>
      <p className={styles.footerCopy}>&copy; Code for Japan All rights reserved.</p>
    </footer>
  )
}

export default Footer
