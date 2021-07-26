import styles from '~/styles/components/Header.module.scss'
import { VFC } from 'react'

const Header: VFC = () => {
  return (
    <section>
      <div className={styles.headerMovie}>
        <video src="./hero.mp4" playsInline muted autoPlay />
      </div>
      <section className={styles.headerTitle}>
        <h2>2021.9.18(土)-19(日)</h2>
        <p>@オンライン開催</p>
      </section>
    </section>
  )
}

export default Header
