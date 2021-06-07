import { VFC } from 'react'
import styles from '~/styles/components/LogoSection.module.scss'

const Logo: VFC = () => {
  return (
    <section className={styles.lLogo}>
      <h1>
        <img src="./assets/img/2020/logo.png" alt="Re:Design" />
      </h1>
    </section>
  )
}

export default Logo
