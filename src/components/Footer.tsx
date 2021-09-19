import styles from '~/styles/components/Footer.module.scss'
import Image from 'next/image'
import CfJLogo from '~/assets/CfJLogo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.lFooter}>
      <h1 className={styles.footerLogo}>
        <a
          href="https://www.code4japan.org/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.footerLogo}
        >
          <Image src={CfJLogo} layout={'intrinsic'} alt="Code for Japan" />
        </a>
      </h1>
      <Link href="/analytics" passHref>
        <a className={styles.footerCopy}>Google Analyticsについて</a>
      </Link>
      <p className={styles.footerCopy}>&copy; 2021 Code for Japan All rights reserved.</p>
    </footer>
  )
}

export default Footer
