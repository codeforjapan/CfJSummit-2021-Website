import styles from '~/styles/components/Header.module.scss'
import { VFC } from 'react'

const Header: VFC = () => {
  return (
    <header>
      <div className={styles.headerMovie}>
        <video src="./assets/movie/wave.mp4" playsInline muted autoPlay></video>
      </div>
      <section className={styles.headerTitle}>
        <h1>2020.10.17(sat.)-18(sun.)</h1>
        <p>@オンライン開催</p>
      </section>
    </header>
  )
}

export default Header
